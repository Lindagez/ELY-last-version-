import React, { useState, useEffect } from 'react'
import log from './MainLogin.module.css'
import image from '../../assets/icon/icon.jpeg'
import PropTypes from 'prop-types'
import Status from '../Status/Status'
import Nav from '../../pages/Landing/nav'

function MainLogin({ onLogin }) {

    
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [responseMessage, setResponseMessage] = useState('');
    const [enable, setEnable] = useState(true);
    const [token, setToken] = useState('');
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);


    useEffect(() => {
        if (password.length < 6 || email.length < 6) {
            setEnable(false);
        } else {
            setEnable(true);
        }
    }, [password, email]);

    useEffect(() => {
        const upToken = localStorage.getItem('Token');
        setToken(upToken);
        // console.log("Token from state is: " + upToken);

    }, [token]);

    const handleSignUp = () => {
        window.location.href = '/register'
    }

    const handleSuccess = () => {
        setSuccessMessage('Logged in successfully.');
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




    const toggleForgotPasswordModal = () => {
        setShowForgotPasswordModal(!showForgotPasswordModal);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            if (response.ok) {
                handleSuccess();
                const data = await response.json();
                localStorage.setItem('Token', data.token);
                console.log("Token from local storage is: " + localStorage.getItem('Token'));
                // onLogin(data);
                console.log(data);
                window.location.href = '/dashboard';

            } else {
                setPass('');
                const error = await response.json();
                console.log(error);
                handleError('Invalid credentials.');
            }
        } catch (error) {
            console.log(error);
            // setResponseMessage(error.message);
            handleError();
        }
    };

    return (
        <>
            {successMessage && <Status message={successMessage} type="success" />}
            {errorMessage && <Status message={errorMessage} type="error" />}
            <div className="container mt-5" >
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-body">
                                <h2 className="card-title">Sign In</h2>
                                <form className={log.loginForm} onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="email">Email address</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            placeholder="Enter email"
                                            value={email}
                                            required
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            placeholder="Password"
                                            value={password}
                                            required
                                            onChange={(e) => setPass(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="rememberMe" />
                                        <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                                    </div>
                                    <button type="submit" disabled={!enable} className="btn btn-primary">Log In</button>
                                </form>
                                <div className="mt-3">
                                    <a href="#" onClick={toggleForgotPasswordModal} data-toggle="modal">Forgot Password?</a>
                                </div>
                            </div>
                            <p style={{ fontSize: '16px', color: 'black' }}>Don't have an account ? <button class='btn-sm btn-grey' onClick={() => { handleSignUp() }}> Sign Up</button></p>
                        </div>
                        {/* <button type="button" className={log.close_button} data-dismiss="modal" aria-label="Close" onClick={onClose}>
                            <span aria-hidden="true">&times;</span>
                        </button> */}
                    </div>
                </div>


                {showForgotPasswordModal && (
                    <div className="modal fade" id="forgotPasswordModal" tabIndex="-1" role="dialog" aria-labelledby="forgotPasswordModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="forgotPasswordModalLabel">Forgot Password</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    {/* Add your "Forgot Password" form here */}
                                    <form>
                                        <div className="form-group">
                                            <label htmlFor="forgotEmail">Email address</label>
                                            <input type="email" className="form-control" id="forgotEmail" placeholder="Enter email" />
                                        </div>
                                        <button type="submit" className="btn btn-primary">Reset Password</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

            </div>

        </>
    );

}

MainLogin.propTypes = {
    name: PropTypes.string,
    password: PropTypes.string,
    email: PropTypes.string,
}

export default MainLogin
