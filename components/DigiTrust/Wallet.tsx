"use client";
import React, { useEffect, useState } from "react";
import Link from 'next/link'
import axios from "axios";
import { formatAddress } from '@mysten/sui.js/utils';
import { ConnectButton, useWalletKit } from "@mysten/wallet-kit";
interface Transaction {
  tx_hash: string;
  type: string;
  url: string;
  amount: string;
  timestamp: string;
}

async function getTransactions(wallet: string) {
  console.log("PQD checking")
  const response = await axios.get(
    "https://test-vercel-seven-ivory.vercel.app/v1/history?wallet=" + wallet
  );
  return response.data;
}

const Wallet = (wallet:any) => {
  const [transactions, setTransactions] = useState<Transaction[] | null>(null);
 const { currentAccount } = useWalletKit();

  // useEffect(() => {
  //   const fetchTransactions = async () => {

  //     const transactions = await getTransactions(wallet.wallet);
  //     // if(transactions){
  //     //   transactions.array.forEach(item => {
  //     //     item.timestamp = new Date (item.timestamp);
  //     //     console.log("Time stamp: ", item.timestamp)
  //     //   });
  //     // }
      
  //     setTransactions(transactions);
  //   };

  //   // fetchTransactions().catch(console.log);
  // }, []);

  return (
    <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-24">
        PQD
    </div>
  );
};

export default Wallet;
