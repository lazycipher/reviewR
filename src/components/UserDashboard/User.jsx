import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import firebase from '../firebase';
import {UserContext} from '../../Context/userContext';


const UserDashboard = (props) => {
  const [userDetails] = useContext(UserContext);
  if(!firebase.getCurrentUsername()) {
		props.history.replace('/login')
		return null
}
  return(
      <div>
        <h1>USER DASHBOARD</h1>
        <h2>Hi! {userDetails.Name}</h2>
      </div>
  )
}

export default withRouter(UserDashboard);
