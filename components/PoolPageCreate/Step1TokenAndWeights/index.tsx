import React, { useEffect } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";
import TrashButton from "./TrashButton";
import AddMoreButton from "./AddMoreButton";
import AllowcatedInfo from "./AllowcatedInfo";
import LockButton from "./LockButton";
import Tokens from "./Tokens";
import { useTypedForm } from "@/hooks/useTypedForm";

type Props = {
  onNext?: () => void;
};

const Step1TokenAndWeights = (props: Props) => {
  const { onNext } = { ...props };
  const { watch } = useTypedForm("CreateVaults");
  const tokensValues = watch("tokens")?.filter(
    (x) => x?.name && x?.percent > 0
  );

  return (
    <div
      className={cn(
        "bal-card rounded-lg overflow-hidden bg-white dark:bg-gray-850 shadow-xl content p-4",
        styles.root
      )}
    >
      <div className="flex flex-col">
        {/* title */}
        <div className="flex flex-col mb-2">
          <span className="text-xs text-secondary mb-1 text-white">
            Polygon Mainnet
          </span>
          <h5 className="font-semibold dark:text-gray-300">
            Choose tokens &amp; weights
          </h5>
        </div>
        {/* title */}
        {/* card */}
        <div className="mb-2">
          <div className="flex flex-col">
            {/* row */}
            <div className="flex justify-between p-2 px-4 w-full bg-gray-50 bg-slate-800">
              <span className="text-white">Token</span>
              <span className="text-white">Weight</span>
            </div>
            {/* row */}
            {/* row */}
            <Tokens />
            {/* row */}
            {/* row */}
            <AllowcatedInfo />
            {/* row */}
            {/* row */}
            <button
              className="bal-btn px-4 h-12 text-base  bg-gradient-to-tr from-blue-600 to-pink-600 hover:from-blue-700 hover:to-pink-700 transition-colors text-white border-none block w-full rounded-lg shadow hover:shadow-none cursor-pointer"
              type="button"
              onClick={onNext}
            >
              Next
            </button>
            {/* row */}
          </div>
        </div>
        {/* card */}
      </div>
    </div>
  );
};

export default Step1TokenAndWeights;
