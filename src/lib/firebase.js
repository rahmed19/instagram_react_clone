import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import FirebaseContext from '../context/firebase'

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "instagram-clone-956ff.firebaseapp.com",
    projectId: "instagram-clone-956ff",
    storageBucket: "instagram-clone-956ff.appspot.com",
    messagingSenderId: "748940838292",
    appId: "1:748940838292:web:f321578668e3d3babc3b81"
}

const firebase = Firebase.initializeApp(config)
const { FieldValue } = Firebase.firestore
console.log('firebase', firebase)
export { firebase, FieldValue }