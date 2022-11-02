import Layout from '@/components/layout';
import Header from '@/components/layout/Header';
import { NextPageWithLayout } from '@/pages/_app';
import { ReactElement, useState } from 'react';
import styles from '@/styles/Dashboard.module.sass';
import taskArray, { ITask } from '@/utils/tasks';
import { useRouter } from 'next/router';
import {
	CiClock2,
	CiLocationArrow1,
	CiLocationOn,
	CiPhone,
	CiStickyNote
} from 'react-icons/ci';
import {
	GiAutoRepair,
	GiDuration,
	GiFullPizza,
	GiPathDistance
} from 'react-icons/gi';
import { MdOutlineCopyAll, MdOutlineElectricRickshaw } from 'react-icons/md';
import { BsClockHistory } from 'react-icons/bs';
import Link from 'next/link';
import { motion } from 'framer-motion';

export function CopyNumber({ number }: { number: string }) {
	const [copied, setCopied] = useState(false);
	function copyNum() {
		setCopied(true);
		setTimeout(() => setCopied(false), 5000);
	}
	return (
		<div className='text-gray-500 flex items-center relative'>
			<MdOutlineCopyAll
				size={20}
				color='gray'
				className='mr-1 transition hover:drop-shadow hover:scale-105'
				onClick={() => {
					navigator.clipboard.writeText(number);
					copyNum();
				}}
			/>
			{copied && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1, transition: { duration: 0.3 } }}
					className={styles.copyNum}>
					<p>copied!</p>
				</motion.div>
			)}
			<p>{number}</p>
		</div>
	);
}

const Task: NextPageWithLayout = () => {
	const router = useRouter();
	const { taskid } = router.query;
	const task =
		taskArray.find((item) => item.id.toString() === taskid) ?? ({} as ITask);
	return (
		<Layout>
			<div className='p-2 md:flex justify-around'>
				<div className='md:w-1/2 md:p-6'>
					<div className={styles.mapCard}>Map</div>
				</div>
				<div className='md:w-1/2 md:p-6'>
					<div className={styles.taskInfo}>
						<div className='flex items-center space-x-2 m-4'>
							{task.id === 0 ? (
								<MdOutlineElectricRickshaw size={24} />
							) : task.id === 1 ? (
								<GiFullPizza size={24} />
							) : (
								<GiAutoRepair size={24} />
							)}
							<h3 className='capitalize text-lg'>
								{task.type} {task.client}
							</h3>
						</div>
						<div className='flex items-center space-x-2 m-3'>
							<CiStickyNote size={20} />
							<h4 className='text-gray-500'>{task.note}</h4>
						</div>
						<div className='mt-6'>
							<p className='m-2 text-gray-500'>Client Info</p>
							<div className={styles.taskInfoCard}>
								<div className='flex justify-between items-center'>
									<div className='text-gray-500 flex items-center'>
										<CiLocationOn size={20} color='red' className='mr-1' />
										<p>location : </p>
									</div>

									<div className='text-gray-500 flex items-center'>
										<p>{task.loc}</p>
									</div>
								</div>
								<div className='flex justify-between items-center'>
									<div className='text-gray-500 flex items-center'>
										<CiLocationArrow1
											size={20}
											color='dodgerblue'
											className='mr-1'
										/>
										<p>destination : </p>
									</div>
									<div className='text-gray-500 flex items-center'>
										<p>{task.dest}</p>
									</div>
								</div>
								<div className='flex justify-between items-center'>
									<div className='text-gray-500 flex items-center'>
										<CiClock2 size={20} color='red' className='mr-1' />
										<p>time : </p>
									</div>
									<div className='text-gray-500 flex items-center'>
										<p>{task.time}</p>
									</div>
								</div>
								<div className='flex justify-between items-center'>
									<div className='text-gray-500 flex items-center'>
										<GiPathDistance
											size={20}
											color='dodgerblue'
											className='mr-1'
										/>
										<p>distance : </p>
									</div>
									<div className='text-gray-500 flex items-center'>
										<p>300 m</p>
									</div>
								</div>
								<div className='flex justify-between items-center'>
									<div className='text-gray-500 flex items-center'>
										<GiDuration size={20} color='red' className='mr-1' />
										<p>duration : </p>
									</div>
									<div className='text-gray-500 flex items-center'>
										<p>10 min</p>
									</div>
								</div>
								<div className='flex justify-between items-center'>
									<div className='text-gray-500 flex items-center'>
										<CiPhone size={20} color='dodgerblue' className='mr-1' />
										<p>phone : </p>
									</div>
									<CopyNumber number={task.phone} />
								</div>
							</div>
						</div>

						<div className='mt-6 mb-8'>
							<p className='m-2 text-gray-500'>Your Info</p>
							<div className={styles.taskInfoCard}>
								<div className='flex justify-between items-center'>
									<div className='text-gray-500 flex items-center'>
										<CiLocationOn size={20} color='red' className='mr-1' />
										<p>location : </p>
									</div>

									<div className='text-gray-500 flex items-center'>
										<p>protyusha bazar</p>
									</div>
								</div>
								<div className='flex justify-between items-center'>
									<div className='text-gray-500 flex items-center'>
										<CiLocationArrow1
											size={20}
											color='dodgerblue'
											className='mr-1'
										/>
										<p>destination : </p>
									</div>
									<div className='text-gray-500 flex items-center'>
										<p>{task.loc}</p>
									</div>
								</div>
								<div className='flex justify-between items-center'>
									<div className='text-gray-500 flex items-center'>
										<BsClockHistory size={20} color='red' className='mr-1' />
										<p>time left : </p>
									</div>
									<div className='text-gray-500 flex items-center'>
										<p>40 min</p>
									</div>
								</div>
								<div className='flex justify-between items-center'>
									<div className='text-gray-500 flex items-center'>
										<GiPathDistance
											size={20}
											color='dodgerblue'
											className='mr-1'
										/>
										<p>distance : </p>
									</div>
									<div className='text-gray-500 flex items-center'>
										{/* <p>20 min</p> */}
										<p>30 m</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className='flex justify-between items-center p-2 mb-6'>
						<Link href='/dashboard/cancel'>
							<button type='button' className={`${styles.btn} ${styles.out}`}>
								Cancel Job
							</button>
						</Link>
						<Link href='/dashboard/complete'>
							<button type='button' className={`${styles.btn} ${styles.in}`}>
								Finished Job
							</button>
						</Link>
					</div>
				</div>
			</div>
		</Layout>
	);
};

