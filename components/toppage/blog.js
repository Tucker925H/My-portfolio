import React from 'react';
import styles from '../styles/toppage/blog.module.css';
import Image from 'next/image';

export default function Blog() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <span>Mid Journey</span>
      </div>
      <div className={styles.blogContainer}>
        <div className={styles.blogCard}>
          <a href="https://note.com/engineer_journey/n/n5e427b7fd12a">
            <div className={styles.blogTitle}>
              <div className={styles.category}>
                <span>NFT</span>
                <span>MetaMask</span>
                <span>Ethereum</span>
                <span>Block Chain</span>
              </div>
              <span>
                特定のNFTアカウントのNFT所持数を取得する方法を解説第一章
              </span>
              <div className={styles.updateDate}>
                <span>更新 2023/5/1</span>
              </div>
            </div>
            <div className={styles.blogImg}>
              <Image
                src="/images/posts/nft-meta01.png"
                width={500}
                height={500}
                alt=""
              />
            </div>
          </a>
        </div>
        <div className={styles.blogCard}>
          <a href="https://note.com/engineer_journey/n/n998470463921">
          <div className={styles.blogTitle}>
            <div className={styles.category}>
              <span>NFT</span>
              <span>MetaMask</span>
              <span>Ethereum</span>
              <span>Block Chain</span>
            </div>
            <span>
              特定のNFTアカウントのNFT所持数を取得する方法を解説第二章
            </span>
            <div className={styles.updateDate}>
              <span>更新 2023/5/1</span>
            </div>
          </div>
          <div className={styles.blogImg}>
            <Image
              src="/images/posts/nft-meta02.png"
              width={500}
              height={500}
              alt=""
            />
          </div>
          </a>
        </div>
        <div className={styles.blogCard}>
          <div className={styles.blogTitle}>
            <div className={styles.category}>
              <span>Solidity</span>
              <span>Block Chain</span>
            </div>
            <span>スマートコントラクトを学ぶSolidity入門#03</span>
            <div className={styles.updateDate}>
              <span>更新 2023/5/1</span>
            </div>
          </div>
          <div className={styles.blogImg}>
            <Image
              src="/images/posts/solidity.png"
              width={500}
              height={500}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
