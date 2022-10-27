import Header from '@/components/layout/Header';
import Image from 'next/image';
import { ReactElement, useState } from 'react';
import { NextPageWithLayout } from '../_app';
import img from '@/public/signup_signin.svg';
import styles from '@/styles/Signup.module.sass';
import Link from 'next/link';
import Layout from '@/components/layout';
import { MdOutlineVerifiedUser } from 'react-icons/md';
import { AiOutlineMessage } from 'react-icons/ai';
import SkipModal from '@/components/signup/SkipModal';
import { useAgent } from '@/context/AgentContext';

const VerifyPage: NextPageWithLayout = () => {
	const { signinInfo } = useAgent();
	// const [number, setNumber] = useState(signinInfo.number);
	const [otp, setOtp] = useState('');
	const [show, setShow] = useState(false);
	return (
		<>
			{show && (
				<SkipModal
					title='verify'
					dest='/signup/signin'
					action={setShow}
					number='9080706050'
					// number={signinInfo.number}
				/>
			)}
			<Layout>
				<div className={styles.personal}>
					<div className={styles.personalImage}>
						<Image src={img} alt='signin' layout='responsive' />
					</div>
					<div className={styles.personalContainer}>
						<form action='' method='post' className={styles.personalForm}>
							<span className={styles.inpblk}>
								<AiOutlineMessage size={24} color='gray' />
								<h3>check your messages for OTP</h3>
							</span>
							<div className={styles.infoForm}>
								<span className={styles.inpblk}>
									<MdOutlineVerifiedUser size={24} color='gray' />
									<input
										type='text'
										max={10}
										placeholder='Enter your OTP'
										onChange={(e) => setOtp(e.target.value)}
									/>
								</span>
							</div>
						</form>
						<div className={`${styles.altContainer} mt-6`}>
							<h3>Did not recieve message?</h3>
							{/* <Link href='/signup/signin'> */}
							<button
								type='button'
								className={styles.altbtn}
								onClick={() => setShow(true)}>
								Resend
							</button>
							{/* </Link> */}
						</div>
						<Link href='/signup/congrats'>
							<button type='button' className={styles.mainbtn}>
								next
							</button>
						</Link>
						{/* {otp ? (
							------------- ************** space ************** -------------
							------------- ************** space ************** -------------
							------------- ************** space ************** -------------
						) : (
							<button
								type='button'
								className={styles.mainbtn}
								onClick={() => setShow(true)}>
								next
							</button>
						)} */}
					</div>
				</div>
			</Layout>
		</>
	);
};

VerifyPage.getLayout = function getLayout(page: ReactElement) {
	return (
		<>
			<Header title='verify' back='/signup/signin' action='signup' />
			{page}
		</>
	);
};

export default VerifyPage;
