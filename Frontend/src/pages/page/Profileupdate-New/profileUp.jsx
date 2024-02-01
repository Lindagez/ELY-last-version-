import React, { useState, useEffect } from 'react'
import Nav from '../../Landing/nav'
import Sidenav from '../../Landing/sidenav'
import Status from '../../../components/Status/Status'
import axios from 'axios'


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

const ProfileUp = () => {

    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [enable, setEnable] = useState(true);
    const [currentUser, setCurrentUser] = useState('');


    useEffect(() => {
        if (newPassword.length < 6 || confirmPass.length < 6) {
            setEnable(false);
        } else {
            setEnable(true);
        }
    }, [newPassword, confirmPass]);

    useEffect(() => {
        // Fetch the current user information
        const fetchCurrentUser = async () => {
            try {
                const token = localStorage.getItem('Token');
                const response = await axios.get('http://localhost:5000/api/users/profile', {
                    headers: { Authorization: `Bearer ${token}` },
                });
                const user = response.data;
                setCurrentUser(user);
            } catch (error) {
                console.error('Failed to fetch current user:', error);
            }
        };

        fetchCurrentUser();
    }, []);


    const handleSuccess = () => {
        setSuccessMessage('Password Updated Successfully');
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

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleNewPassChange = (e) => {
        setNewPassword(e.target.value);
    }

    const handleConfirmPass = (e) => {
        setConfirmPass(e.target.value);
    }

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (newPassword !== confirmPass) {
            handleError('Passwords do not match');
            return;
        }

        try {

            const token = localStorage.getItem('Token');
            const id = currentUser.__id;

            const data = {
                password,
                newPassword
            }
            const respon = await fetch(`http://localhost:5000/api/users/change/${id}`, {
                method: 'PUT',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const response = await axios.put(`http://localhost:5000/api/users/change/${id}`,data, {

                headers: {
                    Authorization: `Bearer ${token}`,
                },

            });

            if (response.ok) {
                const data = await response.json();
                // setResponseMessage(data.message);
                handleSuccess();
            } else {
                const error = await response.json();
                // setResponseMessage(error.error);
                handleError(error.error);
            }
        } catch (error) {
            console.error('Error: ', error.message);
            // setResponseMessage(error.message);
            handleError(error.message);
        }


    }

    return (

        <>
            <Nav />
            <Sidenav />
            {successMessage && <Status message={successMessage} type="success" />}
            {errorMessage && <Status message={errorMessage} type="error" />}
            <div class="container p-0">
                <div class="row">
                    <div class="col-md-7 col-xl-8">
                        <div class="tab-content">
                            <div class="tab-pane fade show active" id="account" role="tabpanel">

                                <div class="card">
                                    <div class="card-header">
                                        <div class="card-actions float-right">
                                            <div class="dropdown show">
                                                <a href="#" data-toggle="dropdown" data-display="static">
                                                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal align-middle">
                                            <circle cx="12" cy="12" r="1"></circle>
                                            <circle cx="19" cy="12" r="1"></circle>
                                            <circle cx="5" cy="12" r="1"></circle>
                                        </svg> */}
                                                </a>

                                                <div class="dropdown-menu dropdown-menu-right">
                                                    <a class="dropdown-item" href="#">Action</a>
                                                    <a class="dropdown-item" href="#">Another action</a>
                                                    <a class="dropdown-item" href="#">Something else here</a>
                                                </div>
                                            </div>
                                        </div>
                                        <h5 class="card-title mb-0">Profile update</h5>
                                    </div>
                                    <div class="card-body">
                                        <form>
                                            <div class="row">
                                                <div class="col-md-8">
                                                    <div class="form-group">
                                                        <label for="inputUsername">Username</label>
                                                        <input type="text" class="form-control" id="inputUsername" placeholder="Username" />
                                                    </div>
                                                    <div class="form-row">
                                                        <div class="form-group col-md-6">
                                                            <label for="inputFirstName">First name</label>
                                                            <input type="text" class="form-control" id="inputFirstName" placeholder="First name" />
                                                        </div>
                                                        <div class="form-group col-md-6">
                                                            <label for="inputLastName">Last name</label>
                                                            <input type="text" class="form-control" id="inputLastName" placeholder="Last name" />
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="inputEmail4">Email</label>
                                                        <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
                                                    </div>


                                                    <div class="form-row">

                                                    </div>

                                                </div>
                                                <div class="col-md-4">
                                                    <div class="text-center">
                                                        <img alt="Andrew Jones" src="https://discoverymood.com/wp-content/uploads/2020/04/Mental-Strong-Women-min.jpg" class="rounded-circle img-responsive mt-2" width="128" height="128" />
                                                        <div class="mt-2">
                                                            <span class="btn btn-primary"><i class="fa fa-upload"></i></span>
                                                        </div>
                                                        <small>For best results, use an image at least 128px by 128px in .jpg format</small>
                                                    </div>
                                                </div>
                                            </div>
                                            <button type="submit" class="btn btn-primary">Save changes</button>
                                        </form>

                                    </div>
                                </div>

                                <div class="card">
                                    <div class="card-header">
                                        <div class="card-actions float-right">
                                        </div>
                                        <h5 class="card-title mb-0">Change Password</h5>
                                    </div>
                                    <div class="card-body">
                                        <form onSubmit={handleSubmit}>
                                            <div class="form-group">
                                                <label for="inputPasswordCurrent">Current Password</label>
                                                <input
                                                    type="password"
                                                    value={password}
                                                    onChange={handlePasswordChange}
                                                    class="form-control"
                                                    required
                                                    id="inputPasswordCurrent" />
                                                {/* <small><a href="#">Forgot your password?</a></small> */}
                                            </div>
                                            <div class="form-group">
                                                <label for="inputPasswordNew">New Password</label>
                                                <input
                                                    type="password"
                                                    value={newPassword}
                                                    class="form-control"
                                                    required
                                                    onChange={handleNewPassChange}
                                                    id="inputPasswordNew" />
                                            </div>
                                            <PasswordStrengthIndicator password={newPassword} />
                                            <div class="form-group">
                                                <label for="inputPasswordNew2">Verify Password</label>
                                                <input
                                                    type="password"
                                                    class="form-control"
                                                    required
                                                    onChange={handleConfirmPass}
                                                    value={confirmPass}
                                                    id="inputPasswordNew2" />
                                            </div>
                                            <button type="submit" disable={!enable} class="btn btn-primary">Save changes</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileUp