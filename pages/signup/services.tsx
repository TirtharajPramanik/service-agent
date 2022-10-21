import Layout from '@/components/layout';
import Header from '@/components/layout/Header';
import Progress from '@/components/signup/Progress';
import Services from '@/components/signup/Services';
import { getServiceCategory } from '@/utils/firestore';
import { IService } from '@/utils/services';
import { ReactElement } from 'react';
import { NextPageWithLayout } from '../_app';

export type IProps = {
	serviceArray: IService[];
};

const ServicesPage: NextPageWithLayout<IProps> = ({ serviceArray }) => {
	return (
		<Layout>
			<>
				<Progress stage={1} />
				<Services serviceArray={serviceArray} action={true} />
			</>
		</Layout>
	);
};

ServicesPage.getLayout = function getLayout(page: ReactElement) {
	return (
		<>
			<Header title='services' back='/signup' action='search' />
			{page}
		</>
	);
};

export default ServicesPage;

export async function getStaticProps() {
	const serviceArray = await getServiceCategory();
	return {
		props: { serviceArray }
	};
}
