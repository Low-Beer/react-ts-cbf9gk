import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './config';

import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, getDocs, setDoc, collection, query } from 'firebase/firestore'
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";

// Initialize Firebase
const app = initializeApp(firebaseConfig);



// AUTH //
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);


export const db = getFirestore();


export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'test');
    const q = query(collectionRef);
  
    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
      const { title, items } = docSnapshot.data();
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
  
    return categoryMap;
};

// FIRESTORE // 

export const storage = getStorage()




export const getImageFolder = (imagesListRef, setImageUrls, setIsLoading, setError) => {

  listAll(imagesListRef).then((response) => {
    console.log(response)
    response.items.forEach((item) => {
      // console.log(item);
      getDownloadURL(item).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
    });
  }).catch(err => setError(err))
  .finally(() => setIsLoading(false));
}