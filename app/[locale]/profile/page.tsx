"use client";
import dynamic from "next/dynamic";
import { WalletProvider } from "@suiet/wallet-kit";
import '@suiet/wallet-kit/style.css';
import { useEffect } from "react";

const ProfileChild = dynamic(() => import("@/components/Profile/index"), {
  ssr: false,
});

const fetchProfile = async () => {
  const response = await fetch(
    "https://dgt-dev.vercel.app/v1/user?user_id=user_v1"
  );

  if (!response.ok) {
    return null;
  }

  return response.json();
};

export default async function profile() {
  const profile = await fetchProfile();

  if (!profile || Object.keys(profile).length === 0) {
    return <div>User not found</div>;
  }
    return (
      <WalletProvider>
          <ProfileChild
          name={profile.name}
          holdingAmount={profile.holding_amount}
          managedAmount={profile.managed_amount}
          description={profile.des}
          wallet={profile.wallet}
          logoUrl={profile.logo_url}
          vaults={profile.vaults}
          dgtAmount={profile.dgt_amount}
          ></ProfileChild>
      </WalletProvider>
    );
}
  