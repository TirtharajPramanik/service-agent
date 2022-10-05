import { PrismaClient } from '@prisma/client';

import allServices from '@/utils/allServices';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();
export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	await prisma.serviceCategory.update({
		where: { name: 'Repairs & Maintenance' },
		data: {
			services: {
				createMany: {
					data: allServices.mechaArray,
					skipDuplicates: true
				}
			}
		}
	});
	await prisma.serviceCategory.update({
		where: { name: 'Traveling & Bookings' },
		data: {
			services: {
				createMany: {
					data: allServices.travelArray,
					skipDuplicates: true
				}
			}
		}
	});
	await prisma.serviceCategory.update({
		where: { name: 'Health & Medicine' },
		data: {
			services: {
				createMany: {
					data: allServices.healArray,
					skipDuplicates: true
				}
			}
		}
	});
	await prisma.serviceCategory.update({
		where: { name: 'Cleaning & Maintenance' },
		data: {
			services: {
				createMany: {
					data: allServices.cleanArray,
					skipDuplicates: true
				}
			}
		}
	});
	await prisma.serviceCategory.update({
		where: { name: 'Legal & Indoor Services' },
		data: {
			services: {
				createMany: {
					data: allServices.lawArray,
					skipDuplicates: true
				}
			}
		}
	});

	res.end('awesome@@');
}
