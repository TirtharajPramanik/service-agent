// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyCxeNA4uMqc1c_9KShjHMIanpY-p5TYnMA',
	authDomain: 'emerfancy.firebaseapp.com',
	projectId: 'emerfancy',
	storageBucket: 'emerfancy.appspot.com',
	messagingSenderId: '581398421368',
	appId: '1:581398421368:web:bb8066567bd893d8cb328d',
	measurementId: 'G-LFCMHEBZ2T'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
