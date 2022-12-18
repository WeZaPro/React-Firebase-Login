import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  // TwitterAuthProvider,
  // GithubAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBtMp5S_WZkU_DzUB9sx0fHLOlISCTop7E",
  authDomain: "projectbot-ab06a.firebaseapp.com",
  databaseURL: "https://projectbot-ab06a-default-rtdb.firebaseio.com",
  projectId: "projectbot-ab06a",
  storageBucket: "projectbot-ab06a.appspot.com",
  messagingSenderId: "847928809674",
  appId: "1:847928809674:web:f90352b418e1279807fc33",
  measurementId: "G-DMY7HDVVD1",
};

initializeApp(firebaseConfig);
export const auth = getAuth();
export const google = new GoogleAuthProvider();
export const facebook = new FacebookAuthProvider();
// export const twitter = new TwitterAuthProvider();
// export const github = new GithubAuthProvider();

// facebook callback url-> https://projectbot-ab06a.firebaseapp.com/__/auth/handler
