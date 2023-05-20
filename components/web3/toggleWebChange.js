import { useState } from 'react';
import styles from '../styles/button.module.css';
import MetaMaskConnection from './MetaMaskConnection';

export default function ToggleWebChange() {
  const [activeButton, setActiveButton] = useState(false);

  const toggleButton = () => {
    setActiveButton(!activeButton);
  };

  return (
    <>
      {activeButton ? <MetaMaskConnection /> : null}
      <div
        className={`${styles.hamburgerChangeWebVersion} ${
          activeButton ? '' : styles.active
        }`}
        id="about-link"
        onClick={toggleButton}
      >
        <span>Web2.0</span>
      </div>
      <div
        className={`${styles.hamburgerChangeWebVersion} ${
          activeButton ? styles.active : ''
        }`}
        id="about-link"
        onClick={toggleButton}
      >
        <span>Web3.0</span>
      </div>
    </>
  );
}
