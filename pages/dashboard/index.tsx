import { ReactElement } from 'react';
import { NextPageWithLayout } from '../_app';
import Header from '@/components/layout/Header';
// import Footer from '@/components/layout/Footer';
import Layout from '@/components/layout';
import styles from '@/styles/Dashboard.module.sass';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css';
import { BsCalendar2Day } from 'react-icons/bs';
import { HiChevronDown } from 'react-icons/hi';
import taskArray, { ITask } from '@/utils/tasks';
import { Bar } from 'react-chartjs-2';
import weeks from '@/utils/analytics';
import 'chart.js/auto';
import {
	ChartData,
	CoreChartOptions,
	DatasetChartOptions,
	ElementChartOptions,
	PluginChartOptions,
	ScaleChartOptions,
	BarControllerChartOptions
} from 'chart.js/auto';
import { _DeepPartialObject } from 'chart.js/types/utils';
import {
	CiLocationOn,
	CiLocationArrow1,
	CiPhone
	// CiClock2
} from 'react-icons/ci';
import { GrEmergency } from 'react-icons/gr';
import Link from 'next/link';
import { MdOutlineElectricRickshaw } from 'react-icons/md';
import { GiAutoRepair, GiFullPizza } from 'react-icons/gi';
// import { RiMessage3Line } from 'react-icons/ri';
// import Image from 'next/image';
// import mapImg from '@/public/map.svg';

function TimeStamp({ mb }: { mb: boolean }) {
	return (
		<div className={`${styles.timestampContainer} ${mb ? 'mb-6' : ''}`}>
			<div className=''>
				<h4 className='text-gray-500'>Today</h4>
				<h3 className='text-lg'>26 Oct, Wed</h3>
			</div>
			<BsCalendar2Day size={32} className={styles.timestampCalendar} />
		</div>
	);
}

