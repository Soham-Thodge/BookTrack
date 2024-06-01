import React, { useRef, useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from './firebase';
import { useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';

const SignUp = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value);
            const user = userCredential.user;
            await setDoc(doc(db, 'users', user.uid), {
                email: user.email,
            });
            navigate('/profile');
        } catch (error) {
            console.error("Error signing up :", error);
            setError(error.message);
        }
    };

    return (
        <div className="overlay">
            <div className="modal-content">
                <h2 style={{color:'black'}}>Signup</h2>
                <form onSubmit={handleSignUp}>
                    <label>Email:</label>
                    <input type="email" ref={emailRef} required className="signup-email-input" />
                    <label>Password:</label>
                    <input type="password" ref={passwordRef} required className="signup-password-input" />
                    <button type="submit">Sign Up</button>
                </form>
                {error && <p>{error}</p>}
            </div>
        </div>
    );
};

export default SignUp;
