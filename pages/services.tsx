import { ReactElement } from 'react';
import { NextPageWithLayout } from './_app';
import Header from '@/components/layout/Header';
import styles from '@/styles/Services.module.sass';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/free-mode';
import Services from '@/components/signup/Services';
import { IService } from '@/utils/services';
// import { getServiceCategory } from '@/utils/firestore';
import serviceArray from '@/utils/services';
import Layout from '@/components/layout';

export function ServiceFooter() {
	return (
		<footer className={styles.serviceFooter}>
			<p>Did not find your profession above?</p>
			<p className=''>Fill in the form :</p>
			<form action=''>
				<input type='text' placeholder='Job Name' />
				<textarea placeholder='Job Description' />
				<button
					className={styles.btn}
					type='button'
					onClick={() => alert('enter text first')}>
					submit
				</button>
			</form>
		</footer>
	);
}

export type IProps = {
	serviceArray: IService[];
};

const ServicesPage: NextPageWithLayout<IProps> = ({ serviceArray }) => {
	return (
		<Layout>
			<Services serviceArray={serviceArray} action={false} />
		</Layout>
	);
};

ServicesPage.getLayout = function getLayout(page: ReactElement) {
	return (
		<>
			<Header title='services' back='/' action='search' />
			{page}
			<ServiceFooter />
		</>
	);
};

export default ServicesPage;

export async function getStaticProps() {
	// const serviceArray = await getServiceCategory();
	return {
		props: { serviceArray }
	};
}
