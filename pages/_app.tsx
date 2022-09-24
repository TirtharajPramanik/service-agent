import '../styles/globals.sass';
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { NavProvider } from '@/context/NavContext';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
	getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	const getLayout = Component.getLayout ?? ((page) => page);
	return (
		<NavProvider>
			{getLayout(
				<>
					<Head>
						<meta name='viewport' content='viewport-fit=cover' />
					</Head>
					<Component {...pageProps} />
				</>
			)}
		</NavProvider>
	);
}

export default MyApp;
