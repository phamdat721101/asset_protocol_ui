import Image from "next/image";
import Layout from "@/components/Layout";
import BannerHero from "../assets/images/bgHero.png";
import Button from "@/components/Button";

export default function Home() {
    return (
        <div>
            <Layout>
                <section>
                    <div className="relative h-auto w-full overflow-hidden">
                        <Image
                            className="absolute bg-no-repeat object-cover"
                            src={BannerHero}
                            alt="bannerHero"
                        ></Image>

                        <div className="relative flex justify-between">
                            <div className="py-[150px] pl-32 text-white">
                                <div>
                                    <h3 className="text-[22px] font-normal">
                                        Welcome to DigiTrust
                                    </h3>
                                    <h1 className="text-[60px] font-extrabold leading-[80px]">
                                        Introducing Smart Vault Aggregator
                                    </h1>
                                    <p className="leading-[35px text-xl font-extralight -tracking-[0.4px]">
                                        Your Gateway to Enhanced Investment in
                                        the Decentralized Finance Space.
                                    </p>
                                </div>

                                <div>
                                    <div className="flex items-center">
                                        <div className="">
                                            <Button className>pp</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div></div>
                        </div>
                    </div>
                </section>

                {/* <section className="relative overflow-hidden object-cover font-primary">
      <Image
        src="/assets/images/Background Image.png"
        alt="bg-1"
        width={1440}
        height={800}
        className="absolute w-full object-cover"
      />

      <div className="relative h-full w-full px-1">
        <div className="absolute right-0 top-0 mt-[-2rem] h-full max-w-7xl translate-x-1 object-cover">
          <Image
            className="h-auto w-64"
            src="/assets/images/banner.png"
            alt="22"
            width={300}
            height={100}
          />
        </div>
        <div className="w-screen px-[120px] py-[147px] text-white">
          <div className="py-1 text-[22px] font-normal leading-[33px]">
            Welcome to DigiTrust
          </div>
          <div className="max-w-3xl py-4 text-[80px] font-extrabold leading-[80px]">
            Introducing Smart Vault Aggregator
          </div>
          <div className="max-w-md text-xl font-normal leading-[35px]">
            Your Gateway to Enhanced Investment in the Decentralized Finance
            Space.
          </div>
          <div className="flex items-center gap-x-3 py-11">
            <button className="rounded-[10px] bg-white px-6 py-4 text-base font-medium leading-[20px] text-blue-600">
              Start Investing
            </button>
            <button className="rounded-[10px] border border-white px-6 py-4 text-base font-medium leading-[20px]">
              Explore
            </button>
          </div>
          <div className="flex items-center gap-x-8 font-second">
            <div className="flex items-center gap-1 text-[17px] leading-[30px]">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="9" cy="9" r="9" fill="#10B981" />
                <path
                  d="M5 9L7.8 12L13 6"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Great Service
            </div>
            <div className="flex items-center gap-1 text-[17px] leading-[30px]">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="9" cy="9" r="9" fill="#10B981" />
                <path
                  d="M5 9L7.8 12L13 6"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Great Service
            </div>
          </div>
        </div>
      </div>
    </section> */}

                {/* <section className="mx-auto flex max-w-4xl scale-75 items-center justify-center gap-x-[50px] py-[70px] font-primary">
      <Image
        src="/assets/images/logo_aws.png"
        alt="aws"
        width={89}
        height={55}
      />
      <Image
        src="/assets/images/logo_Messari.png"
        alt="aws"
        width={272}
        height={36}
      />
      <Image
        src="/assets/images/logo_BlockPI.png"
        alt="aws"
        width={173}
        height={46}
      />
      <Image
        src="/assets/images/logo_Coinmarketcap.png"
        alt="aws"
        width={207}
        height={60}
      />
    </section> */}

                {/* <section className="relative overflow-hidden object-cover font-primary">
      <div className="relative text-center text-[50px] font-bold leading-[65px]">
        AI-Driven Portfolio
      </div>
      <div className=" object-cover">
        <div className="relative mx-auto flex max-w-[90rem] items-center justify-between px-[147px] py-20">
          <Image
            src="/assets/images/Group 503.png"
            alt=""
            width={1500}
            height={1713}
            className="absolute left-0 translate-y-10 scale-100 scale-x-150 object-cover"
          />
          <div className="relative text-gray-600">
            <p className="py-10 text-4xl font-bold uppercase leading-[47px] text-blue-600">
              account abstraction
            </p>
            <p className="max-w-md py-5 text-base font-normal">
              <span className="font-bold">Non-Custodial Wallets: </span>{" "}
              Allows users to access their accounts using familiar
              credentials, such as email and password.
            </p>
            <p className="max-w-md text-base font-normal">
              <span className="font-bold">Account Recovery: </span> users
              can regain access by answering personalized security
              questions.
            </p>
          </div>
          <div className="relative translate-y-10">
            <Image
              src="/assets/images/Content.png"
              alt="content"
              width={569}
              height={377}
            />
          </div>
        </div>
      </div>

      <div className="relative mx-auto flex max-w-[90rem] items-center justify-between px-[147px] pb-[7rem] pt-[8.9rem]">
        <Image
          src="/assets/images/Mask Group.png"
          alt=""
          width={1440}
          height={530}
          className="absolute left-0 w-full scale-x-150 object-cover "
        />
        <div className="translate-y-10">
          <Image
            src="/assets/images/Group 224.png"
            alt="content"
            width={569}
            height={377}
          />
        </div>
        <div className="relative text-gray-600">
          <p className="py-10 text-4xl font-bold uppercase leading-[47px] text-blue-600">
            multi-signature vaults
          </p>
          <p className="max-w-md py-5 text-base font-normal">
            <span className="font-bold">User-Controlled Security:</span>
            Multi-signature vaults empower users with unprecedented control
            over the security of their digital assets
          </p>
          <p className="max-w-md text-base font-normal">
            <span className="font-bold">
              Customizable Signature Requirements:
            </span>
            Users can choose the number of signatures required to authorize
            a transaction.
          </p>
        </div>
      </div>
      <div className="relative mx-auto flex max-w-[90rem] items-center justify-between px-[147px]  ">
        <Image
          src="/assets/images/MaskGroup_2.png"
          alt=""
          width={1440}
          height={530}
          className="absolute right-0 w-full translate-y-[14.7rem] scale-150 object-cover pb-[3.5rem] "
        />

        <div className="relative text-gray-600">
          <p className="py-10 text-4xl font-bold uppercase leading-[47px] text-blue-600">
            AI-DRIVEN INVESTMENT RECOMMENDATIONS
          </p>
          <p className="max-w-md py-5 text-base font-normal">
            <span className="font-bold">
              Personalized Investment Strategies:
            </span>
            Analyzes user preferences, risk tolerance, and market trends to
            generate personalized investment strategies
          </p>
          <p className="max-w-md text-base font-normal">
            <span className="font-bold">Sentiment Analysis:</span>
            Incorporating sentiment analysis, the Al assesses social media,
            news articles, and other relevant data sources to gauge market
            sentiment.
          </p>
        </div>
        <div className="relative translate-y-10">
          <Image
            src="/assets/images/Content_1.png"
            alt="content"
            width={569}
            height={377}
          />
        </div>
      </div>
      <div className="relative mx-auto flex max-w-[90rem] items-center justify-between gap-20 px-[147px] pb-[7rem] pt-[8.9rem]">
        <Image
          src="/assets/images/MaskGroup_3.png"
          alt=""
          width={1440}
          height={530}
          className="absolute left-0 w-full scale-150 object-cover pb-[5rem] pt-[11rem]"
        />
        <div className="translate-y-10">
          <Image
            src="/assets/images/Content_2.png"
            alt="content"
            width={550}
            height={401}
            className="w-full"
          />
        </div>
        <div className="relative text-gray-600">
          <p className="py-10 text-4xl font-bold uppercase leading-[47px] text-blue-600">
            AI-VERIFIED AUDIT FOR SMART CONTRACTS
          </p>
          <p className="max-w-md py-5 text-base font-normal">
            <span className="font-bold">Automated Auditing:</span>
            automates the auditing process using Al algorithms, allowing for
            efficient and thorough assessments of smart contract code
          </p>
          <p className="max-w-md text-base font-normal">
            <span className="font-bold">Continuous Monitoring:</span>
            Provides continuous monitoring, adapting to changes in the code
            and promptly identifying and addressing new vulnerabilities
          </p>
        </div>
      </div>
      <div className="relative mx-auto flex max-w-[90rem] items-center justify-between px-[147px] pb-[7rem] pt-[8.9rem]">
        <Image
          src="/assets/images/Mask.png"
          alt=""
          width={1440}
          height={530}
          className="absolute left-0 w-full translate-y-[14.7rem] scale-150 object-cover pb-[7rem] pt-[23.8rem]"
        />

        <div className="relative text-gray-600">
          <p className="py-10 text-4xl font-bold uppercase leading-[47px] text-blue-600">
            PREDICTIVE YIELD FARMING STRATEGIES
          </p>
          <p className="max-w-md py-5 text-base font-normal">
            <span className="font-bold">
              Dynamic Allocation Strategies:
            </span>
            Dynamically allocates assets across different liquidity pools
            based on changing market conditions
          </p>
          <p className="max-w-md text-base font-normal">
            <span className="font-bold">Risk Mitigation:</span>
            Embedded risk management algorithms assess the potential risks
            associated with different liquidity pools.
          </p>
        </div>
        <div className="translate-y-10">
          <Image
            src="/assets/images/Content_3.png"
            alt="content"
            width={569}
            height={377}
          />
        </div>
      </div>
    </section> */}

                {/* Fix */}
                {/* <section className="py-20 font-primary">
      <div className="relative text-center text-[50px] font-bold leading-[65px]">
        Feature
      </div>
      <div className="mx-auto flex max-w-[90rem] items-center justify-center gap-[10rem] px-40  py-16">
        <Image
          src="/assets/images/feature_1.png"
          alt=""
          width={570}
          height={700}
        />
        <div>
          <p className="py-10 text-4xl font-bold leading-[47px] text-blue-600">
            Investors
          </p>
          <div>
            <div className="flex gap-5 py-3">
              <Image
                src="/assets/images/icon_feature_4.png"
                alt=""
                width={110}
                height={113}
              />
              <div className="text-3xl font-semibold text-gray-800">
                Simplified Management
                <p className="text-base font-normal text-gray-600">
                  Easily allocate, monitor, and adjust asset distributions
                  across various vaults, all within a user-friendly
                  platform.
                </p>
              </div>
            </div>
            <div className="flex gap-5 py-3">
              <Image
                src="/assets/images/icon_feature_5.png"
                alt=""
                width={110}
                height={113}
              />
              <div className="text-3xl font-semibold text-gray-800">
                Community Insights
                <p className="text-base font-normal text-gray-600">
                  Engage with a vibrant community of DeFi investors, sharing
                  knowledge and strategies for maximizing portfolio security
                  and growth.
                </p>
              </div>
            </div>
            <div className="flex gap-5 py-3">
              <Image
                src="/assets/images/icon_feature_6.png"
                alt=""
                width={110}
                height={113}
              />
              <div className="text-3xl font-semibold text-gray-800">
                Smart routing system
                <p className="text-base font-normal text-gray-600">
                  Stay informed with real-time insights into your portfolios
                  performance, enabling swift and informed decision-making.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-[90rem] items-center gap-[10rem] px-40 py-[72px]">
        <div>
          <p className="py-10 text-4xl font-bold leading-[47px] text-blue-600">
            Funding managers
          </p>
          <div>
            <div className="flex gap-5 py-3">
              <Image
                src="/assets/images/icon_feature_1.png"
                alt=""
                width={110}
                height={113}
              />
              <div className="text-3xl font-semibold text-gray-800">
                Strategic Deployment
                <p className="text-base font-normal text-gray-600">
                  Optimize capital deployment with a range of vault options,
                  each offering distinct security strategies for diversified
                  funding avenues.
                </p>
              </div>
            </div>
            <div className="flex gap-5 py-3">
              <Image
                src="/assets/images/icon_feature_2.png"
                alt=""
                width={110}
                height={113}
              />
              <div className="text-3xl font-semibold text-gray-800">
                Risk Assessment Tools
                <p className="text-base font-normal text-gray-600">
                  Access advanced risk assessment tools to evaluate and
                  mitigate potential vulnerabilities, ensuring a secure
                  funding environment.
                </p>
              </div>
            </div>
            <div className="flex gap-5 py-3">
              <Image
                src="/assets/images/icon_feature_3.png"
                alt=""
                width={110}
                height={113}
              />
              <div className="text-3xl font-semibold text-gray-800">
                Collaborative Network
                <p className="text-base font-normal text-gray-600">
                  Engage within a network of funding managers, leveraging
                  collective insights and strategies to maximize fund
                  security and growth potential.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Image
          src="/assets/images/feature_2.png"
          alt=""
          width={570}
          height={700}
        />
      </div>
      <div className="max-h-[55rem] max-w-[100rem] items-center justify-center py-[4rem]">
        <div className="absolute start-[17rem] justify-center">
          <div className="relative py-6 text-[50px] font-bold leading-[65px]">
            Investment in easy mode <br></br>
            in just 3 steps
          </div>
          <button className="rounded-[10px] bg-blue-600 px-12 py-4 text-base font-medium text-white">
            Get Started
          </button>
        </div>
        <div className="justify-center px-64 py-20">
          <Image
            src="/assets/images/Vector 335.png"
            alt=""
            width={1000}
            height={500}
          />
          <div className="relative bottom-[100px] max-w-[30rem] pl-[6rem]">
            <div className="w-16 rounded-xl border-white bg-slate-50 px-5 py-5">
              <div className="w-4 rounded-full bg-gray-400 p-3"></div>
            </div>
            <div className="break-words py-3">
              <div className="absolute bottom-[5rem] h-52 px-44 text-[204px] font-semibold text-gray-800 opacity-10 ">
                1
              </div>
              <div className="py-4 text-3xl font-semibold text-gray-800">
                Invest ...
              </div>
              <p className="max-w-72">
                Pick the right token for your portfolio Sample Sample Sample
                Sample Sample Sample Sample Sample Sample Sample Sample
                Sample
              </p>
            </div>
          </div>
          <div className="relative bottom-[28.5rem] max-w-[45rem] pl-[29rem]">
            <div className="w-16 rounded-xl border-white bg-slate-50 px-5 py-5">
              <div className="w-4 rounded-full bg-gray-400 p-3"></div>
            </div>
            <div className="break-words py-3">
              <div className="absolute bottom-[9rem] h-52 px-[11rem] text-[204px] font-semibold text-gray-800 opacity-10 ">
                2
              </div>
              <div className="py-4 text-3xl font-semibold text-gray-800">
                Rebalance ...
              </div>
              <p className="max-w-72">
                Rebalance to minimize risks, maximize returns. Sample Sample
                Sample Sample Sample Sample Sample Sample Sample Sample
                Sample Sample
              </p>
            </div>
          </div>
          <div className="relative bottom-[59.5rem] start-[50rem] max-w-[20rem]">
            <div className="w-16 rounded-xl border-white bg-slate-50 px-5 py-5">
              <div className="w-4 rounded-full bg-gray-400 p-3"></div>
            </div>
            <div className="break-words py-3">
              <div className="absolute bottom-[6rem] h-52 px-[10rem] text-[204px] font-semibold text-gray-800 opacity-10 ">
                3
              </div>
              <div className="py-4 text-3xl font-semibold text-gray-800">
                Monitor ....
              </div>
              <p className="max-w-72">
                Invest & life balance. <br></br>
                Sample Sample Sample Sample Sample Sample Sample Sample
                Sample Sample Sample Sample
              </p>
            </div>
          </div>
        </div>
      </div>
    </section> */}

                {/* Fix */}
                {/* <section className="mx-auto h-[70rem] max-w-[100rem] font-primary">
      <div>
        <div className="relative text-center text-[50px] font-bold leading-[65px] ">
          Timeline
        </div>
        <div className="h-full object-cover">
          <div className="flex justify-center py-56">
            <Image
              className="scale-125"
              src="/assets/images/MaskGroup_timeline_1.png"
              alt=""
              width={1000}
              height={800}
            />
          </div>
          <div className="tl bottom-[60rem]">
            <div className="tl-container tl-oval1 tl-left">
              <div className="relative rounded-2xl bg-blue-50 px-7 py-7">
                <div className="text-3xl font-semibold leading-[29.68px] text-gray-800">
                  Tittle Sample{" "}
                </div>

                <div className="flex items-baseline gap-x-5 px-1 py-4">
                  <svg
                    className="w-[40px]"
                    width="10"
                    height="11"
                    viewBox="0 0 8 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <ellipse
                      id="Ellipse 5"
                      cx="4.0359"
                      cy="4.73523"
                      rx="3.55592"
                      ry="4.15515"
                      fill="#4B5563"
                    />
                  </svg>
                  <div className="text-base font-normal leading-[33.24px] text-gray-600">
                    Lorem ipsum dolor sit amet, quo ei simul congue exerci,
                    ad nec admodum perfecto mnesarchum, vim ea mazim fierent
                    detracto. Ea quis iuvaret expetendis his, te elit
                    voluptua dignissim per, habeo iusto primis ea eam.
                  </div>
                </div>
              </div>
            </div>
            <div className=" tl-container tl-right">
              <div className="relative rounded-2xl bg-blue-50 px-7 py-7">
                <div className="text-3xl font-semibold leading-[29.68px] text-gray-800">
                  Tittle Sample{" "}
                </div>

                <div className="flex items-baseline gap-x-5 px-1 py-4">
                  <svg
                    className="w-[30px]"
                    width="10"
                    height="11"
                    viewBox="0 0 8 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <ellipse
                      id="Ellipse 5"
                      cx="4.0359"
                      cy="4.73523"
                      rx="3.55592"
                      ry="4.15515"
                      fill="#4B5563"
                    />
                  </svg>
                  <div className="text-base font-normal leading-[33.24px] text-gray-600">
                    Sample Sample Sample Sample Sample Sample Sample Sample
                    Sample Sample Sample Sample
                  </div>
                </div>
              </div>
            </div>
            <div className="tl-container tl-left">
              <div className="relative rounded-2xl bg-blue-50 px-7 py-7">
                <div className="text-3xl font-semibold leading-[29.68px] text-gray-800">
                  Tittle Sample{" "}
                </div>

                <div className="flex items-baseline gap-x-5 px-1 py-4">
                  <svg
                    className="w-[30px]"
                    width="10"
                    height="11"
                    viewBox="0 0 8 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <ellipse
                      id="Ellipse 5"
                      cx="4.0359"
                      cy="4.73523"
                      rx="3.55592"
                      ry="4.15515"
                      fill="#4B5563"
                    />
                  </svg>
                  <div className="text-base font-normal leading-[33.24px] text-gray-600">
                    Sample Sample Sample Sample Sample Sample Sample Sample
                    Sample Sample Sample Sample
                  </div>
                </div>
              </div>
            </div>
            <div className="tl-container tl-right">
              <div className="relative rounded-2xl bg-blue-50 px-7 py-7">
                <div className="text-3xl font-semibold leading-[29.68px] text-gray-800">
                  Tittle Sample{" "}
                </div>
                <div className="flex items-baseline gap-x-5 px-1 py-4">
                  <svg
                    className="w-[30px]"
                    width="10"
                    height="11"
                    viewBox="0 0 8 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <ellipse
                      id="Ellipse 5"
                      cx="4.0359"
                      cy="4.73523"
                      rx="3.55592"
                      ry="4.15515"
                      fill="#4B5563"
                    />
                  </svg>
                  <div className="text-base font-normal leading-[33.24px] text-gray-600">
                    Sample Sample Sample Sample Sample Sample Sample Sample
                    Sample Sample Sample Sample
                  </div>
                </div>
              </div>
            </div>
            <div className="tl-oval"></div>
          </div>
        </div>
      </div>
    </section> */}

                {/* Fix */}
                {/* <section className="font-primary">
      <div className="bg-blue-50 font-primary">
        <div className="relative py-[70px] text-center text-[50px] font-bold leading-[65px]">
          Frequently Ask Questions
        </div>
        <div className="flex grid-cols-2 items-center justify-center gap-24 px-[140px] py-[70px] ">
          <div>
            <div>
              <div className="flex max-w-[36rem] flex-1 gap-5 rounded-lg border-slate-50 bg-white px-10 ">
                <button className="flex">
                  <div className="w-56 pt-[1.9rem]">
                    <Image
                      src="/assets/images/icon_ask_1.png"
                      alt="icon"
                      width={30}
                      height={1}
                    />
                  </div>

                  <div className="py-5 text-lg font-semibold leading-[23.40px]">
                    What make DigiTrust different from others ?
                    <p className="pl-4 text-left text-[16px] font-normal leading-[24.11px] text-gray-600">
                      On Nansen, Debank, it shows how much you have and
                      whats going on the market <br></br>
                      On Nimbus, we show how much you have and whats going
                      on with your CURRENT INVESTMENT and then suggest you
                      adjust it to reduce risk and maximize the return
                    </p>
                  </div>
                </button>
              </div>
            </div>
            <div className="py-5">
              <div className="flex max-w-xl flex-1 gap-5 rounded-lg border-slate-50 bg-white px-5">
                <button className="flex">
                  <div className="px-5 pt-[1.3rem]">
                    <Image
                      src="/assets/images/icon_ask_2.png"
                      alt="icon"
                      width={30}
                      height={1}
                    />
                  </div>

                  <div className="py-5 text-lg font-semibold leading-[23.40px] ">
                    What is benefit of using DigiTrust ?
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="flex max-w-xl flex-1 gap-5 rounded-lg border-slate-50 bg-white px-5 ">
                <button className="flex">
                  <div className="px-5 pt-[1.3rem]">
                    <Image
                      src="/assets/images/icon_ask_2.png"
                      alt="icon"
                      width={30}
                      height={1}
                    />
                  </div>

                  <div className="py-5 text-lg font-semibold leading-[23.40px] ">
                    What is benefit of using DigiTrust ?
                  </div>
                </button>
              </div>
            </div>
            <div className="pt-[4.5rem]">
              <div className="flex max-w-xl flex-1 gap-5 rounded-lg border-slate-50 bg-white px-5 ">
                <button className="flex">
                  <div className="px-5 pt-[1.3rem]">
                    <Image
                      src="/assets/images/icon_ask_2.png"
                      alt="icon"
                      width={30}
                      height={1}
                    />
                  </div>

                  <div className="py-5 text-lg font-semibold leading-[23.40px] ">
                    What is benefit of using DigiTrust ?
                  </div>
                </button>
              </div>
            </div>
            <div className="h-[100px] w-[577px] pt-6">
              <div className="flex max-w-xl flex-1 gap-5 rounded-lg border-slate-50 bg-white px-5 ">
                <button className="flex">
                  <div className="px-5 pt-[1.3rem]">
                    <Image
                      src="/assets/images/icon_ask_2.png"
                      alt="icon"
                      width={30}
                      height={1}
                    />
                  </div>

                  <div className="py-5 text-lg font-semibold leading-[23.40px] ">
                    What is benefit of using DigiTrust ?
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}

                {/* Fix */}
                {/* <section className="font-primary">
      <div className="relative flex justify-center py-40">
        <div className="">
          <div className="absolute z-10 px-8 py-12 text-white">
            <div className="text-[50px] font-bold leading-[55px] ">
              Get Started with DigiTrust Today!
              <p className="py- text-xl font-normal leading-[30.10px]">
                Subscribe to our newsletter to get early information and
                special calls.
              </p>
            </div>
            <form className="py-3">
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3"></div>
                <input
                  type="search"
                  id="Enter your Email"
                  className=" w-2/5 rounded-[50px] border border-white bg-white p-4 ps-10 text-sm text-gray-900 focus:ring-blue-500 "
                  placeholder="Enter your Email"
                  required
                />
                <button
                  type="submit"
                  className="absolute bottom-2.5 start-[16.25rem] rounded-[50px] bg-gray-800 px-4 py-2 text-sm font-medium text-white focus:outline-none "
                >
                  Start
                </button>
              </div>
            </form>
          </div>
          <Image
            className="z-0 scale-125"
            src="/assets/images/Image_last.png"
            alt="content"
            width={1000}
            height={500}
          />
        </div>
      </div>
    </section> */}

                {/* <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8 dark:border-gray-700" /> */}

                <div></div>
            </Layout>
        </div>
    );
}
