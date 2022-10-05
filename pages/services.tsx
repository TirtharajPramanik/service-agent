import SideNav from '@/components/layout/SideNav';
import Head from 'next/head';
import { ReactElement, useState } from 'react';
import { NextPageWithLayout } from './_app';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import styles from '@/styles/Services.module.sass';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode } from 'swiper';
import { IoIosArrowDown } from 'react-icons/io';
import { GiCheckMark } from 'react-icons/gi';
import { useService } from '@/context/ServiceContext';
import { PrismaClient, Service, ServiceCategory } from '@prisma/client';

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
	catArray: ServiceCategory[];
	allArray: Service[];
};

const mainVariants = {
	hidden: { opacity: 0, x: -200, y: 0 },
	enter: { opacity: 1, x: 0, y: 0 },
	exit: { opacity: 0, x: 0, y: -100 }
};

const ServicesPage: NextPageWithLayout<IProps> = ({ catArray, allArray }) => {
	const [openCat, setOpenCat] = useState(catArray[0].id);
	const { selectem, toggle } = useService();
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
				<section className={styles.populars}>
					<h4 className={styles.secTitle}>Popular</h4>

					<div className={styles.popArray}>
						<Swiper
							spaceBetween={16}
							slidesPerView='auto'
							modules={[FreeMode]}
							freeMode>
							{allArray.map((popItem) => {
								if (popItem.popular)
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
				<section className={styles.categories}>
					<h4 className={styles.secTitle}>Categories</h4>
					<div className={styles.catContainer}>
						{catArray.map((catItem) => {
							return (
								<div key={catItem.id}>
									<div
										onClick={() => setOpenCat(catItem.id)}
										className={
											catItem.id === openCat
												? `${styles.catItem} ${styles.openCat}`
												: styles.catItem
										}>
										<Image
											src={'/categoryIcons/' + catItem.icon}
											alt={catItem.name}
											width={96}
											height={96}
										/>
										<p>{catItem.name}</p>
										<hr />

										<IoIosArrowDown
											size={48}
											className={`hidden md:block transition ${
												catItem.id === openCat && 'rotate-180'
											}`}
										/>
									</div>

									<div
										className={
											catItem.id === openCat
												? styles.allArray
												: 'transition hidden'
										}>
										{allArray.length ? (
											allArray.map((allItem) => {
												if (allItem.categoryId === catItem.id)
													return (
														<div
															key={allItem.id}
															className={
																selectem.includes(allItem.id)
																	? styles.selectem
																	: styles.allItem
															}
															onClick={() => toggle(allItem.id)}>
															<span
																className={
																	selectem.includes(allItem.id)
																		? styles.selectemIcon
																		: ' transition hidden'
																}>
																<GiCheckMark />
															</span>
															<Image
																src={'/serviceIcons/' + allItem.icon}
																alt={allItem.name}
																width={48}
																height={48}
															/>
															<p>{allItem.name}</p>
														</div>
													);
											})
										) : (
											<p>There are no options!</p>
										)}
									</div>
								</div>
							);
						})}
					</div>
				</section>
				<section className={styles.actionContainer}>
					<div className={styles.actionBar}>
						<span>
							<p>Selected :</p>
							<p>{selectem.length} items</p>
						</span>
						<div className={styles.selectedIcons}>
							{allArray.map((allItem) => {
								if (selectem.includes(allItem.id))
									return (
										<span className={styles.selectemCirc}>
											{/* <AiOutlineCloseCircle className={styles.selectemClose} /> */}
											<Image
												src={'/serviceIcons/' + allItem.icon}
												alt={allItem.name}
												width={48}
												height={48}
												className={styles.selectIcon}
											/>
										</span>
									);
							})}
						</div>
					</div>
					<button
						type='button'
						className={`${styles.btn} ${styles.nxt}`}
						onClick={() => alert('select service first')}>
						next
					</button>
				</section>
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
	const catArray = await prisma.serviceCategory.findMany();
	const allArray = await prisma.service.findMany();
	return { props: { catArray, allArray } };
}
