import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyBR8sOfvxyUl-GPbWtfx2HDi3K634daxjE",
    authDomain: "crown-shop-4a957.firebaseapp.com",
    projectId: "crown-shop-4a957",
    storageBucket: "crown-shop-4a957.appspot.com",
    messagingSenderId: "845663959673",
    appId: "1:845663959673:web:2f4c6b10f55f6a0f03b2a8",
    measurementId: "G-LTGRNEX59D"
  }

  firebase.initializeApp(config)

  export const createUserProfileDocument = async (userAuth, additionalData) => {
      if(!userAuth) return

      const userRef = firestore.doc(`users/${userAuth.uid}`)
      const snapShot = await userRef.get();
     // console.log('SNAPSHOT', snapShot)
     if(!snapShot.exists) { 
         const { displayName, email } = userAuth;
         const createdAt = new Date();

         try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
         } catch (error) {
            console.log('error creating user', error.message);
            
         }
     }

     return userRef;
  }

 

  export const addCollectionAndDocuments = async (
    collectionKey,
    objectsToAdd
  ) => {
    const collectionRef = firestore.collection(collectionKey);
  
    const batch = firestore.batch();
    objectsToAdd.forEach((obj) => {
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef, obj);
    });
  
    return await batch.commit();
  };


  export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map((doc) => {
      const { title, items } = doc.data();
  
      return {
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id,
        title,
        items,
      };
    });


  
    return transformedCollection.reduce((accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator;
    }, {});
  };




  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
//   provider.addScope('profile');
//   provider.addScope('email');
  provider.setCustomParameters( { prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase