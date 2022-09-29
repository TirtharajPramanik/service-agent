import SideNav from '@/components/layout/SideNav';
import Head from 'next/head';
import { ReactElement } from 'react';
import { NextPageWithLayout } from './_app';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import styles from '@/styles/Services.module.sass';
import popArray from '@/utils/popularServices';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode } from 'swiper';
import catArray from '@/utils/serviceCategories.ts';
import { IoIosArrowDown } from 'react-icons/io';

function ServiceFooter() {
	return (
		<footer className={styles.serviceFooter}>
			<p>Did not find your profession above?</p>
			<p className=''>Fill in the form :</p>
			<form action=''>
				<input type='text' placeholder='Job Name' />
				<textarea placeholder='Job Description' />
				<button type='button' onClick={() => alert('enter text first')}>
					Submit
				</button>
			</form>
		</footer>
	);
}

const mainVariants = {
	hidden: { opacity: 0, x: -200, y: 0 },
	enter: { opacity: 1, x: 0, y: 0 },
	exit: { opacity: 0, x: 0, y: -100 }
};

const ServicesPage: NextPageWithLayout = () => {
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
							{popArray.map((item, id) => {
								return (
									<SwiperSlide key={id} className={styles.popItem}>
										<Image
											src={item.icon}
											alt={item.name}
											width={48}
											height={48}
										/>
										<p>{item.name}</p>
									</SwiperSlide>
								);
							})}
						</Swiper>
					</div>
				</section>
				<section className={styles.categories}>
					<h4 className={styles.secTitle}>Categories</h4>
					<div className={styles.catContainer}>
						{catArray.map((item, id) => {
							return (
								<div key={id} className={styles.catItem}>
									<Image
										src={item.icon}
										alt={item.name}
										width={96}
										height={96}
									/>
									<p>{item.name}</p>
									<hr />
									<IoIosArrowDown size={48} className='hidden sm:block' />
								</div>
							);
						})}
					</div>
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
