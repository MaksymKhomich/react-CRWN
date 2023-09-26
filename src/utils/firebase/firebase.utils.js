import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup,
    GoogleAuthProvider 
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCE7b7Rvjsc1sPx8n-awF5eDwXtaYoStrE",
    authDomain: "crwn-clothing-db-eae70.firebaseapp.com",
    projectId: "crwn-clothing-db-eae70",
    storageBucket: "crwn-clothing-db-eae70.appspot.com",
    messagingSenderId: "103571984878",
    appId: "1:103571984878:web:f0f833a27c4ad841e47eff"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.getCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid)
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if (!userSnapshot.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, { 
                displayName,
                email,
                createdAt
            })
        } catch (error){
            console.log('error creating th user', error.message);
        }
    }

    return userDocRef; 
    // if uer data exists
    // return userDocRef

}