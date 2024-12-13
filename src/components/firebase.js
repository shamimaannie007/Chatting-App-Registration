import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyD9a_GronNiWK_5fWcn3y_d4--54tuKXNY",
  authDomain: "chatting-app2306.firebaseapp.com",
  projectId: "chatting-app2306",
  storageBucket: "chatting-app2306.firebasestorage.app",
  messagingSenderId: "24671530445",
  appId: "1:24671530445:web:884cc6f7796b93b7b56884",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
