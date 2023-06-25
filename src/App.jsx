import './App.css';
import Footer from './features/footer/Footer';
import TopNav from './features/header/TopNav';
import LandingPage from './features/landingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Payment from './features/payment';
import Product from './features/products';

function App() {

  return (
    <div>
      <TopNav />
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/product' element={<Product />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App
