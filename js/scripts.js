import { firebaseApp } from "./dbconfig.js";
import { getStorage, ref, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-storage.js";

const storage = getStorage(firebaseApp);
const bgImage = ref(storage, 'Images/site-background.jpg');
const pfImage = ref(storage, 'Images/portfolio-image.jpg');

getDownloadURL(bgImage)
  .then((url) => {
    const bodyBg = document.getElementsByTagName('body')[0];
    bodyBg.style.backgroundImage = "url("+url+")";
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
      case 'storage/unknown':
        // Unknown error occurred, inspect the server response
        break;
    }
  });

  getDownloadURL(pfImage)
  .then((url) => {
    const pf = document.getElementById('pfImage');
    pf.src = url;
  })
  .catch((error) => {
    switch (error.code) {
      case 'storage/object-not-found':
        break;
      case 'storage/unauthorized':
        break;
      case 'storage/unknown':
        break;
    }
  });