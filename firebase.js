import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBxOeP1or0k5z3Itk7weYZfcY4hG84-wB4",
  authDomain: "lvn-licence-manager-1f8fb.firebaseapp.com",
  projectId: "lvn-licence-manager-1f8fb",
  storageBucket: "lvn-licence-manager-1f8fb.firebasestorage.app",
  messagingSenderId: "1045739350275",
  appId: "1:1045739350275:web:087bf256bf7c6ee6e0a136"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
