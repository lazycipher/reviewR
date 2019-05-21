import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Layouts/Home';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import UserDashboard from './components/UserDashboard';
import NavBar from './components/Layouts/NavBar';

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </Router>
      {/* <Login /> */}
    </div>
  );
}

export default App;
