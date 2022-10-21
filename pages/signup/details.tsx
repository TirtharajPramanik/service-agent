import Layout from '@/components/layout';
import Header from '@/components/layout/Header';
import Image from 'next/image';
import Progress from '@/components/signup/Progress';
import { ReactElement, useState } from 'react';
import { NextPageWithLayout } from '../_app';
import styles from '@/styles/Signup.module.sass';
import img from '@/public/signup_details.svg';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { HiOutlineIdentification } from 'react-icons/hi';
import { BsTelephone } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
import { AiOutlineQuestion } from 'react-icons/ai';
import SkipModal from '@/components/signup/SkipModal';
import { useAgent } from '@/context/AgentContext';

const SignupPage: NextPageWithLayout = () => {
	const { setAgentInfo, agentInfo } = useAgent();
	const [name, setName] = useState(agentInfo.name);
	const [number, setNumber] = useState(agentInfo.number);
	const [state, setState] = useState(agentInfo.state);
	const [pin, setPin] = useState(agentInfo.pin);
	const [city, setCity] = useState(agentInfo.city);
	const [ward, setWard] = useState(agentInfo.ward);
	const [ans, setAns] = useState(agentInfo.ans);
	const [show, setShow] = useState(false);
	return (
		<Layout>
			<>
				<Progress stage={2} />
				{show && <SkipModal title='details' dest='/signup' action={setShow} />}
				<div className={styles.personal}>
					<div className={styles.personalImage}>
						<Image src={img} alt='signup' layout='responsive' priority />
					</div>
					<div className={styles.personalContainer}>
						<div className={`${styles.gsign} ${styles.blue}`}>
							<FcGoogle size={30} />
							<p>Sign up with Google</p>
						</div>
						<p className='my-6 text-center'>or,</p>
						<form action='' method='post' className={styles.personalForm}>
							<div className={styles.infoForm}>
								<span className={styles.inpblk}>
									<HiOutlineIdentification size={24} color='gray' />
									<input
										type='text'
										placeholder='Enter Your Name'
										onChange={(e) => setName(e.target.value)}
										defaultValue={name}
									/>
								</span>
								<span className={styles.inpblk}>
									<BsTelephone size={24} color='gray' />
									<input
										type='text'
										max={10}
										placeholder='Enter Phone Number'
										onChange={(e) => setNumber(e.target.value)}
										defaultValue={number}
									/>
								</span>
							</div>
							<div className={styles.addrForm}>
								<span className={styles.inpblk}>
									<GoLocation size={24} color='gray' />
									<p className={styles.label}>Address</p>
								</span>
								<div className=''>
									<input
										type='text'
										placeholder='Your State'
										onChange={(e) => setState(e.target.value)}
										defaultValue={state}
									/>
									<input
										type='text'
										placeholder='Pin Code'
										onChange={(e) => setPin(e.target.value)}
										defaultValue={pin}
									/>
								</div>
								<div className=''>
									<input
										type='text'
										placeholder='Your City'
										onChange={(e) => setCity(e.target.value)}
										defaultValue={city}
									/>
									<input
										type='text'
										placeholder='Ward No'
										onChange={(e) => setWard(e.target.value)}
										defaultValue={ward}
									/>
								</div>
							</div>
							<div className={styles.questForm}>
								<span className={styles.inpblk}>
									<AiOutlineQuestion size={24} color='gray' />
									<label htmlFor='quest' className={styles.label}>
										Custom Question?
									</label>
								</span>
								<input
									type='text'
									name='quest'
									placeholder='Write Your Answer'
									onChange={(e) => setAns(e.target.value)}
									defaultValue={ans}
								/>
							</div>
						</form>
						{/* (name || agentInfo.name) &&
						(number || agentInfo.number) &&
						(state || agentInfo.state) &&
						(pin || agentInfo.pin) &&
						(city || agentInfo.city) &&
						(ward || agentInfo.ward) &&
						(ans || agentInfo.ans)  */}
						{name && number && state && pin && city && ward && ans ? (
							<Link href='/signup/payment'>
								<button
									type='button'
									className={styles.mainbtn}
									onClick={() =>
										setAgentInfo({
											name: name ? name : agentInfo.name,
											number: number ? number : agentInfo.number,
											state: state ? state : agentInfo.state,
											pin: pin ? pin : agentInfo.pin,
											city: city ? city : agentInfo.city,
											ward: ward ? ward : agentInfo.ward,
											ans: ans ? ans : agentInfo.ans
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
			</>
		</Layout>
	);
};

SignupPage.getLayout = function getLayout(page: ReactElement) {
	return (
		<>
			<Header title='details' back='/signup/services' action='signin' />
			{page}
		</>
	);
};

export default SignupPage;
