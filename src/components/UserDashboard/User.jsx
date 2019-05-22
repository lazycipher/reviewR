import React from 'react';
import { withRouter } from 'react-router-dom';
import firebase from '../firebase';

const UserDashboard = (props) => {

  if(!firebase.getCurrentUsername()) {
		props.history.replace('/login')
		return null
}
  
  return(
      <div>USER DASHBOARD</div>
  )
}

export default withRouter(UserDashboard);
