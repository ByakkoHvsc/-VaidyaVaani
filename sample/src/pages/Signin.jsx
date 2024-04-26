import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";
import { useNavigate } from 'react-router-dom';
import "./Signin.css"; // Make sure the path to your CSS file is correct

const auth = getAuth(app);

const SigninPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const signinUser = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                setTimeout(() => {
                    alert('Login successful!');
                    setTimeout(() => {
                        navigate('/dashboard');
                    }, 1000);
                }, 2000);
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className="signin-page">
            <h1>Sign-in</h1>
            <label>Enter your email</label>
            <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="Enter your email"
            />
            <label>Enter your password</label>
            <input
                onChange={(e) => setPassword(e.target.value)} // Added onChange handler
                value={password}
                type="password"
                placeholder="Enter your password"
            />
            <button onClick={signinUser}>Sign me in</button>
        </div>
    );
};

export default SigninPage;
