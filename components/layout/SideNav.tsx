import Image from 'next/image';
import logo from '@/public/logo-hori.svg';
import styles from '@/styles/Layout.module.sass';
import { IoClose } from 'react-icons/io5';
import { useNav } from '@/context/NavContext';
import Link from 'next/link';

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
					<li onClick={toggle}>
						<Link href='/'>home</Link>
					</li>
					<li onClick={toggle}>
						<Link href='/dashboard'>dashboard</Link>
					</li>
					<li onClick={toggle}>
						<Link href='/services'>services</Link>
					</li>
				</ul>
				<Link href='/signup'>
					<button type='button' className={styles.signupBtn} onClick={toggle}>
						sign up
					</button>
				</Link>
			</nav>
			<div className={styles.footNav}>
				<p onClick={toggle}>privacy policy</p>
				<p onClick={toggle}>about us</p>
				<strong className={styles.copyText}>
					&copy; 2022 philipmart service
				</strong>
			</div>
		</aside>
	);
}

export default SideNav;
