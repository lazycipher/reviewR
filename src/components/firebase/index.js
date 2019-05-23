import { useContext } from 'react';
import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";
import {UserContext} from '../../Context/userContext';

const config = {
    apiKey: "AIzaSyCxZDlZcDNZIHeI4F3lXrC0823B8U_lJEU",
    authDomain: "reviewr-f6739.firebaseapp.com",
    databaseURL: "https://reviewr-f6739.firebaseio.com",
    projectId: "reviewr-f6739",
    storageBucket: "reviewr-f6739.appspot.com",
    messagingSenderId: "997180876930",
    appId: "1:997180876930:web:c260453f72d353ec"
  };

class Firebase {
	constructor() {
		firebase.initializeApp(config)
		this.auth = firebase.auth()
		this.db = firebase.firestore()
	}

	login(email, password) {
		return this.auth.signInWithEmailAndPassword(email, password).then(() => {
			this.getUserDetails();
		});
	}

	logout() {
		return this.auth.signOut();
	}

	async signup(name, email, password) {
		await this.auth.createUserWithEmailAndPassword(email, password).then((res)=>{
			return this.db.collection('users').doc(res.user.uid).set({
				userName: email,
				userLevel: "user",
				Name: name
			})	
		}).then(()=>{
			this.getUserDetails();
		}).catch(err=>{
			console.log(err.message);
		});
	}

	isInitialized() {
		return new Promise(resolve => {
			this.auth.onAuthStateChanged(resolve)
		})
	}

	getCurrentUsername() {
		return this.auth.currentUser && this.auth.currentUser.uid
	}
	
	getUserDetails() {
		const [userDetails, setUserDetails] = useContext(UserContext);
		this.db.collection('users').doc(this.auth.currentUser.uid).get().then(doc => {
			const userDetails = doc.data();
			setUserDetails({
				Name: userDetails.Name,
				userLevel: userDetails.userLevel,
				userName: userDetails.userName
			}
			)
		});
	}
}

export default new Firebase()
