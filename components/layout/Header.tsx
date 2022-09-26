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
			<Link scroll={false} href={back}>
				<div className={`${styles.back} ${styles.action}`}>
					<IoIosArrowBack size={20} />
					<p>back</p>
				</div>
			</Link>
			<p className={styles.title}>{title}</p>
			<div className={styles.actionContainer}>
				{action === 'search' ? (
					<BiSearchAlt size={24} className={styles.action} />
				) : (
					<Link scroll={false} href={action}>
						<div className={styles.link}>{action}</div>
					</Link>
				)}
				<HiMenuAlt3 size={24} onClick={toggle} className={styles.action} />
			</div>
		</header>
	);
}

export default Header;
