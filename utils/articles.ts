import mecaIm from '@/public/articleIcons/meca.svg';
import autoIm from '@/public/articleIcons/auto.svg';
import deliIm from '@/public/articleIcons/deli.svg';
import indoIm from '@/public/articleIcons/indo.svg';

export interface IArticle {
	title: string;
	desc: string;
	image: any;
	action: string;
	link: string;
}

const meca = {
	title: 'mechanical repairs',
	desc: 'If you are a mechanic, plumber or an electrician, not to worry, we will help you reach your customers. All you need is your tools and an account in our service.',
	image: mecaIm,
	action: 'join us',
	link: '/signup'
};
const auto = {
	title: 'auto & rikshaw',
	desc: 'If you have a Rikshaw or an auto and you are circling the city to find passengers. You are in the right place. We will find them for you and guide you to them.',
	image: autoIm,
	action: 'try it',
	link: '/signup'
};
const deli = {
	title: 'goods delivery',
	desc: 'Need to deliver goods to customers. We are here to help. We will bring you more orders and help you organize and deliver them fast and also save you money.',
	image: deliIm,
	action: 'learn more',
	link: '/signup'
};
const indo = {
	title: 'rental & indoor services',
	desc: 'If you rent Cars, Houses or do cleaning and laundry or provide legal or medical support contact us, and we will find you the client you need.',
	image: indoIm,
	action: 'see more',
	link: '/signup'
};

const articles = [meca, auto, deli, indo];
export default articles;