Task.getLayout = function getLayout(page: ReactElement) {
	return (
		<>
			<Header title='pick up' back='/dashboard' action='search' />
			{page}
		</>
	);
};

export default Task;

// <div className={styles.taskInfoCard}>
// 	<div className='flex justify-between items-center'>
// 		<div className='text-gray-500 flex items-center'>
// 			<CiLocationOn size={20} color='red' className='mr-1' />
// 			<p>{task.loc}</p>
// 		</div>

// 		<div className='text-gray-500 flex items-center'>
// 			{/* <CiClock2 size={20} color='red' className='mr-1' /> */}
// 			<p>{task.time}</p>
// 		</div>
// 	</div>
// 	<div className='flex justify-between items-center'>
// 		<div className='text-gray-500 flex items-center'>
// 			<CiLocationArrow1 size={20} color='dodgerblue' className='mr-1' />
// 			<p>{task.dest}</p>
// 		</div>
// 		<div className='text-gray-500 flex items-center'>
// 			<CiPhone size={20} color='dodgerblue' className='mr-1' />
// 			<p>{task.phone}</p>
// 		</div>
// 	</div>
// 	<div className='flex justify-between items-center'>
// 		<div className='text-gray-500 flex items-center'>
// 			<CiLocationArrow1 size={20} color='dodgerblue' className='mr-1' />
// 			<p>300 m</p>
// 		</div>
// 		<div className='text-gray-500 flex items-center'>
// 			<CiPhone size={20} color='dodgerblue' className='mr-1' />
// 			<p>20 min</p>
// 		</div>
// 	</div>
// </div>;
