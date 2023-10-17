import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBp_NAhjm-PVPwP3zRh2Nlnv8X5EXNo5uI",
  authDomain: "technologyandelectronicclintsi.firebaseapp.com",
  projectId: "technologyandelectronicclintsi",
  storageBucket: "technologyandelectronicclintsi.appspot.com",
  messagingSenderId: "473047868468",
  appId: "1:473047868468:web:f94aedd46a403ad8e59661"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;