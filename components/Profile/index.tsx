import { formatNumberByCurrency } from "@/utils";
import React from "react";
import BlockBalance from "./BlockBalance";
import GeneralInfo from "./GeneralInfo";

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
  return (
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
    </div>
  );
};

export default ProfileContainer;
