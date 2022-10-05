/** @type {import('next').NextConfig} */
const runtimeCaching = require('next-pwa/cache');
const withPWA = require('next-pwa')({
	dest: 'public',
	register: true,
	skipWaiting: true,
	runtimeCaching,
	buildExcludes: [/middleware-manifest.json$/],
	disable: process.env.NODE_ENV === 'development'
});

const nextConfig = withPWA({
	reactStrictMode: true,
	swcMinify: true,
	i18n: {
		locales: ['en'],
		defaultLocale: 'en'
	},
	webpack: (config) => {
		config.watchOptions = {
			poll: 1000,
			aggregateTimeout: 300
		};
		return config;
	}
});
module.exports = nextConfig;
