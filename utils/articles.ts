import macaIm from '@/public/meca.svg';
import autoIm from '@/public/auto.svg';
import deliIm from '@/public/deli.svg';
import indoIm from '@/public/indo.svg';

const meca = {
	title: 'mechanical repairs',
	desc: 'If you are a mechanic, plumber or an electrician, not to worry, we will help you reach your customers. All you need is your tools and an account in our service.',
	image: macaIm,
	quote: 'join us',
	link: '#'
};
const auto = {
	title: 'auto & rikshaw',
	desc: 'If you have a Rikshaw or an auto and you are circling the city to find passengers. You are in the right place. We will find them for you and guide you to them.',
	image: autoIm,
	quote: 'try it',
	link: '#'
};
const deli = {
	title: 'goods delivery',
	desc: 'Need to deliver goods to customers. We are here to help. We will bring you more orders and help you organize and deliver them fast and also save you money.',
	image: deliIm,
	quote: 'learn more',
	link: '#'
};

const indo = {
	title: 'rental & indoor services',
	desc: 'If you rent Cars, Houses or do cleaning and laundry or provide legal or medical support contact us, and we will find you the client you need.',
	image: indoIm,
	quote: 'see more',
	link: '#'
};

const articles = [meca, auto, deli, indo];
export default articles;
