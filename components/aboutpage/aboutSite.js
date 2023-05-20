import React from 'react';
import styles from '../styles/about/aboutSite.module.css';
// import Image from 'next/image';

export default function AboutSite() {
  return (
    <div className={styles.conceptContainer}>
      <div className={styles.conceptTitle}>
        <span>About this site</span>
      </div>
      <div className={styles.conceptText}>
        <span>
          このサイトは駆け出しエンジニアHonda
          Takayukiのポートフォリオサイトです。「技術を楽しむ」をモットーに日々学んだ技術を備忘録として記録していきます。かつて月を目指した人類のように、このサイトも常に進化し、新たな知識と技術の探求を続けます。私のエンジニアとしての成長の旅路を記録し、共有する場としています。私の日々の学びや挑戦、そして獲得した知識の星々が、この宇宙を形成し、途方もなく広大な未知へと続く道のりを示しています。一緒に新たな技術の大海原を探検し、無限の可能性を追求していきましょう。
        </span>
      </div>
    </div>
  );
}
