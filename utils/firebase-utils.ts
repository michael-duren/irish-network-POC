// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { EventPreviewCardType } from './types';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAxjZbSI2l2mqpO9J8TxzwVfQ6Sj42xuNU',
  authDomain: 'irish-network-mn-poc.firebaseapp.com',
  projectId: 'irish-network-mn-poc',
  storageBucket: 'irish-network-mn-poc.appspot.com',
  messagingSenderId: '187888925060',
  appId: '1:187888925060:web:81c274c6d65f2300c445d1',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export const getAllEvents = async () => {
  const querySnapshot = await getDocs(collection(db, 'events'));
  return querySnapshot.docs.map(
    (docSnapshot) => docSnapshot.data() as EventPreviewCardType
  );
};

export const getSingleEvent = async (slug: string) => {
  const allEvents = await getAllEvents();
  const singlePost = allEvents.find((event) => event.slug === slug);
  return singlePost;
};
