import { initializeApp } from 'firebase/app';

import { getAuth } from 'firebase/auth';
import { collection, getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyApSY-rlXdnpi4zCQV0pBhu4rKuhoVjxm4',
	authDomain: 'users-firebase-2024.firebaseapp.com',
	projectId: 'users-firebase-2024',
	storageBucket: 'users-firebase-2024.appspot.com',
	messagingSenderId: '353985199602',
	appId: '1:353985199602:web:0c110c28f6a42114247f6b',
	measurementId: 'G-BFM5RXDSSK'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth Module
export const auth = getAuth(app);

// Firestore Module
const db = getFirestore(app);
export const usersCollectionReference = collection(db, 'users');
