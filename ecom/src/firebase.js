import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth" ;
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage" ;

export const firebaseConfig = {
  apiKey: "AIzaSyCJwQWl-z_TKtXXHXc_ozYTQX9dog6tusg",
  authDomain: "ecom-f821b.firebaseapp.com",
  projectId: "ecom-f821b",
  storageBucket: "ecom-f821b.appspot.com",
  messagingSenderId: "874535861440",
  appId: "1:874535861440:web:a534b1e1c15c9e120d0125"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app );
export const db = getFirestore(app);
export const storage = getStorage(app) ;

export default app;