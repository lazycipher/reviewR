import React, { useState } from 'react'
import {Block} from 'baseui/block';
import {Button, KIND, SIZE} from 'baseui/button';
import { Input } from 'baseui/input';
import { FormControl } from 'baseui/form-control';
import './Style.css';

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return(
        <div className="loginForm">
            <Block className="formContainer">
                <h2>Signup</h2>
                <FormControl>
                    <>
                        <Input
                            placeholder="email"
                            onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setEmail(e.target.value)}
                            value={email}
                        />
                        <Block as="br" />
                        <Input
                            placeholder="password"
                            onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setPassword(e.target.value)}
                            value={password}
                            type={"password"}
                        />
                        <Block as="br" />
                        <Button
                            type={"submit"}
                            size={SIZE.compact}
                            onClick={()=>console.log(JSON.stringify({"username": email, "password": password}))}
                        >Signup</Button>
                    </>
                </FormControl>
            </Block>
        </div>
    )
}

export default Signup;
