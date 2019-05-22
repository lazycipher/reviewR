import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";

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
		return this.auth.signInWithEmailAndPassword(email, password);
	}

	logout() {
		return this.auth.signOut();
	}

	async register(name, email, password) {
		await this.auth.createUserWithEmailAndPassword(email, password)
		return this.auth.currentUser.updateProfile({
			displayName: name
		})
	}

	isInitialized() {
		return new Promise(resolve => {
			this.auth.onAuthStateChanged(resolve)
		})
	}

	getCurrentUsername() {
		return this.auth.currentUser && this.auth.currentUser.uid
	}
}

export default new Firebase()
