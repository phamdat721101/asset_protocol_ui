import Image from "next/image";
import accountAbtraction from "../public/assets/images/account-abstraction.png";
import multiSignatureVaults from "../public/assets/images/multi-signature-vaults.png";
import rectangleBlue from "../public/assets/images/rectangle-blue.png";
import rectangleBlueRight from "../public/assets/images/rectangle-blue-right.png";
import aiVerify from "../public/assets/images/ai-verified-audit-for-smart-contracts.png";

export default function DrivenPortfolio() {
    return (
        <section>
            <h1 className="pb-[90px] pt-[58px] text-center text-4xl font-bold leading-[130%] text-gray-800 xl:text-[50px]">
                AI-Driven Portfolio
            </h1>
            {/* Account abtraction */}
            <div className="flex items-center gap-x-5 py-10 2xl:container xl:px-[120px] 2xl:mx-auto">
                <div className="max-w-sm space-y-10 xl:max-w-lg">
                    <h1 className="text-4xl font-bold uppercase leading-[130%] text-blue-600">
                        ACCOUNT ABSTRACTION
                    </h1>

                    <div className="space-y-9 text-base font-normal leading-normal text-gray-600">
                        <p>
                            <span className="font-bold">
                                Non-Custodial Wallets:
                            </span>
                            Allows users to access their accounts using familiar
                            credentials, such as email and password.
                        </p>

                        <p>
                            <span className="font-bold">Account Recovery:</span>
                            Users can regain access by answering personalized
                            security questions.
                        </p>
                    </div>
                </div>

                <Image
                    className="ml-auto"
                    src={accountAbtraction}
                    alt="accountAbtraction"
                ></Image>
            </div>

            {/* MULTI-SIGNATURE VAULTS */}
            <div className="bg-blue-50 py-10 xl:px-[120px]">
                <div className="flex items-center gap-x-5 2xl:container 2xl:mx-auto 2xl:px-0">
                    <Image
                        className="mr-auto"
                        src={multiSignatureVaults}
                        alt="multiSignatureVaults"
                    ></Image>

                    <div className="-mt-24 max-w-sm space-y-10 xl:max-w-lg">
                        <h1 className="text-4xl font-bold uppercase leading-[130%] text-blue-600">
                            MULTI-SIGNATURE VAULTS
                        </h1>

                        <div className="space-y-9 text-base font-normal leading-normal text-gray-600">
                            <p>
                                <span className="font-bold">
                                    User-Controlled Security:
                                </span>
                                Multi-signature vaults empower users with
                                unprecedented control over the security of their
                                digital assets.
                            </p>

                            <p>
                                <span className="font-bold">
                                    ACustomizable Signature Requirements:
                                </span>
                                Users can choose the number of signatures
                                required to authorize a transaction.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* AI-DRIVEN INVESTMENT RECOMMENDATIONS */}
            <div className="relative overflow-hidden pt-10">
                <Image
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 xl:left-2/3"
                    src={rectangleBlue}
                    alt="rectangleBlue"
                ></Image>

                <div className="gap-x-5py-10 relative z-50 flex items-center px-20 2xl:container 2xl:mx-auto 2xl:px-0">
                    <div className="-mt-24 max-w-sm space-y-10 xl:max-w-lg">
                        <h1 className="text-4xl font-bold uppercase leading-[130%] text-blue-600">
                            AI-DRIVEN INVESTMENT RECOMMENDATIONS
                        </h1>

                        <div className="space-y-9 text-base font-normal leading-normal text-gray-600">
                            <p>
                                <span className="font-bold">
                                    Personalized Investment Strategies:
                                </span>
                                Analyzes user preferences, risk tolerance, and
                                market trends to generate personalized
                                investment strategies.
                            </p>

                            <p>
                                <span className="font-bold">
                                    Sentiment Analysis:
                                </span>
                                Incorporating sentiment analysis, the Al
                                assesses social media, news articles, and other
                                relevant data sources to gauge market sentiment.
                            </p>
                        </div>
                    </div>

                    <Image
                        className="ml-auto"
                        src={aiVerify}
                        alt="aiVerify"
                    ></Image>
                </div>
            </div>

            {/* AI-DRIVEN INVESTMENT RECOMMENDATIONS */}
            <div className="relative overflow-hidden">
                <Image
                    className="absolute left-[35%] top-1/2 -translate-x-1/2 -translate-y-[50%] object-cover"
                    src={rectangleBlueRight}
                    alt="rectangleBlueRight"
                ></Image>

                <div className="relative h-full py-10">
                    <div className="relative z-50 flex items-center gap-x-5 px-20 2xl:container 2xl:mx-auto 2xl:px-0">
                        <Image
                            className="mr-auto"
                            src={aiVerify}
                            alt="aiVerify"
                        ></Image>
                        <div className="-mt-24 max-w-sm space-y-10 py-10 xl:max-w-lg">
                            <h1 className="text-4xl font-bold uppercase leading-[130%] text-blue-600">
                                AI-VERIFIED AUDIT FOR SMART CONTRACTS
                            </h1>

                            <div className="space-y-9 text-base font-normal leading-normal text-gray-600">
                                <p>
                                    <span className="font-bold">
                                        Automated Auditing:
                                    </span>
                                    automates the auditing process using Al
                                    algorithms, allowing for efficient and
                                    thorough assessments of smart contract code.
                                </p>

                                <p>
                                    <span className="font-bold">
                                        Continuous Monitoring:
                                    </span>
                                    Provides continuous monitoring, adapting to
                                    changes in the code and promptly identifying
                                    and addressing new vulnerabilities.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="relative z-50 flex items-center gap-x-5 px-20 2xl:container 2xl:mx-auto 2xl:px-0">
                        <div className="-mt-24 max-w-sm space-y-10 xl:max-w-lg">
                            <h1 className="text-4xl font-bold uppercase leading-[130%] text-blue-600">
                                PREDICTIVE YIELD FARMING STRATEGIES
                            </h1>

                            <div className="space-y-9 text-base font-normal leading-normal text-gray-600">
                                <p>
                                    <span className="font-bold">
                                        Dynamic Allocation Strategies:
                                    </span>
                                    Dynamically allocates assets across
                                    different liquidity pools based on changing
                                    market conditions.
                                </p>

                                <p>
                                    <span className="font-bold">
                                        Risk Mitigation:
                                    </span>
                                    Embedded risk management algorithms assess
                                    the potential risks associated with
                                    different liquidity pools.
                                </p>
                            </div>
                        </div>

                        <Image
                            className="ml-auto"
                            src={aiVerify}
                            alt="aiVerify"
                        ></Image>
                    </div>
                </div>
            </div>
        </section>
    );
}
