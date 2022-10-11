import {
	addDoc,
	doc,
	collection,
	getDocs,
	orderBy,
	query,
	where,
	DocumentData
} from 'firebase/firestore';
import { firestore } from '@/firebaseConfig';
import { IService } from './services';

// export async function addServiceWithCategory(item: IService) {
// 	try {
// 		const docRef = await addDoc(
// 			collection(firestore, 'serviceWithCategory'),
// 			item
// 		);
// 		return docRef.id;
// 	} catch (error) {
// 		throw error;
// 	}
// }

// export async function getServiceWithCategory() {
// 	try {
// 		const colRef = collection(firestore, 'serviceWithCategory');
// 		const queryRef = query(colRef, orderBy('order', 'asc'));
// 		const docSnap = await getDocs(queryRef);
// 		const data: DocumentData[] = [];
// 		docSnap.forEach((item) => data.push({ ...item.data(), id: item.id }));
// 		return data;
// 	} catch (error) {
// 		throw error;
// 	}
// }

export async function addServiceCategory(item: IService) {
	try {
		const catColRef = collection(firestore, 'ServiceCategory');
		const catDocRef = await addDoc(catColRef, {
			name: item.name,
			icon: item.icon,
			order: item.order
		});
		return catDocRef.id;
	} catch (error) {
		throw error;
	}
}

export async function getServiceCategory() {
	try {
		const catColRef = collection(firestore, 'ServiceCategory');
		const queryRef = query(catColRef, orderBy('order', 'asc'));
		const catDocSnap = await getDocs(queryRef);
		const catDocs: DocumentData[] = [];
		for (const item of catDocSnap.docs) {
			const serviceDocs: DocumentData[] = [];
			const serviceDocRef = doc(catColRef, item.id);
			const serviceColRef = collection(serviceDocRef, 'Service');
			const serviceDocSnap = await getDocs(serviceColRef);
			serviceDocSnap.forEach((data) =>
				serviceDocs.push({ ...data.data(), id: data.id })
			);
			catDocs.push({ ...item.data(), id: item.id, services: serviceDocs });
		}
		console.log('catdocs:\t', catDocs);
		return catDocs;
	} catch (error) {
		throw error;
	}
}

export async function addService(item: IService) {
	try {
		const catColRef = collection(firestore, 'ServiceCategory');
		const catRef = await getDocs(
			query(catColRef, where('order', '==', item.order))
		);

		const catList: string[] = [];
		catRef.forEach((doc) => catList.push(doc.id));
		const catId = catList[0];
		const catDocRef = doc(catColRef, catId);
		const serviceColRef = collection(catDocRef, 'Service');

		item.services.forEach(
			async (service) =>
				await addDoc(serviceColRef, {
					name: service.name,
					icon: service.icon,
					popular: service.popular
				})
		);
	} catch (error) {
		throw error;
	}
}

export async function getService() {
	try {
		const catColRef = collection(firestore, 'ServiceCategory');
		const catRef = await getDocs(catColRef);

		const data: DocumentData[] = [];

		for (const ref of catRef.docs) {
			const catDocRef = doc(catColRef, ref.id);
			const serviceColRef = collection(catDocRef, 'Service');
			const docSnap = await getDocs(serviceColRef);
			docSnap.forEach((item) => data.push({ ...item.data(), id: item.id }));
		}

		return data;
	} catch (error) {
		throw error;
	}
}
