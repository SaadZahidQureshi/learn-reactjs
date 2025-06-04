// components/Toast.jsx
import React, { useEffect } from 'react';
import styles from '../styles/toaster.module.css';

const Toast = ({ title, message, type = 'info', onClose, duration = 3000 }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className={`${styles.toast} ${styles[type]}`}>
      <div className={styles.toastHeader}>
        <h4 className={styles.toastTitle}>{title}</h4>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
      </div>
      <div className={styles.toastBody}>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Toast;