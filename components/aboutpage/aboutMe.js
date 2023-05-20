import React from 'react';
import styles from '../styles/toppage/concept.module.css';
import aboutStyles from '../styles/about/aboutSite.module.css';
import Image from 'next/image';

export default function AboutMe() {
  return (
    <div className={`${styles.conceptContainer} ${aboutStyles.conceptContainer}`}>
      <div className={`${styles.contentWrapper} ${aboutStyles.contentWrapper}`}>
        <Image
          className={styles.rocketImage}
          src="/images/astronaut.png"
          width={100}
          height={100}
          alt=""
        />
        <div className={aboutStyles.conceptText}>
          <div className={aboutStyles.text}>
            <span>I am ...</span>
          </div>
          <div className={aboutStyles.conceptTitle}>
            <span>HONDA Takayuki</span>
          </div>
          <span>
            京都府出身のエンジニアを目指す20歳。立命館大学でソフトウェアを専門にプログラミング技術全般を学ぶ。現在は休学中でデータサイエンス,
            Dapp,
            Web3を学び、株式会社孫七商店のコアメンバーとしてサイト管理やシステム開発を行っている。CSを学ぶ傍ら、テニスコーチとして老弱男女にテニスの指導を行っている。
          </span>
        </div>
      </div>
    </div>
  );
}
