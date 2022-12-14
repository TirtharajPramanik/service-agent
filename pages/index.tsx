import { ReactElement, useEffect, useRef } from 'react';
import styles from '@/styles/Home.module.sass';
import { NextPageWithLayout } from './_app';
import { HiMenuAlt3 } from 'react-icons/hi';
import { FaAngleDoubleDown } from 'react-icons/fa';
import Image from 'next/image';
import logo from '@/public/logo-hori.svg';
import footWave from '@/public/foot-wave.svg';
import footLogo from '@/public/logo-vert.svg';
import heroLogo from '@/public/hero.svg';
import { useNav } from '@/context/NavContext';
import { motion, useAnimation, useInView, Variants } from 'framer-motion';
import sliderImages from '@/utils/sliderImages';
import Link from 'next/link';
import articles, { IArticle } from '@/utils/articles';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper';
import { useAuth } from '@/context/AuthContext';
import { IoPersonCircle } from 'react-icons/io5';
import Layout from '@/components/layout';

function HomeHeader() {
	const { toggle } = useNav();
	const { logedin } = useAuth();
	return (
		<header className={styles.headerContainer}>
			<div className={styles.logoContainer}>
				<Image src={logo} alt='logo' layout='responsive' />
			</div>
			<div className={styles.navSign}>
				<nav className={styles.navDesk}>
					<ul>
						<li className={styles.active}>
							<Link href='/'>home</Link>
						</li>
						<li>
							<Link href='/dashboard'>dashboard</Link>
						</li>
						<li>
							<Link href='/services'>services</Link>
						</li>
					</ul>
				</nav>
				<div className={styles.signMenu}>
					{logedin ? (
						<Link href='/profile'>
							<IoPersonCircle size={42} className={styles.avatar} />
						</Link>
					) : (
						<Link href='/signup'>
							<button type='button' className={styles.signupBtn}>
								sign up
							</button>
						</Link>
					)}
					<HiMenuAlt3 className={styles.hamMenu} onClick={toggle} />
				</div>
			</div>
		</header>
	);
}

function HomeFooter() {
	return (
		<footer className={styles.footerBound}>
			<Image src={footWave} alt='wave' layout='responsive' />
			<div className={styles.footerWrapper}>
				<div className={styles.footerContainer}>
					<div className={styles.contactForm}>
						<input type='email' name='email' placeholder='Enter Your Email' />
						<textarea
							name='message'
							placeholder='Enter Your Message'
							rows={3}
						/>
						<button
							type='button'
							className={styles.contactFormBtn}
							onClick={() => alert('enter text first')}>
							contact
						</button>
					</div>
					<div className={styles.footLogo}>
						<Image src={footLogo} alt='footer logo' layout='responsive' />
						<button
							type='button'
							className={styles.contactBtn}
							onClick={() => alert('enter text first')}>
							contact
						</button>
					</div>
				</div>
				<div className={styles.footNav}>
					<p>privacy policy</p>
					<p>about us</p>
					<strong className={styles.copyText}>
						&copy; 2022 philipmart service
					</strong>
				</div>
			</div>
		</footer>
	);
}

const articleVariants: Variants = {
	enter: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, ease: 'easeIn' }
	},
	exit: {
		opacity: 0,
		y: 100,
		transition: { duration: 0.5, ease: 'easeOut' }
	}
};

function Article({ item }: { item: IArticle }) {
	const controls = useAnimation();
	const articleRef = useRef(null);
	const inView = useInView(articleRef);
	useEffect(() => {
		if (inView) controls.start('enter');
		else controls.start('exit');
	}, [controls, inView]);
	return (
		<motion.article
			ref={articleRef}
			animate={controls}
			initial='exit'
			variants={articleVariants}
			className={styles.article}>
			<div className={styles.articleImage}>
				<Image src={item.image} alt='slider' layout='responsive' />
			</div>
			<div className={styles.articleTxt}>
				<p className={styles.articleTitle}>{item.title}</p>
				<p className={styles.articleDesc}>{item.desc}</p>
				<Link href={item.link}>
					<button type='button' className={styles.joinBtn}>
						{item.action}
					</button>
				</Link>
			</div>
		</motion.article>
	);
}

const Home: NextPageWithLayout = () => {
	return (
		<Layout>
			<>
				<section className={styles.heroSec}>
					<div className={styles.heroTxt}>
						<div className={styles.iconImage}>
							<Image src={footLogo} alt='icon' layout='responsive' />
						</div>
						<h1 className={styles.heroTitle}>
							take your <span>business online</span>
						</h1>
						<h2 className={styles.heroSubTitle}>
							get more <span>customers</span>
						</h2>
						<Link href='/signup'>
							<button type='button' className={styles.signupNowBtnDesk}>
								sign up now
							</button>
						</Link>
						<Link href='#article'>
							<FaAngleDoubleDown className={styles.scrollBtn} />
						</Link>
					</div>
					<div className={styles.heroImage}>
						<Image src={heroLogo} alt='hero' layout='responsive' priority />
					</div>
				</section>
				<Link href='/dashboard'>
					<button type='button' className={styles.signupNowBtn}>
						sign up now
					</button>
				</Link>

				<div className={styles.sliderContainer}>
					<h3 className={styles.slideTitle}>
						We help local businesses <span>Grow Big</span>
					</h3>
					<Swiper
						slidesPerView={1.25}
						breakpoints={{
							425: { slidesPerView: 1.5 },
							576: { slidesPerView: 2 },
							640: { slidesPerView: 2.25 },
							768: { slidesPerView: 2.5 },
							992: { slidesPerView: 3 }
						}}
						modules={[Autoplay]}
						autoplay>
						{sliderImages.map((item, id) => {
							return (
								<SwiperSlide key={id}>
									<a
										// href={item.link}
										href='#'
										rel='noopener noreferrer'
										// target='_blank'
									>
										<Image src={item.image} alt='slider' layout='responsive' />
										<p className={styles.slideTxt}>philipmart {item.title}</p>
									</a>
								</SwiperSlide>
							);
						})}
					</Swiper>
				</div>

				<section className={styles.articleSec} id='article'>
					{articles.map((item, id) => {
						return <Article key={id} item={item} />;
					})}
				</section>
				<Link href='/services'>
					<button type='button' className={styles.exploreBtn}>
						Explore Services
					</button>
				</Link>
				<section className={styles.methodsContainer}>
					<p className={styles.methodsTitle}>how we work</p>
					<ul className={styles.methods}>
						<li>
							We will showcase our services to people through our network.
						</li>
						<li>
							We will assign our signed in service providers based on location &
							time to provide the best solution.
						</li>
						<li>
							For every customer you have attended with our help, we will charge
							a tiny amount.
						</li>
					</ul>
					<p className={styles.methodsDesc}>
						Until you land your first customer, our services will be completely{' '}
						<span>FREE!</span>
					</p>
					<div className={styles.descContainer}>
						<a
							// href='https://philipmartservice.com'
							href='#'
							rel='noopener noreferrer'
							// target='_blank'
							className={styles.customerLink}>
							<p className={styles.methodsDesc}>
								View our customer <span>APP</span>
							</p>
						</a>
					</div>
				</section>
				<Link href='/signup'>
					<button type='button' className={styles.signupBtmBtn}>
						sign up
					</button>
				</Link>
			</>
		</Layout>
	);
};

Home.getLayout = function getLayout(page: ReactElement) {
	return (
		<>
			<HomeHeader />
			{page}
			<HomeFooter />
		</>
	);
};

export default Home;
