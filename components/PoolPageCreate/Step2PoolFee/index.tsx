import React, { useState } from "react";
import cn from "classnames";

import styles from "./styles.module.scss";

type Props = {
  onNext?: () => void;
  onBack?: () => void;
  setFee: (value: number) => void;
  fee: number;
};

const Step2PoolFee = (props: Props) => {
  const { onNext, onBack, setFee, fee } = props;
  return (
    <div className={cn(styles.root, "bal-card content p-4 rounded-lg")}>
      <div className="flex flex-col">
        <div className="flex flex-col mb-4">
          {/* <span className="text-xs mb-1 text-slate-600">Polygon Mainnet</span> */}
          <div className="flex flex-row items-center">
            <button className="flex text-leofi hover:text-leofiorange mr-1" type="button" onClick={onBack}>
              <div className="inline-block bal-icon flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-chevron-left"
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </div>
            </button>
            <h5 className="font-semibold">Set profile management fee</h5>
          </div>
        </div>
        <div className="flex flex-col mb-4">
          <div className="mb-2">
            <h6 className="mb-1 mb-2 font-semibold">Initial profile fee</h6>
            <p className="text-gray-600">
              0.30% is best for most weighted profiles with established tokens. Go
              higher for more exotic tokens.
            </p>
          </div>
          <div className="flex flex-row mb-2">
            <div className="flex">
              {/* <button className="bal-btn px-3 h-9 text-base bg-transparent text-blue-500  dark:text-blue-400 border border-blue-200 dark:border-blue-700 dark:hover:border-blue-600 dark:focus:border-blue-600 hover:text-gray-600 dark:hover:text-gray-200 dark:focus:text-gray-200 inline-block rounded-lg shadow hover:shadow-none cursor-pointer mr-2 capitalize w-18 mr-1">
                <div className="content justify-center">0.1%</div>
              </button>
              <button className="bal-btn px-3 h-9 text-base bg-transparent text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700 dark:hover:border-gray-600 dark:focus:border-gray-600 hover:text-gray-600 dark:hover:text-gray-200 dark:focus:text-gray-200 inline-block rounded-lg shadow hover:shadow-none cursor-pointer mr-2 capitalize w-18 mr-1">
                <div className="content justify-center">0.3%</div>
              </button>
              <button className="bal-btn px-3 h-9 text-base bg-transparent text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700 dark:hover:border-gray-600 dark:focus:border-gray-600 hover:text-gray-600 dark:hover:text-gray-200 dark:focus:text-gray-200 inline-block rounded-lg shadow hover:shadow-none cursor-pointer mr-2 capitalize w-18 mr-1">
                <div className="content justify-center">1.0%</div>
              </button> */}

              <div className="px-1 rounded-lg shadow-inner h-9 flex items-center custom-input border dark:border-gray-900 text-gray-500 ">
                <input
                  className="w-12 h-full text-right bg-transparent"
                  placeholder="0.1"
                  type="number"
                  step="any"
                  onChange={(e) => setFee(+e.target.value)}
                />
                <div className="px-1">%</div>
              </div>

            </div>

          </div>
        </div>
        <button
          className="bal-btn px-4 h-12 text-base bg-gradient-to-tr from-leofired to-leofiorange hover:from-leofi hover:to-leofi transition-colors  text-white border-none block w-full rounded-lg shadow hover:shadow-none cursor-pointer"
          type="submit"
          onClick={onNext}
          disabled={fee <= 0}
        >
          <div className="content justify-center">Next</div>
        </button>
      </div>
    </div>
  );
};

export default Step2PoolFee;
