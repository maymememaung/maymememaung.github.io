import { firebaseApp } from "./dbconfig.js";
import { getStorage, ref, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-storage.js";

const storage = getStorage(firebaseApp);
const bgImage = ref(storage, 'Images/site-background.jpg');
const pfImage = ref(storage, 'Images/portfolio-image.jpg');
const resume = ref(storage, 'Images/luffy.jpg');
const featured1 = ref(storage, 'Images/Featured_1.jpg');
const featured2 = ref(storage, 'Images/Featured_2.jpg');
const featured3 = ref(storage, 'Images/Featured_3.jpg');
const featured4 = ref(storage, 'Images/Featured_4.jpg');

let lastScroll = 0;
window.addEventListener("scroll", () => {

  let currScroll = window.scrollY;
  if (currScroll > lastScroll){ //effect added only for scrolling down
    if (window.scrollY >=50 && window.scrollY <= 750){
      window.scrollTo({
        top: 750,
        behavior: "smooth"
      });
    }
  }
  lastScroll = currScroll;
});

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

  getDownloadURL(featured1)
  .then((url) => {
    const fImage1 = document.getElementById('featured-1');
    fImage1.src = url;
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

  getDownloadURL(featured2)
  .then((url) => {
    const fImage2 = document.getElementById('featured-2');
    fImage2.src = url;
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

  getDownloadURL(featured3)
  .then((url) => {
    const fImage3 = document.getElementById('featured-3');
    fImage3.src = url;
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

  getDownloadURL(featured4)
  .then((url) => {
    const fImage4 = document.getElementById('featured-4');
    fImage4.src = url;
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
