import React, { useState } from 'react';
import './styles/Dashboard.css';
import ProductUpload from '../productUpload';
import Product from '../../products';
import TopNav from '../../header/TopNav';
import Footer from '../../footer/Footer';
import { Drawer, IconButton, useTheme, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const AdminDashboard = () => {
  const [selectedOption, setSelectedOption] = useState('products');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

//   // Access the session ID from Redux store
//   const sessionId = useSelector((state) => state.session.sessionId);

  return (
    <div className="admin-dashboard">
      <TopNav />
      {isMobile ? (
        <IconButton onClick={handleDrawerToggle}>
          <MenuIcon fontSize={'medium'} htmlColor="#453AEF" />
        </IconButton>
      ) : (

        <div className="inner-dasboard">
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
      )}

      <Drawer anchor="left" open={isDrawerOpen} onClose={handleDrawerToggle}>
        <div className="sidebar">
          <div
            className={`sidebar-option ${selectedOption === 'products' ? 'active' : ''}`}
            onClick={() => {
              handleOptionClick('products');
              handleDrawerToggle();
            }}
          >
            Products
          </div>
          <div
            className={`sidebar-option ${selectedOption === 'upload' ? 'active' : ''}`}
            onClick={() => {
              handleOptionClick('upload');
              handleDrawerToggle();
            }}
          >
            Upload Product
          </div>
          {/* <div
              className={`sidebar-option ${selectedOption === 'orders' ? 'active' : ''}`}
              onClick={() => {
                handleOptionClick('orders');
                handleDrawerToggle();
              }}
            >
              Orders
            </div> */}
        </div>
      </Drawer>
      <Footer />
    </div>
  );
};

export default AdminDashboard;
