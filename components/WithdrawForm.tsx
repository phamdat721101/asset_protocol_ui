"use client";
import React, { useState } from "react";
import { getFullnodeUrl, SuiClient } from "@mysten/sui.js/client";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { useWalletKit } from "@mysten/wallet-kit";

const WithdrawForm = () => {
  const [amount, setAmount] = useState("");
  const { signAndExecuteTransactionBlock } = useWalletKit();

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    // Submit the form data to the server
    const data = {
      amount: amount,
    };

    console.log(amount);
    console.log(data);

    const client = new SuiClient({ url: getFullnodeUrl("devnet") });

    const txb = new TransactionBlock();
    const contractAddress =
      "0x7e3cee9f0eb68d0aca0f590411b172593690d6f40c1ef0ca64da9194508d4291";
    const contractModule = "vault";
    const contractMethod = "pay_to_beneficiary";
    txb.moveCall({
      target: `${contractAddress}::${contractModule}::${contractMethod}`,
      arguments: [
        txb.object(
          "0x240c7f4fe449e79388c0bc2aad4c9baee92068b1c6f180caa81111fd506af578"
        ),
        txb.object(
          "0xc8694cc09f1c5a9f89cb06e213d81128ac5dc6e8d72e9efe60ea54e874bffde5"
        ),
        txb.pure(amount),
      ],
    });

    await signAndExecuteTransactionBlock({
      transactionBlock: txb,
    });

    console.log(txb);

    // fetch('/api/submit', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     if (data.success) {
    //       // Handle successful submission
    //       console.log('Form submitted successfully');
    //     } else {
    //       // Handle submission error
    //       console.error('Form submission failed:', data.error);
    //     }
    //   });
  };

  return (
      <form onSubmit={handleSubmit}>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Số lượng (SUI)
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="number"
          id="amount"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
        />
        <div className="text-right">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
          >
            Rút
          </button>
        </div>
      </form>
  );
};

export default WithdrawForm;
