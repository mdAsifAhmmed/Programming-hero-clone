import firebase from "firebase";
// import "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};
firebase.initializeApp(firebaseConfig);
export { firebase };
// export const auth = firebase.auth();
// const googleProvider = new firebase.auth.GoogleAuthProvider();

// export const signInWithGoogle = () => {
//   auth
//     .signInWithPopup(googleProvider)
//     .then((res) => {
//       console.log(res.user);
//     })
//     .catch((error) => {
//       console.log(error.message);
//     });
// };
