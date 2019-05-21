import React from 'react';
import { auth } from "./firebase";


// Sign Up Function
export const createUser = async (name: string, email: string, password: string) => {
    return await auth.createUserWithEmailAndPassword(email, password);
}

// Login Function

export const loginUser = (email: string, password: string) => {
    return auth.signInWithEmailAndPassword(email, password);
}
