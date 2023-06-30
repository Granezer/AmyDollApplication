import { useState } from 'react';
import './styles/Dashboard.css';
import ProductUpload from '../productUpload';
import Product from '../../products';
import TopNav from '../../header/TopNav';
import Footer from '../../footer/Footer';

const AdminDashboard = () => {
    const [selectedOption, setSelectedOption] = useState('products');

    const handleOptionClick = (option) => {
      setSelectedOption(option);
    };
  
    return (
      <div className="admin-dashboard">
        <TopNav />
        <div className='inner-dasboard'>
        <div className="sidebar">
          <div
            className={`sidebar-option ${selectedOption === 'products' ? 'active' : ''}`}
            onClick={() => handleOptionClick('products')}
          >
            Products
          </div>
          <div
            className={`sidebar-option ${selectedOption === 'upload' ? 'active' : ''}`}
            onClick={() => handleOptionClick('upload')}
          >
            Upload Product
          </div>
          {/* <div
            className={`sidebar-option ${selectedOption === 'orders' ? 'active' : ''}`}
            onClick={() => handleOptionClick('orders')}
          >
            Orders
          </div> */}
        </div>
        <div className="content">
          {selectedOption === 'products' && (
            <div className="centered-content">
                <Product />
            </div>
          )}
          {selectedOption === 'upload' && (
            <div className="centered-content">
                <ProductUpload />
            </div>
          )}
          {/* {selectedOption === 'orders' && (
            <div className="centered-content">Orders content goes here</div>
          )} */}
        </div>
        </div>
        <Footer />
      </div>
    );
};

export default AdminDashboard;
