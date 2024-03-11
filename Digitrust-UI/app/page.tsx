// import Image from "next/image";
import Banner from "@/components/Banner";
import DrivenPortfolio from "@/components/DrivenPortfolio";
import Feature from "@/components/Feature";
import Layout from "@/components/Layout";
import MorePools from "@/components/MorePools";
import Newsletter from "@/components/Newsletter";
import Questions from "@/components/Questions";
import Steps from "@/components/Steps";
import Timeline from "@/components/Timeline";

export default function Home() {
    return (
        <Layout>
            <Banner></Banner>
            <DrivenPortfolio></DrivenPortfolio>
            <Feature></Feature>
            <Steps></Steps>
            <Questions></Questions>
            <Timeline></Timeline>
            <Newsletter></Newsletter>
            <div className="border-t border-gray-800/20"></div>
        </Layout>
    );
}
