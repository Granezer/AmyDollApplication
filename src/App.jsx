import './App.css';
import Footer from './features/footer/Footer';
import TopNav from './features/header/TopNav';
import LandingPage from './features/landingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Payment from './features/payment';
import Product from './features/products';
import SingleProductCard from './features/reusables/SingleProductCard';

function App() {

  return (
    <div>
      <TopNav />
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/initiate-payment' element={<Payment />} />
          <Route path='/product' element={<Product />} />
          <Route path='/single-product' element={<SingleProductCard />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App
