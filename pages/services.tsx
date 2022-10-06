import SideNav from '@/components/layout/SideNav';
import Head from 'next/head';
import { ReactElement } from 'react';
import { NextPageWithLayout } from './_app';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
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
import { Prisma, PrismaClient } from '@prisma/client';
import { IoCloseCircleOutline } from 'react-icons/io5';

function ServiceFooter() {
	return (
		<footer className={styles.serviceFooter}>
			<p>Did not find your profession above?</p>
			<p className=''>Fill in the form :</p>
			<form action=''>
				<input type='text' placeholder='Job Name' />
				<textarea placeholder='Job Description' />
				<button
					className={styles.btn}
					type='button'
					onClick={() => alert('enter text first')}>
					submit
				</button>
			</form>
		</footer>
	);
}

type IProps = {
	serviceArray: Prisma.ServiceCategoryGetPayload<{
		include: { services: true };
	}>[];
};

const mainVariants = {
	hidden: { opacity: 0, x: -200, y: 0 },
	enter: { opacity: 1, x: 0, y: 0 },
	exit: { opacity: 0, x: 0, y: -100 }
};

const ServicesPage: NextPageWithLayout<IProps> = ({ serviceArray }) => {
	const { selectem, toggle } = useService();
	const selectedItems = [] as string[];
	return (
		<>
			<Head>
				<title>philipmart service agent dashboard</title>
				<meta
					name='description'
					content='local service based business agent app by philipmart'
				/>
				<meta
					name='keywords'
					content='small business, digital marketing, online marketing, drycleaners, tailors, handyman, marketing'
				/>
			</Head>
			<SideNav />
			<motion.main
				initial='hidden'
				animate='enter'
				exit='exit'
				variants={mainVariants}
				transition={{ type: 'linear' }}>
				{/* <> */}
				{serviceArray.map((serviceItem) => {
					return (
						<section className={styles.populars} key={serviceItem.id}>
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
									breakpoints={{ 768: { navigation: { enabled: true } } }}
									modules={[FreeMode, Navigation, Autoplay]}
									navigation={{ enabled: false }}
									freeMode
									autoplay={{
										disableOnInteraction: true,
										pauseOnMouseEnter: true
									}}>
									{serviceItem.services.map((popItem) => {
										return (
											<SwiperSlide
												key={popItem.id}
												onClick={() => toggle(popItem.id)}
												className={
													selectem.includes(popItem.id)
														? styles.poptem
														: styles.popItem
												}>
												<span
													className={
														selectem.includes(popItem.id)
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
								if (!selectedItems.includes(allItem.id))
									if (selectem.includes(allItem.id)) {
										selectedItems.push(allItem.id);
										return (
											<SwiperSlide
												className={styles.selectemCirc}
												key={allItem.id}
												onClick={() => toggle(allItem.id)}>
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
					<button
						type='button'
						className={`${styles.btn} ${styles.nxt}`}
						onClick={() => alert('select service first')}>
						next
					</button>
				</section>
				{/* </> */}
			</motion.main>
		</>
	);
};

ServicesPage.getLayout = function getLayout(page: ReactElement) {
	return (
		<>
			<Header title='services' back='/' action='search' />
			{page}
			<ServiceFooter />
		</>
	);
};

export default ServicesPage;

export async function getStaticProps() {
	const prisma = new PrismaClient();
	const serviceArray = await prisma.serviceCategory.findMany({
		include: { services: true },
		orderBy: { order: 'asc' }
	});
	const popularArray = await prisma.service.findMany({
		where: {
			popular: true
		}
	});
	const popularObject = {
		id: '0',
		name: 'Popular',
		icon: 'popular.svg',
		services: popularArray,
		order: 0
	};
	const allArray = [popularObject, ...serviceArray];
	return { props: { serviceArray: allArray } };
}
