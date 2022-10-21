import { ReactElement } from 'react';
import { NextPageWithLayout } from './_app';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Layout from '@/components/layout';

const DashboardPage: NextPageWithLayout = () => {
	return <Layout>Dashboard</Layout>;
};

DashboardPage.getLayout = function getLayout(page: ReactElement) {
	return (
		<>
			<Header title='dashboard' back='/' action='search' />
			{page}
			<Footer />
		</>
	);
};

export default DashboardPage;
