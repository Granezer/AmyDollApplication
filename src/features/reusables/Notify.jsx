import React, { useState, useEffect } from 'react';
import { Alert, Stack } from '@mui/material';

const useNotify = () => {
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [notification]);

  const notify = (type, message) => {
    setNotification({ type, message });
  };

  return { notify, notification };
};

const Notify = ({ type, message, onClose }) => (
  <Stack sx={{ width: '100%' }} spacing={2}>
    <Alert severity={type} onClose={onClose}>
      {message}
    </Alert>
  </Stack>
);

export { useNotify, Notify };
