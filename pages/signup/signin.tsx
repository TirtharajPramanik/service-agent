import Header from '@/components/layout/Header';
import Image from 'next/image';
import { ReactElement, useState } from 'react';
import { NextPageWithLayout } from '../_app';
import img from '@/public/signup_signin.svg';
import styles from '@/styles/Signup.module.sass';
import Link from 'next/link';
import Layout from '@/components/layout';
import { FcGoogle } from 'react-icons/fc';
import { BsTelephone } from 'react-icons/bs';
import { useAgent } from '@/context/AgentContext';
import SkipModal from '@/components/signup/SkipModal';

const SigninPage: NextPageWithLayout = () => {
	const { setSigninInfo, signinInfo } = useAgent();
	const [number, setNumber] = useState(signinInfo.number);
	const [show, setShow] = useState(false);
	return (
		<>
			{show && <SkipModal title='sign in' dest='/signup' action={setShow} />}
			<Layout>
				<div className={styles.personal}>
					<div className={styles.personalImage}>
						<Image src={img} alt='signin' layout='responsive' />
					</div>
					<div className={styles.personalContainer}>
						<div className={`${styles.gsign} ${styles.blue}`}>
							<FcGoogle size={30} />
							<p>Sign in with Google</p>
						</div>
						<p className='my-6 text-center'>or,</p>
						<form action='' method='post' className={styles.personalForm}>
							<div className={styles.infoForm}>
								<span className={styles.inpblk}>
									<BsTelephone size={24} color='gray' />
									<input
										type='text'
										max={10}
										placeholder='Enter Phone Number'
										onChange={(e) => setNumber(e.target.value)}
										defaultValue={signinInfo.number}
									/>
								</span>
							</div>
						</form>

						{number ? (
							<Link href='/signup/verify'>
								<button
									type='button'
									className={styles.mainbtn}
									onClick={() =>
										setSigninInfo({
											number: number ? number : signinInfo.number
										})
									}>
									next
								</button>
							</Link>
						) : (
							<button
								type='button'
								className={styles.mainbtn}
								onClick={() => setShow(true)}>
								next
							</button>
						)}
					</div>
				</div>
			</Layout>
		</>
	);
};

SigninPage.getLayout = function getLayout(page: ReactElement) {
	return (
		<>
			<Header title='sign in' back='/signup' action='signup' />
			{page}
		</>
	);
};

export default SigninPage;
