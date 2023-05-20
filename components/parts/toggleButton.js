import React, { useEffect } from 'react';
import styles from '../styles/toggleButton.module.css';
import { useState } from 'react';
import MetaMaskConnection from '../web3/MetaMaskConnection';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../../redux/themeChange';

const ToggleButton = ({ onChange }) => {
  const [activeButton, setactiveButton] = useState(false);
  const themeChange = useSelector((state) => state.changeTheme.value);
  const dispatch = useDispatch();
  console.log(themeChange);

  useEffect(() => {
    // 既存のテーマ状態をローカルストレージから読み込みます。
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      const themeValue = JSON.parse(storedTheme);
      if (themeValue !== themeChange) {
        dispatch(changeTheme());
      }
    }
  }, []);

  useEffect(() => {
    // テーマ状態が変更されたときにローカルストレージに保存します。
    localStorage.setItem('theme', JSON.stringify(themeChange));
  }, [themeChange]);

  // const changeWebVirsion = () => {
  //   setactiveButton(!activeButton);
  if (!themeChange) {
    const themeProperties = {
      '--background-color': '#fff9ef',
      '--text-color': '#000',
      '--header-background-color': '#fff9ef',
      '--border-color': '#FFF9EF',
      '--menue-color': 'rgba(197, 197, 255, 1)',
      '--opacity-image': '0.6'
    };

    for (const [property, value] of Object.entries(themeProperties)) {
      document.documentElement.style.setProperty(property, value);
    }
  } else {
    const themeProperties = {
      '--background-color': '#0E1117',
      '--text-color': '#fff',
      '--header-background-color': '#161B22',
      '--border-color': 'gray',
      '--menue-color': 'rgb(64 64 255)',
      '--opacity-image': '1'
    };
    for (const [property, value] of Object.entries(themeProperties)) {
      document.documentElement.style.setProperty(property, value);
    }
    // }
  }

  const handleThemeToggle = (event) => {
    dispatch(changeTheme());
  };

  return (
    <div className={styles.toggleButtonContainer}>
      <div className={styles.order}>
        {themeChange ? <MetaMaskConnection /> : null}
      </div>
      <div className={styles.buttonContainer}>
        {themeChange ? <p>Welcome Web3!</p> : <p>Web3 Click here!</p>}
        <label className={styles['toggle-switch']}>
          <input
            type="checkbox"
            onChange={handleThemeToggle}
            checked={themeChange}
          />
          <span className={`${styles.slider}`}></span>
        </label>
      </div>
    </div>
  );
};

export default ToggleButton;
