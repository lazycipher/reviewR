import React, { useContext } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { getCurrentUsername, getUserDetails } from '../firebase';
import {UserContext} from '../../Context/userContext';


const UserDashboard = (props) => {
  const [userDetails, setUserDetails] = useContext(UserContext);
  const data = getUserDetails()
  setUserDetails({
    name: data.name,
    userName: data.userName,
    userLevel: data.userLevel
  });
  console.log(userDetails);
  if(userDetails.userLevel === 'admin') return <Redirect to="/admin" />
  if(!getCurrentUsername()) {
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
