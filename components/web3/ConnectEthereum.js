import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { JsonRpcProvider, Contract } from 'ethers';
import { Web3Provider } from '@ethersproject/providers';

export default function ConnectEthereum() {
  const sampleAbi = [
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'from',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'uint256',
          name: 'tokenId',
          type: 'uint256',
        },
      ],
      name: 'Transfer',
      type: 'event',
    },
  ];

  console.log(ethers);
  const provider = new JsonRpcProvider(
    process.env.RPC_URL,
    process.env.NETWORK
  );
  console.log(provider);
  const contract = new Contract(
    process.env.NFT_CONTRACT_ADDRESS,
    sampleAbi,
    provider
  );

  console.log(contract);
}
