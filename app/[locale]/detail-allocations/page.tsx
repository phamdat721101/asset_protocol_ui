"use client";
import dynamic from "next/dynamic";
import LayoutSecond from "@/components/Details/LayoutSecond";
import { WalletKitProvider } from "@mysten/wallet-kit";
import Info from "@/components/Allocations/Info";

export default function Details() {
  return (
    <WalletKitProvider>
      <LayoutSecond>
        <Info />
      </LayoutSecond>
    </WalletKitProvider>
  );
}
