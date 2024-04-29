"use client";

import detailBg from "@/assets/images/bg-detail.svg";
import useTab from "@/components/Tabbar/useTab";
import Info from "./Info";
import Allocations from "./Allocations";
import TabDetails from "./TabDetails";
import Overview from "./Overview";
import MorePools from "./MorePools";

export default function DetailsPage() {
  const [selectedTab, setSelectedTab] = useTab("overview");
  function changeTabHandler(value: string) {
    setSelectedTab(value);
  }

  let content = (
    <div className="h-[100px] flex items-center justify-center">
      <span>Coming soon</span>
    </div>
  );

  if (selectedTab == "overview") {
    content = (
      <>
        <Overview />
        <MorePools />
      </>
    );
  }

  if (selectedTab == "allocations") {
    content = <Allocations />;
  }

  if (selectedTab == "activity") {
  }

  if (selectedTab == "contracts") {
  }

  if (selectedTab == "staking") {
  }

  if (selectedTab == "faqs") {
  }

  return (
    <>
      <Info />
      <main className="px-[90px]">
        <div>
          <TabDetails
            selectedTab={selectedTab}
            onChangeTab={changeTabHandler}
          />
        </div>
        {content}
      </main>
    </>
  );
}
