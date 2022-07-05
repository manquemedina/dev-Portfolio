// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAW4_yPpb8d-1ZOndddehKkDau_EdCRQng",
  authDomain: "contacto-c4003.firebaseapp.com",
  projectId: "contacto-c4003",
  storageBucket: "contacto-c4003.appspot.com",
  messagingSenderId: "1058422111946",
  appId: "1:1058422111946:web:9f07d0004590de04ca3e33",
};

// Inicializamos Firebase pasandole la configuración específica del proyecto
const app = initializeApp(firebaseConfig);
//linkeamos la bd firestore con la app
const db = getFirestore(app);
//exportamos db para popularla desde el componente <Contacto>
export { db };
