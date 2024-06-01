import React, { useRef } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value);
            navigate('/');
        } catch (error) {
            console.error("Error logging in :", error);
        }
    };

    return (
        <div className="overlay">
            <div className="modal-content">
                <h2 style={{color:'black'}}>Login</h2>
                <form onSubmit={handleLogin}>
                    <label>Email:</label>
                    <input type="email" ref={emailRef} required className="login-email-input" />
                    <label>Password:</label>
                    <input type="password" ref={passwordRef} required className="login-password-input" />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
