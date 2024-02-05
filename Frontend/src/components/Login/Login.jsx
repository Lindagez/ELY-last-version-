import React, { useState, useEffect } from 'react'
import log from './Login.module.css'
import image from '../../assets/icon/icon.jpeg'
import PropTypes from 'prop-types'
import Status from '../Status/Status'
import { Link, redirect } from 'react-router-dom'

function Login({ onLogin, togglePage, showLogin }) {

  const loginStyles = {
    position: 'fixed',
    right: '65px',
    top: '50px',
    width: showLogin ? '350px' : '0',
    height: 'auto',
    background: '#fff',
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    stroke: '',
    background: '#235',
    border: '1px solid #ccc',
    transition: 'width 0.3s',
    overflow: 'hidden',
    padding: '10px',
    borderRadius: '5px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
    display: showLogin ? 'block' : 'none'
  };


  const outter = {
    display: 'flex',
    backgroundColor: 'rgba(242, 242, 242, 0.28)',
    padding: '10px',
    margin: '15px',
    borderRadius: '15px',
    flexDirection: 'column',
    width: '300px',
  }

  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [enable, setEnable] = useState(true);
  const [token, setToken] = useState('');
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");



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

        onLogin(data);
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
    <div className={log.contain} style={loginStyles}>
      {successMessage && <Status message={successMessage} type="success" />}
      {errorMessage && <Status message={errorMessage} type="error" />}
      <div className={log.loginForm} style={outter}>
        {/* {responseMessage && (
          <p>{responseMessage}</p>
        )} */}
        <form className={log.loginForm} onSubmit={handleSubmit}>
          <h2>Login</h2>
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="example@gmail.com"
            id="email"
            name="email"
            required={true}
          />
          <label htmlFor="password">Password</label>
          <input
            value={password}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="*********"
            id="password"
            name="password"
            required={true}
          />
          <button className={log.button} type="submit" disabled={!enable}>
            Login
          </button>
        </form>
        <br />
        <a href='#' className={log.a} ><span>Forgot password ?</span></a>
        <p style={{fontSize:'18px', color: 'white'}}>Don't have an account ? <button class='btn btn-blue' onClick={togglePage}> Sign Up</button></p>
      </div>
    </div>
  );

}

Login.propTypes = {
  name: PropTypes.string,
  password: PropTypes.string,
  email: PropTypes.string,
  onLogin: PropTypes.func,
}

export default Login
