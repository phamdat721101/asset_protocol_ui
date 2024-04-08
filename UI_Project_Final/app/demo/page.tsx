import Image from "next/image";
import line from "../../assets/images/line.png";

export default function Demo() {
    return (
        <div className="px-[60px] xl:px-[120px]">
            <Image
                className="absolute left-1/2 top-0 w-[100%] -translate-x-1/2 -translate-y-1/2 object-cover px-[60px] xl:px-[120px]"
                src={line}
                alt="line"
            ></Image>

            <div className="relative flex justify-between gap-x-5">
                <div className="relative">
                    <div className="w-[279px] space-y-6">
                        <div className="absolute left-0 top-0 translate-x-[200%] text-[150px] font-semibold leading-[204px] -tracking-[4.08px] text-gray-800/5 xl:text-[204px]">
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
                            <p className="text-sm leading-[30px] -tracking-[0.32px] text-gray-600 xl:text-base">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Amet quibusdam, aliquid quas,
                                impedit
                            </p>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <div className="w-[279px] space-y-6">
                        <div className="absolute left-0 top-0 translate-x-[150%] text-[150px] font-semibold leading-[204px] -tracking-[4.08px] text-gray-800/5 xl:text-[204px]">
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
                            <p className="text-sm leading-[30px] -tracking-[0.32px] text-gray-600 xl:text-base">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Amet quibusdam, aliquid quas,
                                impedit
                            </p>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <div className="w-[279px] space-y-6">
                        <div className="absolute left-0 top-0 translate-x-[150%] text-[150px] font-semibold leading-[204px] -tracking-[4.08px] text-gray-800/5 xl:text-[204px]">
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
                            <p className="text-sm leading-[30px] -tracking-[0.32px] text-gray-600 xl:text-base">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Amet quibusdam, aliquid quas,
                                impedit
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
