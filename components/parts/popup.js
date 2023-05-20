import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/parts/popup.module.css';
import button from '../styles/button.module.css';

const Popup = () => {
  // const [showPopup, setShowPopup] = useState(false);

  const [isOpen, setIsOpen] = useState(true);

  const closePopup = () => {
    setIsOpen(false);
  };

  // const togglePopup = () => {
  //   setShowPopup(!showPopup);
  // };

  return (
    <div>
      {/* <button onClick={togglePopup}>Show Popup</button> */}

      {/* {showPopup && ( */}
      {isOpen && (
        <div className={styles.overlay}>
          <div className={styles.popup}>
            <h2>Honda's NFTを確認することができました</h2>
            <Link href="/onlyWeb3Page">
              <button className={button.connectWalletButton}>
                Go to Web3 Page
              </button>
            </Link>
            <div className={styles.header}>
              <span className={styles.closeButton} onClick={closePopup}>
                close
              </span>
            </div>
          </div>
        </div>
      )}
      {/* )} */}
    </div>
  );
};

export default Popup;
