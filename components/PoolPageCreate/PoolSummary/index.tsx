"use client";
import cn from "classnames";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import styles from "./styles.module.scss";

type Props = {};

const colors = ["#ffed00", "#ff0000", "#27272A"];

const list = [
  { name: "RAI", value: 1 },
  { name: "SUSHI", value: 1 },
];

const PoolSummary = (props: Props) => {
  return (
    <div className={cn("flex flex-col", styles.root)}>
      <div className="flex flex-col bal-card rounded-lg overflow-hidden bg-white dark:bg-gray-850 shadow-xl content styles_root__XCc9d">
        <div className="text-white px-4 py-4">Pool summary</div>
        <div>
          <div className={styles["divider"]}></div>
        </div>
        {/* chart */}
        <div className="px-4 py-4">
          <ResponsiveContainer width={280} height={280}>
            <PieChart width={280} height={280}>
              <Pie
                dataKey="value"
                data={list}
                innerRadius={40}
                cy="40%"
                outerRadius={100}
              >
                {list.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
        {/* chart */}
      </div>
      <div className="mt-4 flex flex-col bal-card rounded-lg overflow-hidden bg-white dark:bg-gray-850 shadow-xl content styles_root__XCc9d">
        <div className="text-white px-4 py-4 flex">
          <div className="mr-2">Token prices</div>
          <div>
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
              className="feather feather-info"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
          </div>
        </div>
        <div>
          <div className={styles["divider"]}></div>
        </div>
        <div className="px-4 py-4">
          <div className="flex items-center justify-between text-white">
            <span className="mr-4">RAI</span>
            <div className="flex flex-row justify-center">
              <div className="mr-4">
                <span>$2.80</span>
              </div>
              <img
                alt=""
                src="https://app.balancer.fi/assets/coingecko-f7da7809.svg"
                className="h-5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoolSummary;
