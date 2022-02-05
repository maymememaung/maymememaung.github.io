import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBMsvknmUwQ7d1SWtVBbx_st7iAla5aA0k",
    authDomain: "personal-portfolio-956e1.firebaseapp.com",
    projectId: "personal-portfolio-956e1",
    storageBucket: "gs://personal-portfolio-956e1.appspot.com",
    messagingSenderId: "408821020828",
    appId: "1:408821020828:web:1b5b564d6c6dee4faf9559",
    measurementId: "G-X3DVYN05FW"
};

const firebaseApp = initializeApp(firebaseConfig);

// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage(firebaseApp);
const imgRef = ref(storage, 'luffy.jpg');

// Get the download URL
getDownloadURL(starsRef)
  .then((url) => {
    // Insert url into an <img> tag to "download"
    let img = document.getElementById('luffy');
    img.src = url;
  })
  .catch((error) => {
    // A full list of error codes is available at
    // https://firebase.google.com/docs/storage/web/handle-errors
    switch (error.code) {
      case 'storage/object-not-found':
        // File doesn't exist
        break;
      case 'storage/unauthorized':
        // User doesn't have permission to access the object
        break;
      case 'storage/canceled':
        // User canceled the upload
        break;

      // ...

      case 'storage/unknown':
        // Unknown error occurred, inspect the server response
        break;
    }
  });