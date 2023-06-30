import './App.css';
import Footer from './features/footer/Footer';
import TopNav from './features/header/TopNav';
import LandingPage from './features/landingPage';
import { BrowserRouter as Router, Routes, Route, useLocation, } from 'react-router-dom';
import Payment from './features/payment';
import Product from './features/products';
import SingleProductCard from './features/reusables/SingleProductCard';
import Login from './features/auth/login';
import Register from './features/auth/register';
import ProductUpload from './features/admin/productUpload';
import AdminDashboard from './features/admin/dashboard';
import NotFound from './features/reusables/NotFound';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const hideTopNavFooter =
    location.pathname === '/login' ||
    location.pathname === '/register' ||
    location.pathname === '/product-upload' ||
    location.pathname === '/dashboard';

  return (
    <div>
      {!hideTopNavFooter && <TopNav />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product-upload" element={<ProductUpload />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/initiate-payment" element={<Payment />} />
        <Route path="/product" element={<Product />} />
        <Route path="/single-product" element={<SingleProductCard />} />
        <Route path="/*" element={<LandingPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      {!hideTopNavFooter && <Footer />}
    </div>
  );
}

export default App;
