import SideNav from '@/components/layout/SideNav';
import Head from 'next/head';
import { ReactElement } from 'react';
import { motion } from 'framer-motion';

const mainVariants = {
	hidden: { opacity: 0, x: -200, y: 0 },
	enter: { opacity: 1, x: 0, y: 0 },
	exit: { opacity: 0, x: 0, y: -100 }
};

const Layout = ({ children }: { children: ReactElement | string }) => {
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
				// className='h-screen text-center mt-12 text-xl'
			>
				{children}
			</motion.main>
		</>
	);
};

export default Layout;
