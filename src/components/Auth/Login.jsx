import React, { useState } from 'react'
import {Block} from 'baseui/block';
import {Button, SIZE} from 'baseui/button';
import { Input } from 'baseui/input';
import { FormControl } from 'baseui/form-control';
import firebase from '../firebase';
import './Style.css';
import { Redirect, withRouter } from 'react-router-dom';

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    if(firebase.getCurrentUsername()){
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
                            onClick={login}
                        >
                            Login
                        </Button>
                    </>
                </FormControl>
            </Block>
        </div>
    )
    async function login(){
        try{
            await firebase.login(email, password);
            props.history.replace('/dashboard');
        }catch(err) {
            console.log(err.message);
        }
    }
}

export default withRouter(Login);
