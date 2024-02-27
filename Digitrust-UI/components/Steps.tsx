import Image from "next/image";
import line from "../public/assets/images/line.png";
import Button from "./Button";

export default function Steps() {
    return (
        <section className="xl:pb-[20rem] 2xl:pb-[50rem]">
            <div className="relative space-y-20 px-[60px] py-[200px] xl:px-[120px]">
                <Image
                    className="absolute left-[50%] top-1/2 -z-50 w-[100%] -translate-x-1/2 -translate-y-[10%] object-cover px-[60px] pr-52 xl:px-[120px] xl:pr-64"
                    src={line}
                    alt="line"
                ></Image>

                <div>
                    <div className="absolute left-[25%] top-full -translate-x-1/2 -translate-y-[35%] md:-translate-y-[40%] xl:-translate-y-5 2xl:xl:translate-y-[20rem]">
                        <div className="relative w-[279px] space-y-6">
                            <div className="absolute left-0 top-0 translate-x-[300%] text-[150px] font-semibold leading-[204px] -tracking-[4.08px] text-gray-800/5 xl:text-[204px]">
                                1
                            </div>
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="65"
                                    height="64"
                                    viewBox="0 0 65 64"
                                    fill="none"
                                >
                                    <rect
                                        x="0.5"
                                        width="64"
                                        height="64"
                                        rx="20"
                                        fill="white"
                                    />
                                    <rect
                                        x="20.5"
                                        y="20"
                                        width="23"
                                        height="23"
                                        rx="10"
                                        fill="#90A3BF"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold leading-[30px] -tracking-[0.9px] text-gray-800 xl:text-3xl">
                                    Invest ...
                                </h2>
                                <p className="text-xs leading-[30px] -tracking-[0.32px] text-gray-600 xl:text-base">
                                    Pick the right token for your portfolio
                                    Sample Sample Sample Sample Sample Sample
                                    Sample Sample Sample Sample Sample Sample
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="absolute left-[55%] top-full -translate-x-1/2 md:-translate-y-52 xl:-translate-y-[65%]">
                        <div className="w-[279px] space-y-6">
                            <div className="absolute left-0 top-0 translate-x-[180%] text-[150px] font-semibold leading-[204px] -tracking-[4.08px] text-gray-800/5 xl:text-[204px]">
                                2
                            </div>
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="65"
                                    height="64"
                                    viewBox="0 0 65 64"
                                    fill="none"
                                >
                                    <rect
                                        x="0.5"
                                        width="64"
                                        height="64"
                                        rx="20"
                                        fill="white"
                                    />
                                    <rect
                                        x="20.5"
                                        y="20"
                                        width="23"
                                        height="23"
                                        rx="10"
                                        fill="#90A3BF"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold leading-[30px] -tracking-[0.9px] text-gray-800 xl:text-3xl">
                                    Rebalance ...
                                </h2>
                                <p className="text-xs leading-[30px] -tracking-[0.32px] text-gray-600 xl:text-base">
                                    Rebalance to minimize risks, maximize
                                    returns. Sample Sample Sample Sample Sample
                                    Sample Sample Sample Sample Sample Sample
                                    Sample
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="absolute left-[80%] top-full -translate-x-1/2 -translate-y-[180%]">
                        <div className="w-[279px] space-y-6">
                            <div className="absolute left-0 top-0 translate-x-[180%] text-[150px] font-semibold leading-[204px] -tracking-[4.08px] text-gray-800/5 xl:text-[204px]">
                                3
                            </div>
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="65"
                                    height="64"
                                    viewBox="0 0 65 64"
                                    fill="none"
                                >
                                    <rect
                                        x="0.5"
                                        width="64"
                                        height="64"
                                        rx="20"
                                        fill="white"
                                    />
                                    <rect
                                        x="20.5"
                                        y="20"
                                        width="23"
                                        height="23"
                                        rx="10"
                                        fill="#90A3BF"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold leading-[30px] -tracking-[0.9px] text-gray-800 xl:text-3xl">
                                    Monitor ....
                                </h2>
                                <p className="text-xs leading-[30px] -tracking-[0.32px] text-gray-600 xl:text-base">
                                    Invest & life balance. Sample Sample Sample
                                    Sample Sample Sample Sample Sample Sample
                                    Sample Sample Sample
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-xl space-y-10">
                    <h1 className="text-4xl font-bold leading-tight text-gray-800 xl:text-[50px]">
                        Investment in easy mode in just 3 steps
                    </h1>
                    <Button>Get Started</Button>
                </div>
            </div>
        </section>
    );
}
