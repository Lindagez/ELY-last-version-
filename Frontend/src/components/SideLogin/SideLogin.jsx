import React, { useState } from 'react';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Dashboard from '../Dashboard/Dashboard';

const MainPage = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginPage, setIsLoginPage] = useState(true);

  function handleLogin() {
    setIsLoggedIn(true);
    window.location.href = '/dashboard';
  }

  function toggleLoginPage() {
    setIsLoginPage(!isLoginPage);
  }

  const handleButtonClick = () => {
    setShowLogin(!showLogin);
  };



  return (
    <div>
      {isLoggedIn ? (
        <Dashboard />
      ) : isLoginPage ? (
        <Login onLogin={handleLogin} togglePage={toggleLoginPage} showLogin={showLogin} />
      ) : (
        <Register togglePage={toggleLoginPage} showLogin={showLogin} />
      )}
      <ButtonComponent onClick={handleButtonClick} />
    </div>
  );
};

export default MainPage;
