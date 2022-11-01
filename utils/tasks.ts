export interface ITask {
	id: number;
	type: string;
	client: string;
	loc: string;
	dest: string;
	time: string;
	date: string;
	phone: string;
	note: string;
}

const taskArray = [
	{
		id: 0,
		type: 'pick up',
		client: 'ajay dhar',
		loc: 'babu para',
		dest: 'apurba park',
		time: '10:00 am',
		date: 'today',
		phone: '9080706050',
		note: 'pick me up quick.'
	},
	{
		id: 1,
		type: 'deliver',
		client: 'pizza',
		loc: 'babu para',
		dest: 'apurba park',
		time: '10:00 am',
		date: 'today',
		phone: '9080706050',
		note: 'deliver it when its hot.'
	},
	{
		id: 2,
		type: 'repair',
		client: 'car',
		loc: 'babu para',
		dest: 'apurba park',
		time: '10:00 am',
		date: 'today',
		phone: '9080706050',
		note: 'i have a job tomorrow.'
	}
	// {
	// 	id: 3,
	// 	type: 'pick up',
	// 	client: 'ajay dhar',
	// 	loc: 'babu para',
	// 	dest: 'apurba park',
	// 	time: '10:00 am',
	// 	date: 'today',
	// 	phone: '9080706050',
	// 	note: 'pick me up quick.'
	// },
	// {
	// 	id: 4,
	// 	type: 'pick up',
	// 	client: 'ajay dhar',
	// 	loc: 'babu para',
	// 	dest: 'apurba park',
	// 	time: '10:00 am',
	// 	date: 'today',
	// 	phone: '9080706050',
	// 	note: 'pick me up quick.'
	// },
	// {
	// 	id: 5,
	// 	type: 'pick up',
	// 	client: 'ajay dhar',
	// 	loc: 'babu para',
	// 	dest: 'apurba park',
	// 	time: '10:00 am',
	// 	date: 'today',
	// 	phone: '9080706050',
	// 	note: 'pick me up quick.'
	// },
	// {
	// 	id: 6,
	// 	type: 'pick up',
	// 	client: 'ajay dhar',
	// 	loc: 'babu para',
	// 	dest: 'apurba park',
	// 	time: '10:00 am',
	// 	date: 'today',
	// 	phone: '9080706050',
	// 	note: 'pick me up quick.'
	// },
	// {
	// 	id: 7,
	// 	type: 'pick up',
	// 	client: 'ajay dhar',
	// 	loc: 'babu para',
	// 	dest: 'apurba park',
	// 	time: '10:00 am',
	// 	date: 'today',
	// 	phone: '9080706050',
	// 	note: 'pick me up quick.'
	// },
	// {
	// 	id: 8,
	// 	type: 'pick up',
	// 	client: 'ajay dhar',
	// 	loc: 'babu para',
	// 	dest: 'apurba park',
	// 	time: '10:00 am',
	// 	date: 'today',
	// 	phone: '9080706050',
	// 	note: 'pick me up quick.'
	// }
];

export default taskArray;
