import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = 
    {
        apiKey: "AIzaSyCZ7fhGp4K4dRmSkZV9j11BSafyxOZAJ6Y",
        authDomain: "womenzsarree-db.firebaseapp.com",
        databaseURL: "https://womenzsarree-db.firebaseio.com",
        projectId: "womenzsarree-db",
        storageBucket: "womenzsarree-db.appspot.com",
        messagingSenderId: "852220332582",
        appId: "1:852220332582:web:334110eaf6c045567ff4e7",
        measurementId: "G-W5R8N8J1JP"
      }

export const createUserProfileDocument = async(userAuth, additionalData) =>{
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const {displayName,email} = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }
    catch(error){
      console.log('error creaing user',error.message);
      
    }
    
  }

  return userRef;

  

  

}

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;