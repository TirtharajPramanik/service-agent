import Header from '@/components/layout/Header';
import SideNav from '@/components/layout/SideNav';
import Progress from '@/components/Progress';
import { motion } from 'framer-motion';
import Head from 'next/head';
import { ReactElement } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { NextPageWithLayout } from './_app';

const mainVariants = {
	hidden: { opacity: 0, x: -200, y: 0 },
	enter: { opacity: 1, x: 0, y: 0 },
	exit: { opacity: 0, x: 0, y: -100 }
};

const SignupPage: NextPageWithLayout = () => {
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
				<Progress />

				<Swiper spaceBetween={16} slidesPerView={1}>
					<SwiperSlide>
						<div>hello</div>
					</SwiperSlide>
					<SwiperSlide>
						<div>hello</div>
					</SwiperSlide>
					<SwiperSlide>
						<div>hello</div>
					</SwiperSlide>
					<SwiperSlide>
						<div>hello</div>
					</SwiperSlide>
				</Swiper>
			</motion.main>
		</>
	);
};

SignupPage.getLayout = function getLayout(page: ReactElement) {
	return (
		<>
			<Header title='signup' back='/' action='search' />
			{page}
		</>
	);
};

export default SignupPage;
