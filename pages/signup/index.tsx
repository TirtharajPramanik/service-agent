import Header from '@/components/layout/Header';
import Image from 'next/image';
import { ReactElement } from 'react';
import { NextPageWithLayout } from '../_app';
import img from '@/public/signup.svg';
import styles from '@/styles/Signup.module.sass';
import Link from 'next/link';
import { MdNavigateNext } from 'react-icons/md';
import Layout from '@/components/layout';

const SignupPage: NextPageWithLayout = () => {
	return (
		<Layout>
			<div className={styles.signupContainer}>
				<div className={styles.signupImg}>
					<Image src={img} alt='signup' layout='responsive' />
				</div>
				<div className={styles.personalContainer}>
					<div className={styles.txtContainer}>
						<h2>Hello There!</h2>
						<h3>Let&apos;s create a new Account!</h3>
						<Link href='/signup/services'>
							<button type='button' className={styles.nxtbtn}>
								Create Account
								<MdNavigateNext size={30} />
							</button>
						</Link>
						<div className={styles.altContainer}>
							<h3>Already have an Account?</h3>
							<Link href='/signup/signin'>
								<button type='button' className={styles.altbtn}>
									Sign in
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

SignupPage.getLayout = function getLayout(page: ReactElement) {
	return (
		<>
			<Header title='sign up' back='/' action='signin' />
			{page}
		</>
	);
};

export default SignupPage;
