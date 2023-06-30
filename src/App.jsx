import './App.css';
import Footer from './features/footer/Footer';
import TopNav from './features/header/TopNav';
import LandingPage from './features/landingPage';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Payment from './features/payment';
import Product from './features/products';
import SingleProductCard from './features/reusables/SingleProductCard';
import Login from './features/auth/login';
import Register from './features/auth/register';
import ProductUpload from './features/admin/productUpload';
import AdminDashboard from './features/admin/dashboard';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setSessionId } from './features/store/sessionAction';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const hideTopNavFooter = location.pathname === '/admin/login' || location.pathname === '/admin/register' || location.pathname === '/admin/product-upload' || location.pathname === '/admin/dashbord';

  const dispatch = useDispatch();

  useEffect(() => {
    const sessionId = generateSessionId();
    dispatch(setSessionId(sessionId));
  }, []);

  const generateSessionId = () => {
    const timestamp = Date.now().toString(); 
    const randomString = Math.random().toString(36).substr(2);
  
    return timestamp + randomString;
  };

  console.log('Session id --> ', generateSessionId())

  return (
    <div>
      {!hideTopNavFooter && <TopNav />}
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/initiate-payment' element={<Payment />} />
        <Route path='/product' element={<Product />} />
        <Route path='/single-product' element={<SingleProductCard />} />
        <Route path='/admin/login' element={<Login />} />
        <Route path='/admin/register' element={<Register />} />
        <Route path='/admin/product-upload' element={<ProductUpload />} />
        <Route path='/admin/dashbord' element={<AdminDashboard />} />
      </Routes>
      {!hideTopNavFooter && <Footer />}
    </div>
  );
}

export default App;
