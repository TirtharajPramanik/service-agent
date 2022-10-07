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
import { Prisma, PrismaClient } from '@prisma/client';
import Services from '@/components/Services';

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
