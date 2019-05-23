import React, { useState } from 'react'
import {Block} from 'baseui/block';
import {Button, KIND, SIZE} from 'baseui/button';
import { Input } from 'baseui/input';
import { FormControl } from 'baseui/form-control';
import firebase from '../firebase';
import { withRouter } from 'react-router-dom';
import './Style.css';

const Signup = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return(
        <div className="loginForm">
            <Block className="formContainer">
                <h2>Signup</h2>
                <FormControl>
                    <>
                        <Input
                            placeholder="Name"
                            onChange={e => setName(e.target.value)}
                            value={name}
                        />
                        <Block as="br" />

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
                            onClick={signup}
                        >Signup</Button>
                    </>
                </FormControl>
            </Block>
        </div>
    )
    async function signup() {
		try {
			await firebase.signup(name, email, password)
			props.history.replace('/dashboard')
		} catch(error) {
			alert(error.message)
		}
}
}

export default withRouter(Signup);
