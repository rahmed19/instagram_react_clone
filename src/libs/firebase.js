import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import FirebaseContext from '../context/firebase'

const config = {

}

const firebase = Firebase.initializeApp(config)