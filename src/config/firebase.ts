import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC6WIgQNuhqKqSPduC4ezWfxeuTn8fdfIM",
  authDomain: "zimozi-f8469.firebaseapp.com",
  projectId: "zimozi-f8469",
  storageBucket: "zimozi-f8469.firebasestorage.app",
  messagingSenderId: "16516466113",
  appId: "1:16516466113:web:3a644107c6bf5514de9b40",
  measurementId: "G-GXZS4TZ2N3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();