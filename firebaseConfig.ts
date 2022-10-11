import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyCxeNA4uMqc1c_9KShjHMIanpY-p5TYnMA',
	authDomain: 'emerfancy.firebaseapp.com',
	projectId: 'emerfancy',
	storageBucket: 'emerfancy.appspot.com',
	messagingSenderId: '581398421368',
	appId: '1:581398421368:web:bb8066567bd893d8cb328d',
	measurementId: 'G-LFCMHEBZ2T'
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export { firestore };
