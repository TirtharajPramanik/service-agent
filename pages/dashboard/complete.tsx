import Layout from '@/components/layout';
import Header from '@/components/layout/Header';
import { ReactElement } from 'react';
import { NextPageWithLayout } from '../_app';
import styles from '@/styles/Signup.module.sass';
import Image from 'next/image';
import Link from 'next/link';
import { MdNavigateNext } from 'react-icons/md';
import img from '@/public/finishTask.svg';

const Complete: NextPageWithLayout = () => {
	return (
		<Layout>
			<div className={styles.signupContainer}>
				<div className={styles.signupImg}>
					<Image src={img} alt='signup' layout='responsive' />
				</div>
				<div className={styles.personalContainer}>
					<div className={styles.txtContainer}>
						<h2>Congratulation 🎉</h2>
						<h3>You have Completed your First Assignment</h3>
						<h3 className={styles.alttxt}>
							Let&apos;s see some more pending tasks.
						</h3>
						<Link href='/dashboard'>
							<button type='button' className={styles.nxtbtn}>
								See Dashboard
								<MdNavigateNext size={30} />
							</button>
						</Link>
						<div className={styles.altContainer}>
							<h3>Want to enter Payment details?</h3>
							<Link href='/signup/payment'>
								<button type='button' className={styles.altbtn}>
									Payment
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

Complete.getLayout = function getLayout(page: ReactElement) {
	return (
		<>
			<Header title='Complete' back='/dashboard' action='search' />
			{page}
		</>
	);
};

export default Complete;
