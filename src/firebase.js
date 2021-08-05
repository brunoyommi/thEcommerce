import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCWzb8FWkjGnTHw7uzwwvF_FQ-CHosSNXg",
    authDomain: "thecommerce-cdf30.firebaseapp.com",
    databaseURL: "https://thecommerce-cdf30-default-rtdb.firebaseio.com",
    projectId: "thecommerce-cdf30",
    storageBucket: "thecommerce-cdf30.appspot.com",
    messagingSenderId: "1018881243834",
    appId: "1:1018881243834:web:8895792c27eaaa32842083"
};


const app = firebase.initializeApp(firebaseConfig);

export const getFirestore = () => {
    //Retorna acceso
    return firebase.firestore(app);
}