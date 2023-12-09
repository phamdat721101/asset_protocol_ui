import React, { useState } from "react";

import KassAreaChart from "@/components/Chart/KassAreaChart/KassAreaChart";
import useTab from "@/components/Tabbar/useTab";
import Tabs from "@/components/Tabbar/Tabs";
import Tab from "@/components/Tabbar/Tab";

type Props = {};

const data = [
  {
    name: "23 Nov, 2023",
    price: 7.1,
    // pv: 2400,
    // amt: 2400,
  },
  {
    name: "24 Nov, 2023",
    price: 10,
    // pv: 2400,
    // amt: 2400,
  },
  {
    name: "25 Nov, 2023",
    price: 11.2,
    // pv: 1398,
    // amt: 2210,
  },
  {
    name: "26 Nov, 2023",
    price: 11,
    // pv: 9800,
    // amt: 2290,
  },
  {
    name: "27 Nov, 2023",
    price: 10.9,
    // pv: 3908,
    // amt: 2000,
  },
  {
    name: "28 Nov, 2023",
    price: 10.7,
    // pv: 4800,
    // amt: 2181,
  },
  {
    name: "29 Nov, 2023",
    price: 9.8,
    // pv: 3800,
    // amt: 2500,
  },
  {
    name: "30 Nov, 2023",
    price: 10,
    // pv: 4300,
    // amt: 2100,
  },
];

const ChartSimpleArea = (props: Props) => {
  const [tabSelected, onTabChange] = useTab("price");
  const [chartData, setChartData] = useState(data);

  function handleTabChange(value: any) {
    // TODO: fetch api and change data here
    onTabChange(value);
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-row gap-2">
        <div>
          <Tabs value={tabSelected} onChange={handleTabChange}>
            <Tab index="price">Price</Tab>
            <Tab index="tvl">TVL</Tab>
            <Tab index="allocation">Allowcation</Tab>
          </Tabs>
        </div>
        <div></div>
      </div>
      <div>
        <KassAreaChart data={data} />
      </div>
    </div>
  );
};

export default ChartSimpleArea;
