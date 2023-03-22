const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY?.toString(),
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN?.toString(),
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID?.toString(),
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET?.toString(),
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID?.toString(),
  appId: process.env.REACT_APP_FIREBASE_APP_ID?.toString(),
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID?.toString(),
};

export default firebaseConfig;
