import React from 'react';
import styles from './styles/footer.module.css';
import Image from 'next/image';

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerAuthor}>
          <span>&copy;HONDA Takayuki 2023</span>
        </div>
        <div className={styles.footerContent}>
          <div className={styles.socialText}>
            <span>SNS</span>
          </div>
          <div className={styles.snsContainer}>
            <div className={styles.footerImage}>
              <Image
                className={`${styles.socialIcon} ${styles.twitterIcon}`}
                src="/images/twitter.png"
                height={40}
                width={40}
                alt=""
              />
            </div>
            <div className={styles.footerImage}>
              <Image
                className={`${styles.socialIcon} ${styles.facebookIcon}`}
                src="/images/facebook.png"
                height={40}
                width={40}
                alt=""
              />
            </div>
            <div className={styles.footerImage}>
              <Image
                className={`${styles.socialIcon} ${styles.instagramIcon}`}
                src="/images/instagram.png"
                height={40}
                width={40}
                alt=""
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
