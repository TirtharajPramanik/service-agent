// import services from '@/utils/services';
import { NextApiRequest, NextApiResponse } from 'next';
// import { addService } from '@/utils/firestore';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	// services.forEach(async (item) => {
	// 	await addServiceWithCategory(item);
	// });

	// services.forEach(async (item) => {
	// 	await addServiceCategory(item);
	// });

	// services.forEach(async (item) => {
	// 	await addService(item);
	// });

	res.end(`awesome@@`);
}
