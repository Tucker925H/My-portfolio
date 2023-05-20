import React from 'react';
import styles from '../styles/toppage/mainTopWrapper.module.css';
import Image from 'next/image';

export default function MainTopWrapper() {
  return (
    <div className={styles.mainTopWrapper}>
      <Image
        priority
        className={styles.moonImage}
        src="/images/moon_1.png"
        width={500}
        height={500}
        alt=""
      />

      <Image
        priority
        className={styles.astronautImage}
        src="/images/astronaut.png"
        width={500}
        height={500}
        alt=""
      />

      <div className={styles.titleContainer}>
        <div className={styles.authorName}>
          <span>HONDA Takayuki</span>
        </div>
        <div className={styles.mainTitle}>
          <span>The Travel-loving Engineer's Mid journey</span>
        </div>
        <div className={styles.whoIsThisContainer}>
          <div className={styles.whoIsThis}>
            <span>Who is this?</span>
          </div>
          <div className={styles.whoIsArrow}>
            <Image
              className={styles.rightArrow}
              src="/images/right-arrow.png"
              width={30}
              height={30}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
