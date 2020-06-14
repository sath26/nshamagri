import firebase from "firebase/app";
import { store } from "../../store";
const App = firebase.initializeApp({
  //   apiKey: "AIzaSyACL1p1FBp0NzoIss5tkI-IXmpz3Xlm60E",
  //   authDomain: "todo-area016.firebaseapp.com",
  //   databaseURL: "https://todo-area016.firebaseio.com",
  //   projectId: "todo-area016",
  //   storageBucket: "todo-area016.appspot.com",
  //   messagingSenderId: "660796682451"

  apiKey: "AIzaSyDPgDSs28hYAe0n8FdfwgJXb_bCHkw0rUg",
  authDomain: "shamagri-demo.firebaseapp.com",
  databaseURL: "https://shamagri-demo.firebaseio.com",
  projectId: "shamagri-demo",
  storageBucket: "shamagri-demo.appspot.com",
  messagingSenderId: "803082167987",
  appId: "1:803082167987:web:3c6668416ae86dec7ff2c6"
});

const fireDB = App.database();
const db = App.firestore();
const storage = App.storage();
const fauth = App.auth();

const { TimeStamp, GeoPoint } = firebase.firestore;
export { TimeStamp, GeoPoint };
export default App;
export { fireDB, storage, fauth, db };
//use this file instead of db.js
