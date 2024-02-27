// import Image from "next/image";
import Banner from "@/components/Banner";
import DrivenPortfolio from "@/components/DrivenPortfolio";
import Feature from "@/components/Feature";
import Layout from "@/components/Layout";
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
        </Layout>
    );
}
