import '../styles/globals.sass';
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { NavProvider } from '@/context/NavContext';
import { AnimatePresence } from 'framer-motion';
import { ServiceProvider } from '@/context/ServiceContext';
import { AuthProvider } from '@/context/AuthContext';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
	getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	const getLayout = Component.getLayout ?? ((page) => page);
	return (
		<AuthProvider>
			<NavProvider>
				<ServiceProvider>
					{getLayout(
						<>
							<Head>
								<meta
									name='viewport'
									content='width=device-width, initial-scale=1.0'
								/>
							</Head>
							<AnimatePresence
								mode='wait'
								initial={false}
								onExitComplete={() => window.scrollTo(0, 0)}>
								<Component {...pageProps} />
							</AnimatePresence>
						</>
					)}
				</ServiceProvider>
			</NavProvider>
		</AuthProvider>
	);
}

export default MyApp;
