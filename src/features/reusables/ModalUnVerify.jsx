import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Marker from '../../assets/image/Maker.svg'
import { Button } from '@mui/material';

const ModalUnVerify = () => {
  const [isOpen, setIsOpen] = useState(true);
  const router = useNavigate()
  const handleCloseModal = (e) => {
    e.preventDefault();
    setIsOpen(false);
    router("/");
  };

  return (
    <>
      {isOpen && (
        <div style={ModalWrapper}>
          <div style={ContentWrapper}>
            <div style={ImageWrapper}>
              <img src={Marker} alt='Marker' />
            </div>
            <div style={TextWrapper}>
              <p style={{ fontSize: '25px', fontWeight: '700', color: '#000', textAlign: 'center' }}>Payment verification failed</p>
            </div>
            <Button style={ButtonStyle} onClick={handleCloseModal}>
                Try Again
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalUnVerify;

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

export const ImageWrapper = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '2% 0%',
};

export const TextWrapper = {
  margin: '10% 0%',
  padding: '0% 20px',
};

export const ButtonStyle = {
  margin: '2% 0%',
  padding: '8px 16px',
  backgroundColor: '#f19158',
  color: 'white',
  width: '70%',
  borderRadius: '8px',
  border: 'none',
  textTransform: 'none',
};
