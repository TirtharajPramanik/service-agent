import SideNav from '@/components/layout/SideNav';
import Head from 'next/head';
import { ReactElement } from 'react';
import { NextPageWithLayout } from './_app';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const mainVariants = {
	hidden: { opacity: 0, x: -200, y: 0 },
	enter: { opacity: 1, x: 0, y: 0 },
	exit: { opacity: 0, x: 0, y: -100 }
};

const DashboardPage: NextPageWithLayout = () => {
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
				transition={{ type: 'linear' }}
				className='h-screen text-center mt-12 text-xl'>
				Dashboard
			</motion.main>
		</>
	);
};

DashboardPage.getLayout = function getLayout(page: ReactElement) {
	return (
		<>
			<Header title='dashboard' back='/' action='search' />
			{page}
			<Footer />
		</>
	);
};

export default DashboardPage;
