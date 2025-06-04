// components/ToastTrigger.jsx
import React from 'react';
import { useToast } from '../context/ToastContext';

const ToastTrigger = () => {
  const { addToast } = useToast();

  const showToast = (type, title, message) => {
    const messages = {
      success: { title: 'Success!', message: 'Operation completed successfully' },
      error: { title: 'Error', message: 'Something went wrong' },
      warning: { title: 'Warning', message: 'This action requires attention' },
      info: { title: 'Info', message: 'Here\'s some information' }
    };

    addToast(title, message, type);
  };

  return (
    <div style={{ display: 'flex', gap: '10px', margin: '20px' }}>
      <button onClick={() => showToast('success', "success title", "success body")}>Show Success</button>
      <button onClick={() => showToast('error', "error title", "error message")}>Show Error</button>
      <button onClick={() => showToast('warning', "warning title", "warning message")}>Show Warning</button>
      <button onClick={() => showToast('info', "info title", "info message")}>Show Info</button>
    </div>
  );
};

export default ToastTrigger;