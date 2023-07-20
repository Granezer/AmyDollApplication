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
import Checkout from './features/cart/Checkout';
import Billing from './features/cart/Billing';
import Loader from './features/reusables/Loader';
import { ProductProvider, SearchProvider } from './features/reusables/ProductContext';

function App() {
  return (
    <Router>
      
      <ProductProvider>
        <SearchProvider>
          <AppContent />
        </SearchProvider>
      </ProductProvider>
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const hideTopNavFooter =
    location.pathname === '/admin/login' ||
    location.pathname === '/admin/register' ||
    location.pathname === '/admin/product-upload' ||
    location.pathname === '/admin/dashboard';

  return (
    <div>
      {/* {!hideTopNavFooter && <TopNav sessionId={sessionId} />} */}
      {!hideTopNavFooter && <TopNav />}
      <Routes>
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/register" element={<Register />} />
        <Route path="/admin/product-upload" element={<ProductUpload />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/initiate-payment" element={<Payment />} />
        <Route path="/product" element={<Product />} />
        <Route path="/single-product" element={<SingleProductCard />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/billing" element={<Billing />} />
        <Route path='/isloading' element={<Loader />} />
        <Route path="/*" element={<LandingPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      {!hideTopNavFooter && <Footer />}
    </div>
  );
}
export default App