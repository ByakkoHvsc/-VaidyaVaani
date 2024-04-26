import React, {useState} from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {app} from "../firebase";
const auth =getAuth(app);
const SignupPage=()=>{
    const [email,setEmail]=useState("");
    const [password, setPassword] = useState('');

    const createUser=()=>{
        createUserWithEmailAndPassword(auth,email,password);

    };
    return(
        <div className="Signup-page">
            <h1>Sign-up</h1>
            <label>Email</label>
            <input onChange={(e)=>setEmail(e.target.value)}
           
          value={email}
           type="email" required placeholder="Enter your Email"></input>
            <label>password</label>
            <input 
            onChange={(e)=>setPassword(e.target.value)}
            value={password}
            type="Password" required placeholder="Enter your password"></input>
            <button onClick={createUser}>Signup</button>
        </div>
    );
};
export default SignupPage;