import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import { getStorage, ref, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-storage.js";

//const initializeApp = require("firebase/app");
//const getStorage = require("firebase/storage");
//const ref = require("firebase/storage");

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBMsvknmUwQ7d1SWtVBbx_st7iAla5aA0k",
    authDomain: "personal-portfolio-956e1.firebaseapp.com",
    projectId: "personal-portfolio-956e1",
    storageBucket: "personal-portfolio-956e1.appspot.com",
    messagingSenderId: "408821020828",
    appId: "1:408821020828:web:1b5b564d6c6dee4faf9559",
    measurementId: "G-X3DVYN05FW"
};

const firebaseApp = initializeApp(firebaseConfig);

// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage(firebaseApp);
const imgRef = ref(storage, 'luffy.jpg?alt=media&token=1a170e94-49ec-4c73-be55-e4a094cbe819');

// Get the download URL
getDownloadURL(imgRef)
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