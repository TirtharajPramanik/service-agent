import Image from 'next/image';
import logo from '@/public/logo-hori.svg';
import styles from '@/styles/Layout.module.sass';
import { IoClose } from 'react-icons/io5';
import { useNav } from '@/context/NavContext';

function SideNav() {
	const { mobnav, toggle } = useNav();
	return (
		<aside
			className={mobnav ? styles.sideContainer : styles.sideContainerHidden}>
			<div className={styles.sideHeader}>
				<div className={styles.logoContainer}>
					<Image src={logo} alt='logo' layout='responsive' />
				</div>
				<IoClose className={styles.closeIcon} onClick={toggle} />
			</div>
			<nav className={styles.navMob}>
				<ul>
					<li>home</li>
					<li>dashboard</li>
					<li>services</li>
				</ul>
				<button className={styles.signupBtn}>sign up</button>
			</nav>
			<div className={styles.footNav}>
				<p>privacy policy</p>
				<p>about us</p>
				<strong className={styles.copyText}>
					&copy; 2022 philipmart service
				</strong>
			</div>
		</aside>
	);
}

export default SideNav;
