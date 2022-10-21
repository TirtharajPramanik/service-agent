import Header from '@/components/layout/Header';
import Image from 'next/image';
import { ReactElement } from 'react';
import { NextPageWithLayout } from '../_app';
import img from '@/public/signup_congrats.svg';
import styles from '@/styles/Signup.module.sass';
import Link from 'next/link';
import { MdNavigateNext } from 'react-icons/md';
import Layout from '@/components/layout';

const CongratesPage: NextPageWithLayout = () => {
	return (
		<Layout>
			<div className={styles.signupContainer}>
				<div className={styles.signupImg}>
					<Image src={img} alt='signup' layout='responsive' />
				</div>
				<div className={styles.personalContainer}>
					<div className={styles.txtContainer}>
						<h2>Congratulation 🎉</h2>
						<h3>You are signed in</h3>
						<h3 className={styles.alttxt}>
							Let’s start by viewing your nearby customers
						</h3>
						<Link href='/dashboard'>
							<button type='button' className={styles.nxtbtn}>
								See Dashboard
								<MdNavigateNext size={30} />
							</button>
						</Link>
						<div className={styles.altContainer}>
							<h3>Want to explore Services?</h3>
							<Link href='/services'>
								<button type='button' className={styles.altbtn}>
									Services
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

CongratesPage.getLayout = function getLayout(page: ReactElement) {
	return (
		<>
			<Header title='congrats' back='/signup' action='dashboard' />
			{page}
		</>
	);
};

export default CongratesPage;
