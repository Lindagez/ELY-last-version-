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


function Register({ togglePage, showLogin }) {

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
    width: showLogin ? '350px' : '0',
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
    display: showLogin ? 'block' : 'none',

  }

  const outter = {
    display: 'flex',
    backgroundColor: 'rgba(242, 242, 242, 0.28)',
    padding: '10px',
    margin: '15px',
    borderRadius: '15px',
    flexDirection: 'column',
    width: '300px',
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
      // setResponseMessage('Passwords do not match');
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
        togglePage();
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


  return (
    <>

      <div className={reg.formContainer} style={regStyles}>
        {successMessage && <Status message={successMessage} type="success" />}
        {errorMessage && <Status message={errorMessage} type="error" />}
        <div className='outter' style={outter}>
          {responseMessage && (
            <p>{responseMessage}</p>
          )}

          <form className={reg.regForm} onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            <label htmlFor='user'>Name</label>
            <input
              type="text"
              value={name}
              placeholder='Name'
              required={true}
              name='user'
              id='user'
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor='email'>Email</label>
            <input
              type="email"
              value={email}
              required={true}
              name='email'
              id='email'
              placeholder='youremail@example.com'
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor='password'>Password</label>
            <input
              type="password"
              placeholder='*********'
              value={password}
              required={true}
              name='password'
              id='password'
              onChange={(e) => setPassword(e.target.value)}
            />
            <PasswordStrengthIndicator password={password} />

            <label htmlFor='confirmPass'>Confirm Password</label>
            <input
              type="password"
              placeholder='*********'
              value={confirmPassword}
              name='confirmPass'
              id='confirmPass'
              required={true}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <br />
            <button className={reg.button} disabled={!enable} type="submit">Sign Up</button>
          </form>
          <p style={{ fontSize: '16px', color: 'white' }}>Already have an account ? <button class='btn btn-blue' onClick={togglePage}> Sign In</button></p>
        </div>
      </div>
    </>
  );

};

export default Register;