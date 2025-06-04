<<<<<<< HEAD
import ReactDOM from 'react-dom/client';
import Greetings  from './components/heading';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greetings name="test response" isActive={false} hasError={true}/>);
=======
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
>>>>>>> e74e67c14fddf3933255f949a3650910ceaa46a2
