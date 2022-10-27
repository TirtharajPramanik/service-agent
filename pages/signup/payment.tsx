import Layout from '@/components/layout';
import Header from '@/components/layout/Header';
import SkipModal from '@/components/signup/SkipModal';
import Progress from '@/components/signup/Progress';
import Link from 'next/link';
import { ReactElement, useState } from 'react';
import { NextPageWithLayout } from '../_app';
import img from '@/public/signup_payment.svg';
import styles from '@/styles/Signup.module.sass';
import Image from 'next/image';
import { FcGoogle } from 'react-icons/fc';
import { SiPaytm } from 'react-icons/si';
import { TbBrandPaypal } from 'react-icons/tb';
import { BsBank } from 'react-icons/bs';
import { HiOutlineIdentification } from 'react-icons/hi';
import { useAgent } from '@/context/AgentContext';

const PaymentPage: NextPageWithLayout = () => {
	const { setPaymentInfo, paymentInfo } = useAgent();
	const [bank, setBank] = useState(paymentInfo.bank);
	const [account, setAccount] = useState(paymentInfo.account);
	const [show, setShow] = useState(false);
	return (
		<Layout>
			<>
				{show && (
					<SkipModal title='payment' dest='/signup/congrats' action={setShow} />
				)}
				<Progress stage={3} />
				<div className={styles.personal}>
					<div className={styles.personalImage}>
						<Image src={img} alt='signup' layout='responsive' priority />
					</div>
					<div className={styles.personalContainer}>
						<div className='space-y-8'>
							<Link href='/signup/congrats'>
								<div className={`${styles.gsign} ${styles.red}`}>
									<FcGoogle size={30} />
									<p>
										Set up with <span>Google</span>
									</p>
								</div>
							</Link>
							<Link href='/signup/congrats'>
								<div className={`${styles.gsign} ${styles.blue}`}>
									<SiPaytm size={30} color='blue' />
									<p>
										Set up with <span>Paytm</span>
									</p>
								</div>
							</Link>
							<Link href='/signup/congrats'>
								<div className={`${styles.gsign} ${styles.indigo}`}>
									<TbBrandPaypal size={30} color='indigo' />
									<p>
										Set up with <span>Paypal</span>
									</p>
								</div>
							</Link>
						</div>
						<p className='my-6 text-center'>or,</p>
						<form action='' method='post' className={styles.personalForm}>
							<span className={styles.inpblk}>
								<BsBank size={24} color='gray' />
								<input
									type='text'
									placeholder='Enter Bank Name'
									onChange={(e) => setBank(e.target.value)}
									defaultValue={bank}
								/>
							</span>
							<span className={styles.inpblk}>
								<HiOutlineIdentification size={24} color='gray' />
								<input
									type='text'
									placeholder='Enter Account No'
									onChange={(e) => setAccount(e.target.value)}
									defaultValue={account}
								/>
							</span>
						</form>
						{/* (bank || paymentInfo.bank) && (account || paymentInfo.account) */}
						<Link href='/signup/congrats'>
							<button
								type='button'
								className={styles.mainbtn}
								onClick={() =>
									setPaymentInfo({
										bank: bank ? bank : paymentInfo.bank,
										account: account ? account : paymentInfo.account
									})
								}>
								next
							</button>
						</Link>
						{/* {bank && account ? (
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
			</>
		</Layout>
	);
};

PaymentPage.getLayout = function getLayout(page: ReactElement) {
	return (
		<>
			<Header title='payment' back='/signup/details' action='pay' />
			{page}
		</>
	);
};

export default PaymentPage;
