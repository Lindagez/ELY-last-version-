import React, { useState, useEffect } from 'react';
import reg from './Register.module.css';
import image from '../../assets/icon/icon.jpeg';
import Status from '../Status/Status';

const PasswordStrengthIndicator = ({ password }) => {
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialCharacter = /[!@#$%^&*()_+\-=[\]{};':"|,.<>/?]/.test(password);

    const getColor = () => {

        if (password.length === 0) {
            return 'gray'; // Default color
        }
        if (password.length < 8) {
            return 'red'; // Weak password
        }
        if (password.length > 8 && hasUppercase && hasLowercase && hasNumber && hasSpecialCharacter) {
            return 'green'; // Strong password
        }
        if (password.length >= 8) {
            return 'orange'; // Medium password
        }
    };

    const getPasswordStrength = () => {
        if (password.length <= 6) return '';
        if (password.length < 8 && password.length > 6) return 'Weak';
        if (password.length > 8 && hasUppercase && hasLowercase && hasNumber && hasSpecialCharacter) return 'Strong';
        if (password.length >= 8) return 'Good';
    };

    return (
        <span style={{ color: getColor() }}>{getPasswordStrength()}</span>
    );
};




function Register() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [responseMessage, setResponseMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [enable, setEnable] = useState(true);


    const regStyles = {
        position: 'fixed',
        top: '50px',
        right: '65px',
        width: '350px',
        height: 'auto',
        background: '#ffffff',
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        border: '1px solid #ccc',
        transition: 'width 0.3s',
        overflow: 'hidden',
        padding: '10px',
        borderRadius: '5px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
        display: 'block',

    }

    const outter = {
        display: 'flex',
        backgroundColor: 'rgba(242, 242, 242, 0.28)',
        padding: '10px',
        margin: '100px',
        borderRadius: '15px',
        flexDirection: 'column',
        width: '100%',
    }

    useEffect(() => {
        if (password.length < 6 || name.length < 3 || email.length < 6 || confirmPassword.length < 6) {
            setEnable(false);
        } else {
            setEnable(true);
        }
    }, [name, email, password, confirmPassword]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            handleError('Passwords do not match');
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/api/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password }),
            });

            if (response.ok) {
                const data = await response.json();
                // setResponseMessage(data.message);
                handleSuccess();
                window.location.href = '/login'
            } else {
                const error = await response.json();
                // setResponseMessage(error.error);
                handleError(error.error);
            }
        } catch (error) {
            console.error('Error:', error);
            // setResponseMessage(error.message);
            handleError(error.message);
        }
    };

    const handleSuccess = () => {
        setSuccessMessage('Registered in successfully.');
        setTimeout(() => {
            setSuccessMessage('');
        }, 3000);
    };

    const handleError = (text = 'Something went wrong. Please try again.') => {
        setErrorMessage(text);
        setTimeout(() => {
            setErrorMessage('');
        }, 3000);
    };

    const handleLogin = () => {
        window.location.href = '/login'
    }


    return (
        <>
            {successMessage && <Status message={successMessage} type="success" />}
            {errorMessage && <Status message={errorMessage} type="error" />}
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h2 className="card-title">Sign Up</h2>
                                <form className={reg.regForm} onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor='user'>Name</label>
                                        <input
                                            type="text"
                                            value={name}
                                            placeholder='Name'
                                            className='form-control'
                                            required={true}
                                            name='user'
                                            id='user'
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                        <label htmlFor="email">Email address</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            required
                                            value={email}
                                            placeholder='youremail@example.com'
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="Password"
                                        />
                                    </div>
                                    <PasswordStrengthIndicator password={password} />

                                    <div className="form-group">
                                        <label htmlFor="confirmPassword">Confirm Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="confirmPassword"
                                            value={confirmPassword}
                                            required={true}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            placeholder="Confirm Password" />
                                    </div>
                                    <button type="submit" disabled={!enable} className="btn btn-primary">Sign Up</button>
                                </form>
                                <p style={{ fontSize: '16px', color: 'black' }}>Already have an account ? <button onClick={handleLogin} class='btn-sm btn-grey'> Sign In</button></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

};

export default Register;