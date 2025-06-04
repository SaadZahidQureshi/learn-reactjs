// App.js
import React, { useState } from "react";
import PermitModal from "./components/PermitModal";
import CreditCard from "./components/creditCard";
import { ToastProvider } from './context/ToastContext';
import ToastTrigger from "./components/toastTriger";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <ToastProvider>
      <div className="app-container">
        {/* <CreditCard isOpen={isModalOpen} onClose={() => setModalOpen(false)} /> */}
        <ToastTrigger />
        {/* Your other components */}
      </div>
    </ToastProvider>
  );
}

export default App;