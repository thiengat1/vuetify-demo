/*
 * @Description: 
 * @Author: Lewis
 * @Date: 2020-11-25 02:24:47
 * @LastEditTime: 2020-11-25 02:29:03
 * @LastEditors: Lewis
 */
import firebase from 'firebase'
import 'firebase/firestore'
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyB0QVl-1I-AjkaCJmsUuDO4nexvZyKDZ5k",
    authDomain: "vuetify-todo-cc146.firebaseapp.com",
    databaseURL: "https://vuetify-todo-cc146.firebaseio.com",
    projectId: "vuetify-todo-cc146",
    storageBucket: "vuetify-todo-cc146.appspot.com",
    messagingSenderId: "404711039650",
    appId: "1:404711039650:web:70a8bb7e835f375c756dfb"
  };
  // Initialize Firebase
  export const db=firebase.initializeApp(firebaseConfig).firestore();