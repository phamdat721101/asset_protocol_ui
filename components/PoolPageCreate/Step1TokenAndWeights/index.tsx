import React from "react";
import cn from "classnames";
import styles from "./styles.module.scss";

type Props = {};

const Step1TokenAndWeights = (props: Props) => {
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
            <div className="w-full my-4">
              <div className="input-group p-1 flex items-center">
                {/* button */}
                <div className="token-select-input unselected selectable text-white whitespace-nowrap">
                  Select token
                </div>
                {/* button */}
                {/* input number */}
                <input
                  type="number"
                  name="weight"
                  placeholder="0.0"
                  autoComplete="off"
                  autoCorrect="off"
                  className="input h-10 text-xl text-right font-numeric mx-4 w-full px-2"
                />
                {/* input number */}
                {/* buttons */}
                <div className="flex flex-row items-center">
                  {/* lock */}
                  <button className="ml-2 ease-color mt-1 text-secondary hover:text-blue-800 dark:hover:text-blue-800 flex items-center shadow-sm border dark:border-0 bg-gray-50 dark:bg-gray-850 rounded-full p-1 justify-center border-transparent mr-0">
                    <svg
                      data-v-7b243f8a=""
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-unlock"
                    >
                      <rect
                        data-v-7b243f8a=""
                        x="3"
                        y="11"
                        width="18"
                        height="11"
                        rx="2"
                        ry="2"
                      ></rect>
                      <path
                        data-v-7b243f8a=""
                        d="M7 11V7a5 4 0 0 1 10 -2v-1"
                      ></path>
                    </svg>
                  </button>
                  {/* lock */}
                  {/* trash */}
                  <button className="ml-2 ease-color mt-1 text-secondary hover:text-red-500 dark:hover:text-red-500 flex items-center shadow-sm border dark:border-0 bg-gray-50 dark:bg-gray-850 rounded-full p-1 justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-trash-2"
                    >
                      <polyline points="3 6 5 6 21 6"></polyline>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                      <line x1="10" y1="11" x2="10" y2="17"></line>
                      <line x1="14" y1="11" x2="14" y2="17"></line>
                    </svg>
                  </button>
                  {/* trash */}
                </div>
                {/* buttons */}
              </div>
            </div>
            {/* row */}
            {/* row */}
            <div>
              <button className="bal-btn px-3 h-9 text-base bg-transparent text-blue-500  dark:text-blue-400 border border-blue-200 dark:border-blue-700 dark:hover:border-blue-600 dark:focus:border-blue-600 hover:text-gray-600 dark:hover:text-gray-200 dark:focus:text-gray-200 inline-block rounded-lg shadow hover:shadow-none cursor-pointer">
                Add a token
              </button>
            </div>
            {/* row */}
            {/* row */}
            <div className="p-2 px-4 my-4 w-full bg-slate-800 text-white">
              <div className="flex justify-between w-full">
                <span>Total allocated</span>
                <span>3.00%</span>
              </div>
              <div
                className="progress-track my-2"
                style={{ background: "rgb(51 65 85)" }}
              >
                <div
                  className="progress-bar h-1 bg-green-400"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>
            {/* row */}
            {/* row */}
            <button className="bal-btn px-4 h-12 text-base  bg-gradient-to-tr from-blue-600 to-pink-600 hover:from-blue-700 hover:to-pink-700 transition-colors text-white border-none block w-full rounded-lg shadow hover:shadow-none cursor-pointer">
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
