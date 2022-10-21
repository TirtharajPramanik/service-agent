import styles from '@/styles/Signup.module.sass';
import { BsCreditCard2Back } from 'react-icons/bs';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { HiOutlineIdentification } from 'react-icons/hi';
import { CgOptions } from 'react-icons/cg';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { Dispatch, SetStateAction } from 'react';
import { RiLoginCircleLine } from 'react-icons/ri';
import { MdOutlineVerifiedUser } from 'react-icons/md';

function handleSwitch(key: string) {
	switch (key) {
		case 'payment':
			return <BsCreditCard2Back size={24} />;
		case 'services':
			return <CgOptions size={24} />;
		case 'details':
			return <HiOutlineIdentification size={24} />;
		case 'sign in':
			return <RiLoginCircleLine size={24} />;
		case 'verify':
			return <MdOutlineVerifiedUser size={24} />;

		default:
			return <BsCreditCard2Back size={24} />;
	}
}

function getDesc(key: string) {
	switch (key) {
		case 'payment':
			return 'Set up Payment now?';
		case 'services':
			return 'Select at least one Service.';
		case 'details':
			return 'Fill up the form first.';
		case 'sign in':
			return 'Sign in now?';
		case 'verify':
			return 'Is this your number?';

		default:
			return 'Set up Payment Method now?';
	}
}

function getSml(key: string) {
	switch (key) {
		case 'payment':
			return ['Skip', 'Set up'];
		case 'services':
			return ['Cancel', 'Select'];
		case 'details':
			return ['Cancel', 'Fill up'];
		case 'sign in':
			return ['Sign up', 'Sign in'];
		case 'verify':
			return ['Re-enter', 'Continue'];

		default:
			return ['Skip', 'Set up'];
	}
}

const mainVariants: Variants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: { duration: 0.5, ease: 'easeIn' }
	}
};

function SkipModal({
	title,
	dest,
	action,
	number
}: {
	title: string;
	dest: string;
	action: Dispatch<SetStateAction<boolean>>;
	number?: string;
}) {
	return (
		<motion.div
			className={styles.skipModalContainer}
			variants={mainVariants}
			initial='hidden'
			animate='show'
			exit='hidden'>
			<div className={styles.skipModalWrapper}>
				<AiOutlineCloseCircle
					size={24}
					color='red'
					className={styles.modalX}
					onClick={() => action(false)}
				/>
				<div className={styles.skipModal}>
					<div className=''>
						<span className={styles.inpblk}>
							{handleSwitch(title)}
							<h3 className='text-lg capitalize'>{title}</h3>
						</span>
						<hr />
					</div>
					<p className='text-lg'>{getDesc(title)}</p>
					{number && <p>{number}</p>}
					<div className={styles.btngrp}>
						<Link href={dest}>
							<button
								type='button'
								className={styles.negbtn}
								onClick={() => action(false)}>
								No! {getSml(title)[0]}
							</button>
						</Link>
						<button
							type='button'
							className={styles.skpbtn}
							onClick={() => action(false)}>
							Yes! {getSml(title)[1]}
						</button>
					</div>
				</div>
			</div>
		</motion.div>
	);
}

export default SkipModal;
