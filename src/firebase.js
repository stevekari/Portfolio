// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics, isSupported } from 'firebase/analytics';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCYFSVarEkULF8gPw1fQtrB2exfgHV8UL8',
  authDomain: 'daily-5c591.firebaseapp.com',
  projectId: 'daily-5c591',
  storageBucket: 'daily-5c591.firebasestorage.app',
  messagingSenderId: '273753089132',
  appId: '1:273753089132:web:3f3b86fcaedb5c2e032449',
  measurementId: 'G-0C0YMHR1ZY',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics safely
let analytics = null;
if (typeof window !== 'undefined') {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { app, analytics };

