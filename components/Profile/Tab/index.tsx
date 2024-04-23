'use client';
import React from "react";
import Tabs from "@/components/Tabbar/Tabs";
import Tab from "@/components/Tabbar/Tab";
import useTab from "@/components/Tabbar/useTab";
import Transactions_fill from "@/icons/Transactions_fill";
import PieChart from "@/icons/PieChart";
import App from "@/icons/App";

const TabInfoProfile = () => {
  const [tabSelected, onSelectTabChange] = useTab("pools");
  function handleTabChange(value: any) {
    // TODO: fetch api and change data here
    onSelectTabChange(value);
  }
  return (
    <div>
        <Tabs value={tabSelected} onChange={handleTabChange}>
            <Tab index="portfolio"><Transactions_fill/> Portfolio</Tab>
            <Tab index="pools"><PieChart/>Managed Pools</Tab>
            <Tab index="governance"><App/>Governance Data</Tab>
        </Tabs>
    </div>
  );
};

export default TabInfoProfile;