function TaskItem({ task }: { task: ITask }) {
	return (
		<Link href={`/dashboard/task/${task.id}`}>
			<div className={styles.taskCard}>
				{task.id < 1 && (
					<div className='text-white bg-rose-400 w-fit px-2 drop-shadow capitalize absolute -mt-5 rounded-xl font-medium flex space-x-2 items-center'>
						<GrEmergency size={20} />
						<p>emergency</p>
					</div>
				)}
				{/* <div className='mb-2'> */}
				<div className='space-y-2 flex justify-between items-center'>
					<div className='flex items-center space-x-2'>
						{task.id === 0 ? (
							<MdOutlineElectricRickshaw size={24} color='gray' />
						) : task.id === 1 ? (
							<GiFullPizza size={24} color='gray' />
						) : (
							<GiAutoRepair size={24} color='gray' />
						)}
						<h3 className='capitalize'>
							{task.type} {task.client}
						</h3>
					</div>
					<h4 className='capitalize'>{task.date}</h4>
				</div>
				{/* <h4 className='text-sm text-gray-500'>{task.note}</h4> */}
				{/* </div> */}
				<div className='bg-slate-50 rounded-xl p-1 space-y-1'>
					{/* <div className='text-gray-500 text-sm flex items-center'>
						<RiMessage3Line size={20} color='red' className='mr-1' />
						<h4 className='text-sm text-gray-500'>{task.note}</h4>
					</div> */}
					<div className='flex justify-between items-center'>
						<div className='flex items-center'>
							<CiLocationOn size={20} color='red' className='mr-1' />
							<p>{task.loc}</p>
						</div>

						<div className='flex items-center'>
							{/* <CiClock2 size={20} color='red' className='mr-1' /> */}
							<p>{task.time}</p>
						</div>
					</div>
					<div className='flex justify-between items-center'>
						<div className='flex items-center'>
							<CiLocationArrow1 size={20} color='dodgerblue' className='mr-1' />
							<p>{task.dest}</p>
						</div>
						<div className='flex items-center'>
							<CiPhone size={20} color='dodgerblue' className='mr-1' />
							<p>{task.phone}</p>
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
}

const datasets: ChartData<'bar', number[], string> = {
	labels: weeks.map((week) => week.label),
	datasets: [
		{
			label: 'Tasks',
			data: weeks.map((week) => week.tasks),
			borderColor: 'rgb(255, 99, 132)',
			backgroundColor: 'rgba(255, 99, 132, 0.5)',
			borderRadius: 4,
			borderWidth: 2
		}
		// {
		// 	label: 'Completed',
		// 	data: weeks.map((week) => week.completed),
		// 	borderColor: 'rgb(53, 162, 235)',
		// 	backgroundColor: 'rgba(53, 162, 235, 0.5)'
		// 	borderRadius: 4,
		// 	borderWidth: 2
		// }
	]
};

const options: _DeepPartialObject<
	CoreChartOptions<'bar'> &
		ElementChartOptions<'bar'> &
		PluginChartOptions<'bar'> &
		DatasetChartOptions<'bar'> &
		ScaleChartOptions<'bar'> &
		BarControllerChartOptions
> = {
	plugins: { legend: { display: false } },
	responsive: true
	// scales: {
	// 	y: {
	// 		ticks: {
	// 			callback: function (val, index) {
	// 				return `${this.getLabelForValue(Number(val))}%`;
	// 			}
	// 		}
	// 	}
	// }
	// scales: {x: { grid: { display: false } }, y: {grid: { display: false }, title: { text: 'completed tasks', display: true }}}
};

const totalTasks = weeks.map((week) => week.tasks);
const totalCompleted = weeks.map((week) => week.completed);

function Analytics() {
	return (
		<div className={styles.analyticsCard}>
			<div className='mb-2 text-gray-500 flex justify-between items-center'>
				<p className=''>Analytics</p>
				<p className={styles.dropChip}>
					<HiChevronDown size={20} />
					this week
				</p>
			</div>
			<Bar data={datasets} options={options} />
			<div className='mt-2 text-sm text-gray-500 flex justify-between items-center'>
				<p className={`${styles.dropChip} ${'capitalize'}`}>
					<HiChevronDown size={20} />
					all tasks
				</p>
				<p className=''>
					Tasks: {totalTasks.reduce((prev, curr) => prev + curr, 0)}
				</p>
				<p className=''>
					Completed: {totalCompleted.reduce((prev, curr) => prev + curr, 0)}
				</p>
			</div>
		</div>
	);
}

const pagination = {
	clickable: true,
	renderBullet: function (index: number, className: string) {
		return (
			'<span class="' +
			className +
			'">' +
			(index == 0 ? 'status' : 'map') +
			'</span>'
		);
	}
};

const DashboardPage: NextPageWithLayout = () => {
	return (
		<Layout>
			<div className={styles.dashContainer}>
				<div className='p-2 md:hidden transition'>
					<TimeStamp mb={true} />
					<div className={styles.slideContainer}>
						<Swiper
							spaceBetween={50}
							slidesPerView={1}
							autoHeight
							modules={[Pagination, Autoplay]}
							pagination={pagination}
							autoplay={{
								disableOnInteraction: true,
								pauseOnMouseEnter: true
							}}>
							<SwiperSlide className='pb-12'>
								<Analytics />
							</SwiperSlide>
							<SwiperSlide className='pb-12'>
								<div className={styles.mapCard}>Map</div>
							</SwiperSlide>
						</Swiper>
					</div>
				</div>
				<div className={styles.dashWrapper}>
					<TimeStamp mb={false} />
					<Analytics />
					<div className={styles.mapCard}>Map</div>
				</div>
				<div className={styles.scrollContainer}>
					<div className={styles.taskHeader}>
						<h4 className='text-xl'>Task List</h4>
						<h5 className={styles.dropChip}>
							<HiChevronDown size={20} />
							this week
						</h5>
					</div>
					<div className={styles.scrollWrapper}>
						{taskArray.map((task) => {
							return <TaskItem task={task} key={task.id} />;
						})}
					</div>
				</div>
			</div>
		</Layout>
	);
};

DashboardPage.getLayout = function getLayout(page: ReactElement) {
	return (
		<>
			<Header title='dashboard' back='/' action='search' />
			{page}
			{/* <Footer /> */}
		</>
	);
};

export default DashboardPage;
