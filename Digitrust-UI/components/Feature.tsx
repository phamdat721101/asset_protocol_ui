import Image from "next/image";
import Features from "../public/assets/images/feature.png";
import ChartLineUp from "../public/assets/images/feature/ChartLineUp.svg";
import CloudCheck from "../public/assets/images/feature/CloudCheck.svg";
import Files from "../public/assets/images/feature/Files.svg";
import Graph from "../public/assets/images/feature/Graph.svg";
import Notebook from "../public/assets/images/feature/Notebook.svg";
import ProjectorScreenChart from "../public/assets/images/feature/ProjectorScreenChart.svg";

const Investors = [
    {
        id: 1,
        title: "Simplified Management",
        details:
            "Easily allocate, monitor, and adjust asset distributions across various vaults, all within a user-friendly platform.",
        icon: ProjectorScreenChart,
    },

    {
        id: 2,
        title: "Community Insights",
        details:
            "Engage with a vibrant community of DeFi investors, sharing knowledge and strategies for maximizing portfolio security and growth.",
        icon: Notebook,
    },

    {
        id: 3,
        title: "Smart routing system",
        details:
            "Stay informed with real-time insights into your portfolio's performance, enabling swift and informed decision-making.",
        icon: CloudCheck,
    },
];

const FundingManagers = [
    {
        id: 1,
        title: "Strategic Deployment",
        details:
            "Optimize capital deployment with a range of vault options, each offering distinct security strategies for diversified funding avenues.",
        icon: ChartLineUp,
    },

    {
        id: 2,
        title: "Risk Assessment Tools",
        details:
            "Access advanced risk assessment tools to evaluate and mitigate potential vulnerabilities, ensuring a secure funding environment.",
        icon: Files,
    },

    {
        id: 3,
        title: "Collaborative Network",
        details:
            "Engage within a network of funding managers, leveraging collective insights and strategies to maximize fund security and growth potential.",
        icon: Graph,
    },
];

export default function Feature() {
    return (
        <section className="xl:container lg:px-16 xl:mx-auto xl:px-0">
            <h1 className="p-14 text-center text-4xl font-bold leading-[130%] text-gray-800 xl:text-heading">
                Feature
            </h1>
            <div className="space-y-16">
                <div className="flex items-center gap-x-10">
                    <Image
                        className="h-[450px] w-auto xl:h-[745px]"
                        src={Features}
                        alt="feature"
                    ></Image>
                    <div className="space-y-[35px]">
                        <h1 className="text-3xl font-bold text-blue-600 xl:text-4xl">
                            Investors
                        </h1>
                        {Investors.map((item) => (
                            <div key={item.id}>
                                <div className="space-y-[30px]">
                                    <div className="flex items-center gap-x-[22px]">
                                        <div className="xl:rounded-second rounded-primary bg-blue-50 p-5 xl:p-8">
                                            <div className="flex h-auto w-7 items-center justify-center bg-blue-50 xl:w-12">
                                                <Image
                                                    src={item.icon}
                                                    alt={item.title}
                                                ></Image>
                                            </div>
                                        </div>

                                        <div className="space-y-[5px]">
                                            <h1 className="text-lg font-semibold text-gray-800 xl:text-2xl">
                                                {item.title}
                                            </h1>
                                            <p className="text-xs font-normal text-gray-600 xl:text-sm">
                                                {item.details}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex items-center gap-x-10">
                    <div className="space-y-[35px]">
                        <h1 className="text-3xl font-bold text-blue-600 xl:text-4xl">
                            Funding managers
                        </h1>
                        {FundingManagers.map((item) => (
                            <div key={item.id}>
                                <div className="space-y-[30px]">
                                    <div className="flex items-center gap-x-[22px]">
                                        <div className="xl:rounded-second rounded-primary bg-blue-50 p-5 xl:p-8">
                                            <div className="flex h-auto w-7 items-center justify-center bg-blue-50 xl:w-12">
                                                <Image
                                                    src={item.icon}
                                                    alt={item.title}
                                                ></Image>
                                            </div>
                                        </div>

                                        <div className="space-y-[5px]">
                                            <h1 className="text-lg font-semibold text-gray-800 xl:text-2xl">
                                                {item.title}
                                            </h1>
                                            <p className="text-xs font-normal text-gray-600 xl:text-sm">
                                                {item.details}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <Image
                        className="h-[450px] w-auto xl:h-[745px]"
                        src={Features}
                        alt="feature"
                    ></Image>
                </div>
            </div>
        </section>
    );
}
