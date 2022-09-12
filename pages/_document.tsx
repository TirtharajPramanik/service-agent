import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html>
			<Head>
				<meta
					name='description'
					content='local service agent app by philipmart'
				/>
				<link rel='icon' href='/favicon.ico' />
				<link rel='apple-touch-icon' href='/apple-touch-icon.png' />
				<link rel='manifest' href='/manifest.json' />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
