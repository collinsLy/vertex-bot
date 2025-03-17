import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAAhW6wpbrkghS5CsAHIAxeZa36wvRomtk",
  authDomain: "vertex-bots.firebaseapp.com",
  projectId: "vertex-bots",
  storageBucket: "vertex-bots.firebasestorage.app",
  messagingSenderId: "988839440274",
  appId: "1:988839440274:web:bcc5f0df8537f551535b4b",
  measurementId: "G-GJSYRTCHJQ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, analytics, auth, db };