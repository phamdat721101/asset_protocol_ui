"use client"

import Image from "next/image";
import { Header, Footer, SuiWallet } from '@/components'
import {ConnectButton} from '@suiet/wallet-kit';
import { WalletProvider } from "@suiet/wallet-kit";
import { WalletKitProvider } from "@mysten/wallet-kit";
import SuiButton from "@/components/SuiButton";




export default function Page({ params }: { params: { slug: string } }) {

  return (
   < WalletKitProvider>
    {/* <WalletProvider> */}
    <main className="overflow-hidden">
      <Header />
      <div>
      My Post: {params.slug}
      <div className="flex flex-col container m-auto bg-white rounded-lg p-4">
        <div>
          <div className="flex flex-row border-b-2 items-center pb-2">
            <h2 className="basis-1/2 text-lg font-semibold">Gói May Mắn</h2>
            <div className="basis-1/2 text-right flex flex-row-reverse items-center">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Gửi
              </button>
              <p>Return 10%</p>
            </div>
          </div>

          <p>
            By engaging in Cash Management, companies can extend runway, hedge
            against inflation, and manage cash flows. The Pool is designed to
            meet the conservative risk profile and daily liquidity needs of
            DAOs, corporate treasuries, and fund managers. Backed by U.S.
            Treasury bills and reverse repurchase agreements, the Pool targets a
            net APY of the Secured Overnight Financing Rate (SOFR) less fees and
            expenses of 0.5% annualized.
          </p>
        </div>
        <div className="basis-1/2 flex flex-col lg:flex-row flex-wrap">
          <div className="w-full flex flex-col">
            <div className="w-full flex flex-row flex-wrap bg-gray-100 p-2">
              <div className="w-1/2 text-left">TVL</div>
              <div className="w-1/2 text-right">1.000.000</div>
            </div>
            <div className="w-full flex flex-row flex-wrap bg-gray-0 p-2">
              <div className="w-1/2 text-left">Phí quản lý</div>
              <div className="w-1/2 text-right">2%</div>
            </div>
            <div className="w-full flex flex-row flex-wrap bg-gray-100 p-2">
              <div className="w-1/2 text-left">Số lượng người tham gia</div>
              <div className="w-1/2 text-right">1.000</div>
            </div>
            <div className="w-full flex flex-row flex-wrap bg-gray-0 p-2">
              <div className="w-1/2 text-left">Phí hiệu quả</div>
              <div className="w-1/2 text-right">1%</div>
            </div>
            <div className="w-full flex flex-row flex-wrap bg-gray-100 p-2">
              <div className="w-1/2 text-left">Phí tham gia</div>
              <div className="w-1/2 text-right">1%</div>
            </div>
            <div className="w-full flex flex-row flex-wrap  p-2">
              <div className="w-1/2 text-left">Phí rút</div>
              <div className="w-1/2 text-right">0%</div>
            </div>
          </div>
        </div>
        <div className="basis-1/2 p-4">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-left text-sm font-light">
                  <thead className="border-b font-medium dark:border-neutral-500">
                    <tr>
                      {/* <th scope="col" className="px-6 py-4">#</th> */}
                      <th scope="col" className="px-6 py-4">
                        Tài sản
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Phân bổ (%)
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Lãi suất năm (%)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b dark:border-neutral-500">
                      {/* <td className="whitespace-nowrap px-6 py-4 font-medium">1</td> */}
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="flex flex-row items-center">
                          <Image
                            src="https://s2.coinmarketcap.com/static/img/coins/64x64/16116.png"
                            alt="assetLogo"
                            width={30}
                            height={30}
                            style={{ marginRight: "5px", borderRadius: "50%" }}
                          />{" "}
                          SOL
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">29.38</td>
                      <td className="whitespace-nowrap px-6 py-4">-</td>
                    </tr>
                    <tr className="border-b dark:border-neutral-500">
                      {/* <td className="whitespace-nowrap px-6 py-4 font-medium">2</td> */}
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="flex flex-row items-center">
                          <Image
                            src="https://s2.coinmarketcap.com/static/img/coins/64x64/1975.png"
                            alt="assetLogo"
                            width={30}
                            height={30}
                            style={{ marginRight: "5px", borderRadius: "50%" }}
                          />
                          LINK
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">31.57</td>
                      <td className="whitespace-nowrap px-6 py-4">-</td>
                    </tr>
                    <tr className="border-b dark:border-neutral-500">
                      {/* <td className="whitespace-nowrap px-6 py-4 font-medium">3</td> */}
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="flex flex-row items-center">
                          <Image
                            src="https://s2.coinmarketcap.com/static/img/coins/64x64/74.png"
                            alt="assetLogo"
                            width={30}
                            height={30}
                            style={{ marginRight: "5px", borderRadius: "50%" }}
                          />
                          DOGE
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">39.05</td>
                      <td className="whitespace-nowrap px-6 py-4">25</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <SuiButton/><SuiWallet />
    
      <Footer />
    </main>
    {/* </WalletProvider> */}
    </WalletKitProvider>

  );
}
