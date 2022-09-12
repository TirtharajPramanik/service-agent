import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.sass';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>philipmart service agent</title>
				<meta
					name='description'
					content='local service agent app by philipmart'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<h3 className={styles.heroTitle}>Hello World!</h3>
		</>
	);
};

export default Home;
