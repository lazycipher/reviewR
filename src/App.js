import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import UserDashboard from './components/UserDashboard/User';
import AdminDashboard from './components/AdminDashboard'
import NavBar from './components/Layouts/NavBar';
import { isInitialized } from './components/firebase';
import {Spinner} from 'baseui/spinner';
import './App.css';
import Review from './components/Layouts/Review';

function App() {

	const [firebaseInitialized, setFirebaseInitialized] = useState(false)

	useEffect(() => {
		isInitialized().then(val => {
			setFirebaseInitialized(val)
		})
})
  return firebaseInitialized !== false ? (
    <div className="App">
      
      <Router>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/Dashboard" component={UserDashboard} />
        <Route exact path="/Admin" component={AdminDashboard} />
        <Route path='/review/:id' component={Review} />
        {/* <Route path='/new' component={AddReview} /> */}
      </Router>
      {/* <Login /> */}
    </div>
  ) : <div id="loader"><Spinner /></div>
}

export default App;
