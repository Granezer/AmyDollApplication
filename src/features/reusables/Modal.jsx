import React, { useState } from 'react';
import Marker from '../../assets/image/Maker.svg'
import { Button } from '@mui/material';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const handleCloseModal = (e) => {
    e.preventDefault();
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div style={ModalWrapper}>
          <div style={ContentWrapper}>
            <div style={ImageWrapper}>
              <img src={Marker} alt='Marker' style={MarkerStyle} />
            </div>
            <div style={TextWrapper}>
              <p style={{ fontSize: '28px', fontWeight: '700', color: '#000', textAlign: 'center' }}>Payment Successfully initiated</p>
              <p style={{ fontSize: '18px', fontWeight: '700', color: '#000', padding: '1% 5%' }}>Once payment has been successful completed Please close the paystack payment tab to verify payment</p>
            </div>
            <Button style={ButtonStyle} onClick={handleCloseModal}>
              close Modal
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;

// Styles

export const ModalWrapper = {
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export const ContentWrapper = {
  width: '500px',
  height: '500px',
  backgroundColor: 'white',
  borderRadius: '16px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

export const MarkerStyle ={
  width: '200px',
  height: '',
}

export const ImageWrapper = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '2% 0%',
};

export const TextWrapper = {
  margin: '3% 0%',
  padding: '0% 20px',
};

export const ButtonStyle = {
  margin: '2% 0% 5% 0%',
  padding: '10px 16px',
  backgroundColor: '#f19158',
  color: 'white',
  width: '70%',
  borderRadius: '8px',
  border: 'none',
  textTransform: 'none',
};
