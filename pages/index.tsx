import Head from 'next/head';
import { ReactElement } from 'react';
import styles from '@/styles/Home.module.sass';
import { NextPageWithLayout } from './_app';
import { HiMenuAlt2 } from 'react-icons/hi';
import Image from 'next/image';
import logo from '@/public/logo-hori.svg';
import footWave from '@/public/foot-wave.svg';
import footLogo from '@/public/logo-vert.svg';
import SideNav from '@/components/layout/SideNav';
import { useNav } from '@/context/NavContext';

function HomeHeader() {
	const { toggle } = useNav();
	return (
		<header className={styles.headerContainer}>
			<HiMenuAlt2 className={styles.hamMenu} onClick={toggle} />
			<div className={styles.logoContainer}>
				<Image src={logo} alt='logo' layout='responsive' />
			</div>
			<div className={styles.navSign}>
				<nav className={styles.navDesk}>
					<ul>
						<li className={styles.active}>home</li>
						<li>dashboard</li>
						<li>services</li>
					</ul>
				</nav>
				<button className={styles.signupBtn}>sign up</button>
			</div>
		</header>
	);
}

function HomeFooter() {
	return (
		<>
			<Image src={footWave} alt='wave' layout='responsive' />
			<footer className={styles.footerWrapper}>
				<div className={styles.footerContainer}>
					<div className={styles.contactForm}>
						<input type='email' name='email' placeholder='Enter Your Email' />
						<textarea
							name='message'
							placeholder='Enter Your Message'
							rows={5}
						/>
						<button className={styles.contactFormBtn}>contact</button>
					</div>
					<div className={styles.footLogo}>
						<Image src={footLogo} alt='footer logo' layout='responsive' />
						<button className={styles.contactBtn}>contact</button>
					</div>
				</div>
				<div className={styles.footNav}>
					<p>privacy policy</p>
					<p>about us</p>
					<strong className={styles.copyText}>
						&copy; 2022 philipmart service
					</strong>
				</div>
			</footer>
		</>
	);
}

const Home: NextPageWithLayout = () => {
	const { mobnav } = useNav();
	return (
		<>
			<Head>
				<title>philipmart service agent</title>
				<meta
					name='description'
					content='local service based business agent app by philipmart'
				/>
				<meta
					name='keywords'
					content='small business, digital marketing, online marketing, drycleaners, tailors, handyman, marketing'
				/>
			</Head>
			<main className={styles.mainContainer}>
				<SideNav />
				<h3 className={styles.heroTitle}>Hello World!</h3>
			</main>
		</>
	);
};

Home.getLayout = function getLayout(page: ReactElement) {
	return (
		<>
			<HomeHeader />
			{page}
			<HomeFooter />
		</>
	);
};

export default Home;
