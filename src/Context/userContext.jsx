import React, { createContext, useState } from 'react';

export const UserContext =  createContext();

export const UserProvider = (props) => {

    const [userDetails, setUserDetails] = useState("");

    return (
        <UserContext.Provider value={[userDetails, setUserDetails]} >
            {props.children}
        </UserContext.Provider>
    )
}
