import React, { useState } from 'react';
import styles from '../styles/creditCard.module.css';

const CreditCardSelector = () => {
  const [selectedCard, setSelectedCard] = useState(0);
  const [cards] = useState([
    { 
      id: 0, 
      lastFour: '4242', 
      name: 'John Doe', 
      expiry: '12/25',
      isDefault: true 
    },
    { 
      id: 1, 
      lastFour: '4242', 
      name: 'John Doe', 
      expiry: '12/25' 
    }
  ]);

  const handleCardClick = (id) => {
    setSelectedCard(id);
  };

  const handleAddNew = () => {
    console.log('Add new card');
  };

  const handleContinue = () => {
    console.log('Continue with selected card');
  };

  return (
    <div className={styles.container}>
      {/* Credit Cards */}
      {cards.map((card) => (
        <div
          key={card.id}
          className={`${styles.card} ${selectedCard === card.id ? styles.selected : ''}`}
          onClick={() => handleCardClick(card.id)}
        >
          <div className={styles.cardNumber}>XXXX XXXX XXXX {card.lastFour}</div>
          <div className={styles.cardDetails}>
            <div className={styles.cardName}>{card.name}</div>
            <div className={styles.cardExpiry}>{card.expiry}</div>
          </div>
        </div>
      ))}



      <div className={styles.actionBtns}>
        <button 
          type="button" 
          className={`${styles.actionBtn} ${styles.addNew}`}
          onClick={handleAddNew}
        >
          Add New Card
        </button>
        <button 
          type="button" 
          className={`${styles.actionBtn} ${styles.continue}`}
          onClick={handleContinue}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default CreditCardSelector;