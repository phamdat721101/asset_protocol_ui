import { formatNumberByCurrency } from "@/utils";
import React,{useEffect} from "react";
import BlockBalance from "./BlockBalance";
import GeneralInfo from "./GeneralInfo";
import TabInfoProfile from "./Tab";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import Footer from "@/components/HomePage/Layout/HomeFooter";
import {useWallet} from '@suiet/wallet-kit'

type TVault = {
  name: string;
  balance: number;
  list_price: string;
  current_price: string;
  manager: string;
  tvl: number;
  monthly_return: string;
  daily_return: string;
  logo_url: string;
};

type TProfileContainerProps = {
  name: string;
  wallet?: string;
  description?: string;
  holdingAmount: number;
  managedAmount: number;
  dgtAmount: number;
  logoUrl?: string;
  vaults: TVault[];
};

const ProfileContainer = (props: TProfileContainerProps) => {
  const {
    name,
    holdingAmount,
    managedAmount,
    vaults,
    description,
    logoUrl,
    wallet,
    dgtAmount,
  } = props;

  const suiwallet = useWallet();

  useEffect(() => {
      console.log('wallet status', suiwallet.status)
      console.log('connected wallet name', suiwallet.name)
      console.log('connected account info', suiwallet.account)
    }, [suiwallet.connected])

  return (
      <div>
        <ProfileHeader/>
        {suiwallet.status == 'connected' &&
              <div>
                <GeneralInfo
                    name={name}
                    userAddress={wallet}
                    description={description}
                    avatar={logoUrl}
                  />
                  <div className="md:grid-cols-3 gap-3 grid mt-6">
                    <BlockBalance
                      title="HOLDINGS"
                      value={formatNumberByCurrency(holdingAmount, "USD")}
                    />
                    <BlockBalance
                      title="TOTAL MANAGED"
                      value={formatNumberByCurrency(managedAmount, "USD")}
                    />
                    <BlockBalance
                      title="VOTING POWER"
                      value={formatNumberByCurrency(dgtAmount, "USD")}
                    />
                  </div>
                  <TabInfoProfile />
              </div> 
                        
        }
        <Footer />
      </div>
  );
};

export default ProfileContainer;
