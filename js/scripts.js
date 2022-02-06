import { firebaseApp } from "./dbconfig.js";
import { getStorage, ref, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-storage.js";

const storage = getStorage(firebaseApp);
const banner = ref(storage, 'Images/portfolio-banner.jpg');

getDownloadURL(banner)
  .then((url) => {
    const bannerImg = document.getElementById('main-page-banner');
    bannerImg.style.backgroundImage = "url("+url+")";
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