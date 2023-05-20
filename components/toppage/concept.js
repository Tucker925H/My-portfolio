import React from 'react';
import styles from '../styles/toppage/concept.module.css';
import Image from 'next/image';

export default function Concept() {
  return (
    <div className={styles.conceptContainer}>
      <div className={styles.conceptTitle}>
        <span>Concept</span>
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.conceptText}>
          <span>
            私のポートフォリオのメインテーマは「旅好きなエンジニアの旅路」です。私はエンジニアという職業は技術を追いかける職業ではなく、技術を楽しむ職業であると考えています。まるで世界を旅する冒険家のように。旅にゴールはありません。エンジニアにも同じくゴールなどありません。私は常に新技術やサービスに貪欲に受け入れ、学んでいく姿勢で歩んでいきます。
          </span>
        </div>
        <Image
          className={styles.rocketImage}
          src="/images/rocket_1.png"
          width={100}
          height={100}
          alt=""
        />
      </div>
    </div>
  );
};
