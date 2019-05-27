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

firebase.initializeApp(config)
const auth = firebase.auth()
const db = firebase.firestore()



export const login = async (email, password) => {
	return auth.signInWithEmailAndPassword(email, password)
		// db.collection('users').doc(res.user.uid).get().then((doc)=>{
		// 	const data = doc.data();
		// 	return data;
		// });
}

export const logout = () => {
	return auth.signOut();
}

export const signup = async(name, email, password) => {
	await auth.createUserWithEmailAndPassword(email, password).then((res)=>{
		return db.collection('users').doc(res.user.uid).set({
			userName: email,
			userLevel: "user",
			Name: name
		})	
	}).catch(err=>{
		console.log(err.message);
	});
}

export const isInitialized = () => {
	return new Promise(resolve => {
		auth.onAuthStateChanged(resolve)
	})
}

export const getCurrentUsername = () => {
	console.log(auth.currentUser)
	return auth.currentUser && auth.currentUser.uid
}

export const getUserDetails = async () => {
	const doc = await db.collection('users').doc(auth.currentUser.uid).get()
	return doc.data();
}	

export const isAdmin = async() => {
	const doc = await db.collection('users').doc(auth.currentUser.uid).get();
	const data = doc.data();
	return data.userLevel;
}
