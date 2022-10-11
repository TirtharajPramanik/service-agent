export interface IService {
	name: string;
	icon: string;
	order: number;
	services: {
		name: string;
		icon: string;
		popular: boolean;
	}[];
}

const service0 = {
	name: 'Popular',
	icon: 'popular.svg',
	order: 0,
	services: [
		{
			name: 'Car Mechanic',
			icon: 'car_repair.svg',
			popular: false
		},
		{
			name: 'Mobile Repair',
			icon: 'phone.svg',
			popular: false
		},
		{
			name: 'Electrician',
			icon: 'electrician.svg',
			popular: false
		},
		{
			name: 'E-Rikshaw Driver',
			icon: 'e-rikshaw_driver.svg',
			popular: false
		},
		{
			name: 'Train Ticket Booking',
			icon: 'train_ticket.svg',
			popular: false
		},
		{
			name: 'Grocery Delivery',
			icon: 'grocery_delivery.svg',
			popular: false
		},
		{
			name: 'Doctor Appointment',
			icon: 'doctor_appointment.svg',
			popular: false
		},
		{
			name: 'Ambulance Emergency',
			icon: 'ambulance.svg',
			popular: false
		},
		{
			name: 'House/Office Cleaning',
			icon: 'house_cleaning.svg',
			popular: false
		},
		{
			name: 'House Maid',
			icon: 'house_maid.svg',
			popular: false
		}
	]
};

const service1 = {
	name: 'Repairs & Maintenance',
	icon: 'repair.svg',
	order: 1,
	services: [
		{
			name: 'Car Mechanic',
			icon: 'car_repair.svg',
			popular: true
		},
		{
			name: 'E-Vehicle Repair',
			icon: 'evehicle.svg',
			popular: false
		},
		{
			name: 'Washing Machine Repair',
			icon: 'washMach.svg',
			popular: false
		},
		{
			name: 'A.C./Cooler Repair',
			icon: 'cooler.svg',
			popular: false
		},
		{
			name: 'Mobile Repair',
			icon: 'phone.svg',
			popular: true
		},
		{
			name: 'T.V./Monitor Repair',
			icon: 'monitor.svg',
			popular: false
		},
		{
			name: 'Electrician',
			icon: 'electrician.svg',
			popular: true
		},
		{
			name: 'Plumber',
			icon: 'plumber.svg',
			popular: false
		}
	]
};

const service2 = {
	name: 'Traveling & Bookings',
	icon: 'travel.svg',
	order: 2,
	services: [
		{
			name: 'Car Rent',
			icon: 'car_rent.svg',
			popular: false
		},
		{
			name: 'E-Rikshaw Driver',
			icon: 'e-rikshaw_driver.svg',
			popular: true
		},
		{
			name: 'Bus Ticket Booking',
			icon: 'bus_ticket.svg',
			popular: false
		},
		{
			name: 'Train Ticket Booking',
			icon: 'train_ticket.svg',
			popular: true
		},
		{
			name: 'Plane Ticket Booking',
			icon: 'plane_ticket.svg',
			popular: false
		},
		{
			name: 'Movie Ticket Booking',
			icon: 'movie_ticket.svg',
			popular: false
		},
		{
			name: 'Hotel Room Booking',
			icon: 'hotel_room.svg',
			popular: false
		},
		{
			name: 'Resturant Table Booking',
			icon: 'resturant_table.svg',
			popular: false
		},
		{
			name: 'Courier Service',
			icon: 'courier_boy.svg',
			popular: false
		},
		{
			name: 'Grocery Delivery',
			icon: 'grocery_delivery.svg',
			popular: true
		},
		{
			name: 'Food Delivery',
			icon: 'food_delivery.svg',
			popular: false
		}
	]
};

const service3 = {
	name: 'Health & Medicine',
	icon: 'health.svg',
	order: 3,
	services: [
		{
			name: 'Doctor Appointment',
			icon: 'doctor_appointment.svg',
			popular: true
		},
		{
			name: 'Home Nurse',
			icon: 'home_nurse.svg',
			popular: false
		},
		{
			name: 'Blood Test',
			icon: 'blood_test.svg',
			popular: false
		},
		{
			name: 'Health Care Service',
			icon: 'health_care.svg',
			popular: false
		},
		{
			name: 'Ambulance Emergency',
			icon: 'ambulance.svg',
			popular: true
		},
		{
			name: 'Medicine Delivery',
			icon: 'medicine_delivery.svg',
			popular: false
		},
		{
			name: 'Veterinarian',
			icon: 'veterinarian.svg',
			popular: false
		},
		{
			name: 'Yoga Teacher',
			icon: 'yoga.svg',
			popular: false
		}
	]
};

const service4 = {
	name: 'Cleaning & Maintenance',
	icon: 'clean.svg',
	order: 4,
	services: [
		{
			name: 'Window Cleaning',
			icon: 'clean_window.svg',
			popular: false
		},
		{
			name: 'House/Office Cleaning',
			icon: 'house_cleaning.svg',
			popular: true
		},
		{
			name: 'Water Tank Cleaning',
			icon: 'clean_tank.svg',
			popular: false
		},
		{
			name: 'Laundry Service',
			icon: 'laundry.svg',
			popular: false
		},
		{
			name: 'Car Wash',
			icon: 'car_wash.svg',
			popular: false
		},
		{
			name: 'Aquarium Cleaning',
			icon: 'aquarium.svg',
			popular: false
		},
		{
			name: 'Toilet Cleaning',
			icon: 'toilet.svg',
			popular: false
		},
		{
			name: 'Sewage Cleaning',
			icon: 'sewage.svg',
			popular: false
		}
	]
};

const service5 = {
	name: 'Legal & Indoor Services',
	icon: 'law.svg',
	order: 5,
	services: [
		{
			name: 'Legal Adviser',
			icon: 'legal.svg',
			popular: false
		},
		{
			name: 'Business License Provider',
			icon: 'license.svg',
			popular: false
		},
		{
			name: 'Income Tax Consultant',
			icon: 'tax.svg',
			popular: false
		},
		{
			name: 'Garden Care',
			icon: 'plants.svg',
			popular: false
		},
		{
			name: 'Beautician',
			icon: 'beauty.svg',
			popular: false
		},
		{
			name: 'House Maid',
			icon: 'house_maid.svg',
			popular: true
		},
		{
			name: 'Manual Labour',
			icon: 'labour.svg',
			popular: false
		},
		{
			name: 'Private Tutor',
			icon: 'tutor.svg',
			popular: false
		}
	]
};

const services = [service0, service1, service2, service3, service4, service5];
export default services;
