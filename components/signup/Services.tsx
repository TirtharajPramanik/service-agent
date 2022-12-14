import styles from '@/styles/Services.module.sass';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/free-mode';
import { Autoplay, FreeMode, Navigation } from 'swiper';
import { GiCheckMark } from 'react-icons/gi';
import { useService } from '@/context/ServiceContext';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { IService } from '@/utils/services';
import Link from 'next/link';
import SkipModal from './SkipModal';
import { useState } from 'react';

interface SProps {
	serviceArray: IService[];
	action: boolean;
}

function Services({ serviceArray, action }: SProps) {
	const { selectem, toggle } = useService();
	const selectedItems = [] as string[];
	const [show, setShow] = useState(false);
	return (
		<>
			{show && <SkipModal title='services' dest='/signup' action={setShow} />}
			<div className={styles.container}>
				{action && (
					<h3 className={styles.headding}>choose all services you provide</h3>
				)}

				{serviceArray.map((serviceItem) => {
					return (
						<section className={styles.populars} key={serviceItem.name}>
							<div className={styles.secTitle}>
								<Image
									src={'/categoryIcons/' + serviceItem.icon}
									alt={serviceItem.name}
									width={48}
									height={48}
								/>
								<h4>{serviceItem.name}</h4>
								<h4 className='text-blue-500'>{serviceItem.services.length}</h4>
							</div>

							<div className={styles.popArray}>
								<Swiper
									spaceBetween={16}
									slidesPerView='auto'
									modules={[FreeMode, Navigation, Autoplay]}
									navigation
									freeMode
									autoplay={{
										disableOnInteraction: true,
										pauseOnMouseEnter: true
									}}>
									{serviceItem.services.map((popItem) => {
										return (
											<SwiperSlide
												key={popItem.name}
												onClick={() => {
													if (action) toggle(popItem.name);
												}}
												className={
													selectem.includes(popItem.name)
														? styles.poptem
														: styles.popItem
												}>
												<span
													className={
														selectem.includes(popItem.name)
															? styles.selectemIcon
															: ' transition hidden'
													}>
													<GiCheckMark />
												</span>
												<Image
													src={'/serviceIcons/' + popItem.icon}
													alt={popItem.name}
													width={48}
													height={48}
												/>
												<p>{popItem.name}</p>
											</SwiperSlide>
										);
									})}
								</Swiper>
							</div>
						</section>
					);
				})}
				{action && (
					<section className={styles.actionContainer}>
						<span>
							<p>Selected:</p>
							<p>{selectem.length} items</p>
						</span>
						<Swiper
							spaceBetween={8}
							slidesPerView='auto'
							modules={[FreeMode]}
							freeMode>
							{serviceArray.map((serviceItem) => {
								return serviceItem.services.map((allItem) => {
									if (!selectedItems.includes(allItem.name))
										if (selectem.includes(allItem.name)) {
											selectedItems.push(allItem.name);
											return (
												<SwiperSlide
													className={styles.selectemCirc}
													key={allItem.name}
													onClick={() => toggle(allItem.name)}>
													<IoCloseCircleOutline
														size={24}
														className={styles.confirmIcon}
													/>
													<Image
														src={'/serviceIcons/' + allItem.icon}
														alt={allItem.name}
														width={48}
														height={48}
														className={styles.selectIcon}
													/>
												</SwiperSlide>
											);
										}
								});
							})}
						</Swiper>
						{selectem.length ? (
							<Link href='/signup/details'>
								<button type='button' className={`${styles.btn} ${styles.nxt}`}>
									next
								</button>
							</Link>
						) : (
							<button
								type='button'
								className={`${styles.btn} ${styles.nxt}`}
								// onClick={() => alert('select service first')}
								onClick={() => setShow(true)}>
								next
							</button>
						)}
					</section>
				)}
			</div>
		</>
	);
}

export default Services;
