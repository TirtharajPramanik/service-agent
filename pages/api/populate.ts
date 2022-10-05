import { service0 } from './../../utils/services';
import { PrismaClient } from '@prisma/client';
import services from '@/utils/services';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();
export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	services.forEach(async (item) => {
		await prisma.serviceCategory.create({
			data: {
				name: item.name,
				icon: item.icon,
				order: item.order,
				services: {
					createMany: {
						data: item.services
					}
				}
			}
		});
	});
	service0.services.forEach(async (item) => {
		await prisma.service.update({
			where: {
				name: item.name
			},
			data: {
				popular: true
			}
		});
	});

	res.end('awesome@@');
}
