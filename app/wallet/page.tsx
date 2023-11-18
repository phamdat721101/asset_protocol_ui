"use client"

import Image from "next/image";
import { Header, Footer, SuiWallet, DigiTrustWallet } from '@/components'
import {ConnectButton} from '@suiet/wallet-kit';
import { WalletProvider } from "@suiet/wallet-kit";
import { WalletKitProvider } from "@mysten/wallet-kit";
import SuiButton from "@/components/SuiButton";




export default function Page({ params }: { params: { slug: string } }) {

  return (
   < WalletKitProvider>
    <main className="overflow-hidden">
      <Header />
        <DigiTrustWallet />
      <Footer />
    </main>
    </WalletKitProvider>

  );
}
