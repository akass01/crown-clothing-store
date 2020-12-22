import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA0TGGGeLwUdNG8aBEr_QK0lnnquIeOJJw",
    authDomain: "crwn-db-293c1.firebaseapp.com",
    projectId: "crwn-db-293c1",
    storageBucket: "crwn-db-293c1.appspot.com",
    messagingSenderId: "555089202122",
    appId: "1:555089202122:web:5a0e597bf608d5e7945d33"
  };

  export const createUserProfileDocument = async(userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()
    if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();
    
    try {
        await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
        })
        } catch (error ) {
        console.log('error')
            }
    }
    return userRef;
  }

  firebase.initializeApp(config)
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt : 'select_account'});
  
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;