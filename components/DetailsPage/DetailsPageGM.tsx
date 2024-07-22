"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import detailBg from "@/assets/images/bg-detail.svg";
import useTab from "@/components/Tabbar/useTab";
import TabDetails from "./TabDetails";
import DepositWithdraw from "./DepositWithdraw";
import PieChart from "@/components/Chart/PieChart/PieChart";
import usdc from "@/assets/images/crypto/usdc.svg";
import btc from "@/assets/images/crypto/bitcoin.svg";
import Comment from "../DetailsPage/CommentCoinMarketCap/CommentCoinMarketCap";
import CoinPriceChart from "./NewChart/CoinPriceChart";
// const Allocations = dynamic(
//   () => import("@/components/DetailsPage/Allocations"),
//   {
//     ssr: false,
//   }
// );

const Info = dynamic(() => import("@/components/DetailsPage/Info"), {
  ssr: false,
});

const Overview = dynamic(() => import("@/components/DetailsPage/OverviewGM"), {
  ssr: false,
});

const Chart = dynamic(() => import("@/components/DetailsPage/Chart/Chart"), {
  ssr: false,
});

// const MorePools = dynamic(() => import("@/components/DetailsPage/MorePools"), {
//   ssr: false,
// });

export default function DetailsPage() {

  return (
    <>
      <Info />
      <main className="px-5 sm:px-[50px] lg:px-[90px] pb-12 sm:pb-24">
        <div className="flex flex-col lg:flex-row bg-background text-foreground p-4">
          <div className="flex-1">
            {/* <Chart /> */}
            <CoinPriceChart coinId="bitcoin" />
            <Overview />
          </div>    
          <div className="w-full lg:w-1/3 lg:pl-4">
            <Comment />
          </div>
        </div>
      </main>
    </>
  );
}
