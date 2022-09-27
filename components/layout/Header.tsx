import { HiMenuAlt3 } from 'react-icons/hi';
import { IoIosArrowBack } from 'react-icons/io';
import { BiSearchAlt } from 'react-icons/bi';
import Link from 'next/link';
import { useNav } from '@/context/NavContext';
import styles from '@/styles/Layout.module.sass';

interface IProps {
	title: string;
	back: string;
	action: string;
}

function Header({ title, back, action }: IProps) {
	const { toggle } = useNav();
	return (
		<header className={styles.headerContainer}>
			<div className={styles.backTitle}>
				<Link href={back}>
					<div className={`${styles.back} ${styles.action}`}>
						<IoIosArrowBack size={20} />
						<p>back</p>
					</div>
				</Link>
				<p className={`${styles.title} ${styles.inBack}`}>{title}</p>
			</div>
			<p className={`${styles.title} ${styles.notInBack}`}>{title}</p>
			<nav className={styles.navbar}>
				<ul>
					<li>
						<Link href='/'>home</Link>
					</li>
					<li className={title === 'services' ? '' : styles.active}>
						<Link href='/dashboard'>dashboard</Link>
					</li>
					<li className={title === 'services' ? styles.active : ''}>
						<Link href='/services'>services</Link>
					</li>
				</ul>

				<div className={styles.actionContainer}>
					{action === 'search' ? (
						<BiSearchAlt size={24} className={styles.action} />
					) : (
						<Link href={action}>
							<div className={styles.link}>{action}</div>
						</Link>
					)}
					<HiMenuAlt3
						size={24}
						onClick={toggle}
						className={`${styles.action} ${styles.menu}`}
					/>
				</div>
			</nav>
		</header>
	);
}

export default Header;
