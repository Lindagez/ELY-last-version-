import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './App.css'
import MainLogin from './components/Login/MainLogin'
import MainRegister from './components/Register/MainRegister'
import Home from './components/Home/Home'
import Dashboard from './components/Dashboard/Dashboard'
import SideLogin from './components/SideLogin/SideLogin'
import PageNotFound from './components/404/PageNotFound';
// import Landing from './components/Landing/Landing';
import LandingNew from './pages/Landing/landingN';
import ProtectedRoutes from './components/ProtectedRoutes/ProtectdRoutes';
import ProductList from './components/Products/ProductList';
import PostItems from './components/Dashboard/PostItems';
import {Settings} from './pages/settings.jsx/settings' 
import { Product } from './pages/posts/posts'; 
import Page from './pages/page/page';
import About from './pages/page/About/About';
import ProfileUp from './pages/page/Profileupdate-New/profileUp';
import { Deleteaccount } from './pages/page/deleteaccoutn/deleteaccount';
import  Order  from './pages/page/order/order';

const App = () => {


  const appStyles = {

  }
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
    <>
      <div className='page-container'>
        <div className='content-wrapper'></div>
        <div className="App" style={appStyles}>
          <Router>
            <Routes>
              <Route path='/' exact element={<LandingNew />} />
              <Route path='/dashboard' element={<ProtectedRoutes><Dashboard /></ProtectedRoutes>} />
              {/* <Route path='/dashboard' element={<Dashboard /> } */}

              <Route path='/login' element={<MainLogin onLogin={handleLogin} />} />
              <Route path='/register' element={<MainRegister />} />
              {/* <Route path='/log' element={<SideLogin />} /> */}
              <Route path='/home' element={<Home />} />
              <Route path='/add' element={<PostItems />} />
              <Route path='*' element={<PageNotFound />} />
              <Route path='/list' element={<ProductList />} />
              <Route path='settings' element={<Settings />} />
              <Route path='post' element={<Product />} />
              {/* <Route path='page' element={<Page />} /> */}
              <Route path='profile' element={<ProfileUp />} />
              <Route path='delete' element={<Deleteaccount />} />
              <Route path='sell' element={<Order />} />
              <Route path='about' element={<About />} />
            </Routes>
          </Router>
        </div>
      </div>
    </>
  )
}

export default App;