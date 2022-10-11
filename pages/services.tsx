import SideNav from '@/components/layout/SideNav';
import Head from 'next/head';
import { ReactElement } from 'react';
import { NextPageWithLayout } from './_app';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import styles from '@/styles/Services.module.sass';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/free-mode';
import Services from '@/components/Services';
import { IService } from '@/utils/services';
import { getServiceCategory } from '@/utils/firestore';

export function ServiceFooter() {
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

export type IProps = {
	serviceArray: IService[];
};

const mainVariants = {
	hidden: { opacity: 0, x: -200, y: 0 },
	enter: { opacity: 1, x: 0, y: 0 },
	exit: { opacity: 0, x: 0, y: -100 }
};

const ServicesPage: NextPageWithLayout<IProps> = ({ serviceArray }) => {
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
				<Services serviceArray={serviceArray} action={false} />
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
	const serviceArray = await getServiceCategory();
	console.log(serviceArray);
	return {
		props: { serviceArray }
	};
}
