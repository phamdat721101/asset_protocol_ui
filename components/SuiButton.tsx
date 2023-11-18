import { ConnectButton, useWalletKit } from "@mysten/wallet-kit";
import { formatAddress } from "@mysten/sui.js/utils";

function SuiButton() {
  const { currentAccount } = useWalletKit();
  return (
    <ConnectButton
      connectText={"Kết nối ví SUI"}
     
    />
  );
}

export default SuiButton;