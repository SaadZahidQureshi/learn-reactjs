import React, { useState } from 'react';
import styles from '../styles/LocationCard.module.css';

const LocationCards = () => {
  const [selectedLocation, setSelectedLocation] = useState(0);
  const [locations] = useState([
    { id: 0, name: "New york city", description: "Norway, Oslo", isDefault: true },
    { id: 1, name: "New york city", description: "Norway, Oslo" },
    { id: 2, name: "New york city", description: "Norway, Oslo" }
  ]);

  const handleCardClick = (id) => {
    setSelectedLocation(id);
  };

  const handleAddNew = () => {
    console.log('Add new location');
  };

  const handleContinue = () => {
    console.log('Continue with selected location');
  };

  return (
    <div className={styles.container}>
      {/* Location Cards */}
      {locations.map((location) => (
        <div
          key={location.id}
          className={`${styles.locationCard} ${selectedLocation === location.id ? styles.selected : ''}`}
          onClick={() => handleCardClick(location.id)}
        >
          <div className={styles.cardContent}>
            <div className={styles.locationInfo}>
              <h3>{location.name}</h3>
              <p>{location.description}</p>
            </div>
            {selectedLocation === location.id && location.isDefault && (
              <span className={styles.defaultBadge}>Default</span>
            )}
          </div>
        </div>
      ))}

      {/* Pricing Summary */}
      <div className={styles.pricingSummary}>
        <div className={styles.pricingRow}>
          <span className={styles.pricingLabel}>Sub Total</span>
          <span className={styles.pricingValue}>$720</span>
        </div>
        
        <div className={styles.pricingRow}>
          <span className={styles.pricingLabel}>Shipping Cost</span>
          <span className={styles.pricingValue}>$30</span>
        </div>
        
        <div className={`${styles.pricingRow} ${styles.totalRow}`}>
          <span className={styles.pricingLabel}>Total amount</span>
          <span className={styles.pricingValue}>$750</span>
        </div>
      </div>

      <div className={styles.actionBtns}>
        <button 
          type="button" 
          className={`${styles.actionBtn} ${styles.addNew}`}
          onClick={handleAddNew}
        >
          Add New
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

export default LocationCards;