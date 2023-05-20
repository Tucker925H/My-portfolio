// components/ConnectWallet.js
import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import { toChecksumAddress } from 'ethereumjs-util';
import styles from '../styles/button.module.css';
import Popup from '../parts/popup';

const MetaMaskConnection = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // 既存のテーマ状態をローカルストレージから読み込みます。
    const localConnected = localStorage.getItem('wallet');
    if (localConnected) {
      const connected = JSON.parse(localConnected);
      if (connected !== isConnected) {
        setIsConnected(!isConnected);
      }
    }
  }, []);

  useEffect(() => {
    // テーマ状態が変更されたときにローカルストレージに保存します。
    localStorage.setItem('wallet', JSON.stringify(isConnected));
  }, [isConnected]);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        const account = toChecksumAddress(accounts[0]);
        checkNFTOwnership(account);
      } catch (error) {
        console.error('Error connecting to Metamask:', error);
      }
    } else {
      alert('Please install Metamask to use this feature.');
    }
  };

  const checkNFTOwnership = async (account) => {
    // NFTコントラクトアドレスを設定
    const nftContractAddress = '0x75aFa588CC4e97736bF51E3Bb542252FbD6b879f';
    // const nftContractAddress = '0x04B392Cc6cDa280C41e6fD637359F6D7F3ECbc30';

    // ERC721 ABIをインポートまたは定義
    const erc721ABI = [
      {
        constant: true,
        inputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
        name: 'balanceOf',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
    ];

    const web3 = new Web3(window.ethereum);
    const nftContract = new web3.eth.Contract(erc721ABI, nftContractAddress);
    const balance = await nftContract.methods.balanceOf(account).call();

    console.log(balance);

    if (parseInt(balance) > 0) {
      setIsConnected(true);
      setShowPopup(true);
    } else {
      setIsConnected(false);
    }
  };

  return (
    <div>
      <button
        className={`${styles.connectWalletButton} ${styles.marginRM}`}
        onClick={connectWallet}
      >
        {isConnected ? 'Connected' : 'Connect Wallet'}
        {showPopup && <Popup />}
      </button>
    </div>
  );
};

export default MetaMaskConnection;
