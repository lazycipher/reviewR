import React, { useState, useContext } from 'react'
import {Block} from 'baseui/block';
import {Button, SIZE} from 'baseui/button';
import { Input } from 'baseui/input';
import { FormControl } from 'baseui/form-control';
import { login, getCurrentUsername, getUserDetails } from '../firebase';
import './Style.css';
import { Redirect, withRouter } from 'react-router-dom';
import {UserContext} from '../../Context/userContext';

const Login = (props) => {
    const [userDetails, setUserDetails] = useContext(UserContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    if(getCurrentUsername()){
        props.history.replace('/dashboard');
    }
    return(
        <div className="loginForm">
            <Block className="formContainer">
                <h2>Login</h2>
                <FormControl>
                    <>
                        <Input
                            placeholder="email"
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                        />
                        <Block as="br" />
                        <Input
                            placeholder="password"
                            onChange={e => setPassword(e.target.value)}
                            value={password}
                            type={"password"}
                        />
                        <Block as="br" />
                        <Button
                            type={"submit"}
                            size={SIZE.compact}
                            onClick={userLogin}
                        >
                            Login
                        </Button>
                    </>
                </FormControl>
            </Block>
        </div>
    )
    async function userLogin(){
        try{
            await login(email, password);
            console.log(await getUserDetails());
            props.history.replace('/dashboard');
        }catch(err) {
            console.log(err.message);
        }
    }
}

export default withRouter(Login);
