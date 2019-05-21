import React, { useState } from 'react'
import {Block} from 'baseui/block';
import {Button, KIND, SIZE} from 'baseui/button';
import { Input } from 'baseui/input';
import { FormControl } from 'baseui/form-control';
import { loginUser } from '../../firebase/auth';
import './Style.css';

interface LoginPropType{
    history: any
}

const Login: React.FC<LoginPropType> = (props: LoginPropType) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return(
        <div className="loginForm">
            <Block className="formContainer">
                <h2>Login</h2>
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
                        >Login</Button>
                    </>
                </FormControl>
            </Block>
        </div>
    )
    async function login(email: string, password: string){
        try{
            await loginUser(email, password);
            props.history.replace('/dashboard')
        }catch(err){
            alert(err.message);
        }
    }
}

export default Login;
