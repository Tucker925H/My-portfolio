import React, { useState, useEffect } from 'react';
import styles from './styles/header.module.css';
import Image from 'next/image';
import ToggleWebChange from './web3/toggleWebChange';
import ToggleButton from './parts/toggleButton';
import Popup from './parts/popup';
import About from '../pages/about';

function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowWidth;
}

export default function Header() {
  const windowWidth = useWindowWidth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logoAndHome}>
          <Image src="/images/jupiter.png" height={40} width={40} alt="" />
          <div className={styles.homeLink}>
            <a href="/">
              <span>HOME</span>
            </a>
          </div>
        </div>
        {windowWidth <= 910 ? (
          <div className={styles.hamburgerMenu}>
            <div
              className={`${styles.hamburgerIcon} ${
                isMenuOpen ? styles.open : ''
              }`}
              onClick={toggleMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
            {isMenuOpen && (
              <div className={styles.menuContent}>
                <ToggleButton />
                <div className={styles.eachMenuContainer}>
                  <svg className={styles.hamburgerMenuIcon}>
                    <rect
                      className={styles.purpleRect}
                      id="about-icon"
                      rx="0"
                      ry="0"
                      x="0"
                      y="0"
                      width="50"
                      height="50"
                    ></rect>
                  </svg>
                  <div className={styles.link} id="about-link">
                    <a href="about">
                      <span className={styles.menuSpan}>About</span>
                    </a>
                  </div>
                </div>
                <div className={styles.eachMenuContainer}>
                  <svg className={styles.hamburgerMenuIcon}>
                    <rect
                      className={styles.purpleRect}
                      id="about-icon"
                      rx="0"
                      ry="0"
                      x="0"
                      y="0"
                      width="50"
                      height="50"
                    ></rect>
                  </svg>
                  <div className={styles.link} id="projects-link">
                    <a href="project">
                      <span className={styles.menuSpan}>Project</span>
                    </a>
                  </div>
                </div>
                <div className={styles.eachMenuContainer}>
                  <svg className={styles.hamburgerMenuIcon}>
                    <rect
                      className={styles.purpleRect}
                      id="about-icon"
                      rx="0"
                      ry="0"
                      x="0"
                      y="0"
                      width="50"
                      height="50"
                    ></rect>
                  </svg>
                  <div className={styles.link} id="midjourney-link">
                    <a href="midjourney">
                      <span className={styles.menuSpan}>Midjourney</span>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className={styles.menuItems}>
            <ToggleButton />
            <svg className={styles.menuIcon}>
              <rect
                className={styles.purpleRect}
                id="about-icon"
                rx="0"
                ry="0"
                x="0"
                y="0"
                width="50"
                height="50"
              ></rect>
            </svg>
            <div className={styles.link} id="about-link">
              <a href="about">
                <span className={styles.menuSpan}>About</span>
              </a>
            </div>
            <svg className={styles.menuIcon}>
              <rect
                className={styles.purpleRect}
                id="about-icon"
                rx="0"
                ry="0"
                x="0"
                y="0"
                width="50"
                height="50"
              ></rect>
            </svg>
            <div className={styles.link} id="projects-link">
              <a href="project">
                <span className={styles.menuSpan}>Project</span>
              </a>
            </div>
            <svg className={styles.menuIcon}>
              <rect
                className={styles.purpleRect}
                id="about-icon"
                rx="0"
                ry="0"
                x="0"
                y="0"
                width="50"
                height="50"
              ></rect>
            </svg>
            <div className={styles.link} id="midjourney-link">
              <a href="midjourney">
                <span className={styles.menuSpan}>Midjourney</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
