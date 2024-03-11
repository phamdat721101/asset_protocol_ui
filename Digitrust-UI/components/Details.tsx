"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import ApexCharts from "apexcharts";
import Logo from "../public/assets/images/logo.png";
import MorePools from "./MorePools";

export default function Details() {
    // Call Api
    const [dataDetails, setDataDetails] = useState([]);

    useEffect(() => {
        const fetchDataDetails = async () => {
            // Api Default
            const response = await fetch(
                "https://dgt-dev.vercel.app/v1/vault_detail?vault_id=dgt1&fbclid=IwAR1Z7yE9yIjhcbPds_6_CSr-R487BHzqDiy4SufmyRmozuLmXnN2SJp_S94",
            );
            const data = await response.json();

            setDataDetails(data);
        };

        fetchDataDetails();
    }, []);
    // End call api

    // Chart
    const [chartOptions, setchartOptions] = useState({
        chart: {
            type: "line",
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: false,
            },
        },

        stroke: {
            curve: "smooth",
        },

        series: [
            {
                name: "Number",
                data: [19000, 20000, 22750, 21500, 23000],
            },
        ],

        xaxis: {
            categories: ["Dec 5", "Dec 6", "Dec 7", "Dec 8", "Dec 9"],
            labels: {
                show: true,
                style: {
                    fontSize: "16px",
                    fontWeight: 500,
                },
            },

            gridLines: {
                show: true,
            },
        },

        yaxis: {
            labels: {
                show: true,
                style: {
                    fontSize: "16px",
                    fontWeight: 500,
                },
            },

            stepSize: 1000,

            gridLines: {
                show: true,
            },
        },

        grid: {
            show: true,
            padding: {
                left: 80,
            },
        },

        dataLabels: {
            enabled: false,
        },

        tooltip: {
            enabled: true,
        },

        colors: ["#4F46E5"],

        // fill: {
        //     type: "gradient",
        //     gradient: {
        //         shadeIntensity: 1,
        //         opacityFrom: 0.25,
        //         opacityTo: 0.9,
        //         stops: [0, 100],
        //     },
        // },
    });

    useEffect(() => {
        const chart = new ApexCharts(
            document.querySelector("#line-chart"),
            chartOptions,
        );
        chart.render();
        return () => {
            chart.destroy();
        };
    }, []);
    // End chart

    return (
        <main>
            <section className="bg-blue-50">
                <div className="container mx-auto py-24">
                    <div className="space-y-6">
                        <div className="flex items-center gap-x-6">
                            {/* <Image src={""} alt={"logo"}></Image> */}
                            {dataDetails && (
                                <Image
                                    className=" h-auto w-36"
                                    // src={dataDetails.logo}
                                    src={Logo}
                                    alt={dataDetails.vault_id}
                                ></Image>
                            )}
                            <p>
                                {dataDetails && <p>{dataDetails.vault_name}</p>}
                            </p>
                        </div>
                        <div className="flex items-center gap-x-3">
                            <div className="shadow-currency flex rounded-full border border-gray-45 bg-blue-600 px-[10px] py-1 text-base font-medium leading-6 text-white">
                                {dataDetails && (
                                    <span>{dataDetails.currency}</span>
                                )}
                                {dataDetails && <p>{dataDetails.vault_name}</p>}
                            </div>
                            <div className="shadow-elevation rounded-full border border-blue-600 bg-indigo-100 px-[10px] py-1 text-base font-medium leading-6 text-gray-800">
                                Live on Avalanche
                            </div>
                        </div>
                        <p className="font-feature-settings max-w-5xl text-base font-normal text-gray-800">
                            {dataDetails && <p>{dataDetails.vault_desc}</p>}
                        </p>

                        <div className="flex gap-x-3">
                            <div className="flex items-center gap-x-2 rounded-[10px] border border-gray-45 bg-white px-4 py-3">
                                <div className="flex gap-x-4 text-base font-semibold leading-4">
                                    <p className="uppercase text-blue-600">
                                        MY BALANCE
                                    </p>
                                    <div className="flex text-gray-800">
                                        {dataDetails && (
                                            <span>{dataDetails.currency}</span>
                                        )}
                                        {dataDetails && (
                                            <p>{dataDetails.price}</p>
                                        )}
                                    </div>
                                </div>

                                <button>
                                    <svg
                                        width="24"
                                        height="25"
                                        viewBox="0 0 24 25"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M12 4.5C7.58172 4.5 4 8.08172 4 12.5C4 16.9183 7.58172 20.5 12 20.5C16.4183 20.5 20 16.9183 20 12.5C20 8.08172 16.4183 4.5 12 4.5ZM2 12.5C2 6.97715 6.47715 2.5 12 2.5C17.5228 2.5 22 6.97715 22 12.5C22 18.0228 17.5228 22.5 12 22.5C6.47715 22.5 2 18.0228 2 12.5Z"
                                            fill="#C3D4E9"
                                        />
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M11 17.5V11.5H13V17.5H11Z"
                                            fill="#C3D4E9"
                                        />
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M11 9.5V7.5H13V9.5H11Z"
                                            fill="#C3D4E9"
                                        />
                                    </svg>
                                </button>
                            </div>

                            <div className="flex items-center gap-x-2 rounded-[10px] border border-gray-45 bg-white px-4 py-3">
                                <div className="flex gap-x-4 text-base font-semibold leading-4">
                                    <p className="uppercase text-blue-600">
                                        STAKED
                                    </p>
                                    <div className="flex text-gray-800">
                                        {dataDetails && (
                                            <span>{dataDetails.currency}</span>
                                        )}
                                        {dataDetails && (
                                            <p>{dataDetails.tvl}</p>
                                        )}
                                    </div>
                                </div>

                                <button>
                                    <svg
                                        width="24"
                                        height="25"
                                        viewBox="0 0 24 25"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M12 4.5C7.58172 4.5 4 8.08172 4 12.5C4 16.9183 7.58172 20.5 12 20.5C16.4183 20.5 20 16.9183 20 12.5C20 8.08172 16.4183 4.5 12 4.5ZM2 12.5C2 6.97715 6.47715 2.5 12 2.5C17.5228 2.5 22 6.97715 22 12.5C22 18.0228 17.5228 22.5 12 22.5C6.47715 22.5 2 18.0228 2 12.5Z"
                                            fill="#C3D4E9"
                                        />
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M11 17.5V11.5H13V17.5H11Z"
                                            fill="#C3D4E9"
                                        />
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M11 9.5V7.5H13V9.5H11Z"
                                            fill="#C3D4E9"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center gap-x-[14px]">
                            <button className="rounded-[10px] bg-blue-600 px-12 py-3 text-white">
                                Buy
                            </button>

                            <button className="rounded-[10px] border border-blue-600 px-12 py-3 text-blue-600">
                                Sell
                            </button>

                            <button className="rounded-[10px] border border-green-600 px-12 py-3 text-green-600">
                                Stake
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#FAFBFF] py-16">
                <div className="container mx-auto">
                    <div className="justify-between gap-x-[54px] space-y-10 xl:flex xl:space-y-0">
                        <div className="mx-auto max-w-2xl space-y-[23px] lg:max-w-5xl">
                            {/* Menu list */}
                            <div className="flex items-start justify-between gap-x-7 pb-[22px] 2xl:gap-x-8">
                                <button className="flex w-fit items-center gap-x-[10px] border-b-[3px] border-blue-600 pb-4">
                                    <svg
                                        width="22"
                                        height="22"
                                        viewBox="0 0 22 22"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M2.75 7.33325H7.33333V20.1666H2.75V7.33325Z"
                                            fill="#2563EB"
                                        />
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M9.16667 1.83325H13.75V20.1666H9.16667V1.83325Z"
                                            fill="#2563EB"
                                        />
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M15.5833 10.0833H20.1667V20.1666H15.5833V10.0833Z"
                                            fill="#2563EB"
                                        />
                                    </svg>

                                    <p className="text-sm font-medium leading-[150%] -tracking-[0.32px] text-blue-600 2xl:text-base">
                                        Overview
                                    </p>
                                </button>

                                <button className="flex w-fit items-center gap-x-[10px]">
                                    <svg
                                        width="22"
                                        height="22"
                                        viewBox="0 0 22 22"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M20.4553 6.00961C20.8699 7.01055 21.0833 8.08334 21.0833 9.16675V10.0834H11.9167L11.9167 0.916748L12.8333 0.916748C13.9167 0.916748 14.9895 1.13014 15.9905 1.54474C16.9914 1.95934 17.9009 2.56703 18.667 3.33312C19.433 4.0992 20.0407 5.00867 20.4553 6.00961ZM19.1842 8.25008C19.1081 7.72271 18.9664 7.20568 18.7616 6.7112C18.4391 5.93269 17.9664 5.22532 17.3706 4.62948C16.7748 4.03364 16.0674 3.56099 15.2889 3.23852C14.7944 3.0337 14.2774 2.89201 13.75 2.81589L13.75 8.25008H19.1842Z"
                                            fill="#90A3BF"
                                        />
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M10.0833 2.80116C8.77595 2.94733 7.51774 3.40467 6.41655 4.14046C5.05984 5.04698 4.00242 6.33545 3.378 7.84294C2.75357 9.35043 2.5902 11.0092 2.90853 12.6096C3.22685 14.2099 4.01259 15.6799 5.16637 16.8337C6.32016 17.9875 7.79017 18.7732 9.39051 19.0916C10.9909 19.4099 12.6497 19.2465 14.1571 18.6221C15.6646 17.9977 16.9531 16.9402 17.8596 15.5835C18.5954 14.4823 19.0528 13.2241 19.1989 11.9167H10.0833V2.80116Z"
                                            fill="#90A3BF"
                                        />
                                    </svg>

                                    <p className="text-sm leading-[150%] -tracking-[0.32px] text-gray-500 2xl:text-base">
                                        Allocations
                                    </p>
                                </button>

                                <button className="flex w-fit items-center gap-x-[10px]">
                                    <svg
                                        width="22"
                                        height="22"
                                        viewBox="0 0 22 22"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M10.0833 2.75H2.75V10.0833H10.0833V2.75ZM10.0833 11.9167H2.75V19.25H10.0833V11.9167ZM19.25 2.75H11.9167V10.0833H19.25V2.75ZM19.25 11.9167H11.9167V19.25H19.25V11.9167Z"
                                            fill="#90A3BF"
                                        />
                                    </svg>

                                    <p className="text-sm leading-[150%] -tracking-[0.32px] text-gray-500 2xl:text-base">
                                        Activity
                                    </p>
                                </button>

                                <button className="flex w-fit items-center gap-x-[10px]">
                                    <svg
                                        width="22"
                                        height="22"
                                        viewBox="0 0 22 22"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M13.7501 7.33325L12.8334 6.41659V1.83325L3.66675 1.83325L3.66675 20.1666H18.3334L18.3334 7.33325L13.7501 7.33325ZM17.7964 5.49992L14.6667 2.37022V5.49992L17.7964 5.49992ZM11.0001 8.24992H7.33342V6.41659H11.0001V8.24992ZM7.33342 11.9166V10.0833H14.6667V11.9166H7.33342ZM7.33342 13.7499V15.5833H14.6667V13.7499H7.33342Z"
                                            fill="#90A3BF"
                                        />
                                    </svg>

                                    <p className="text-sm leading-[150%] -tracking-[0.32px] text-gray-500 2xl:text-base">
                                        Contracts
                                    </p>
                                </button>

                                <button className="flex w-fit items-center gap-x-[10px]">
                                    <svg
                                        width="22"
                                        height="22"
                                        viewBox="0 0 22 22"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M6.42313 8.56066C4.28357 9.31386 2.75 11.3528 2.75 13.75C2.75 16.7875 5.21243 19.25 8.25 19.25C10.6471 19.25 12.6861 17.7164 13.4393 15.5769C12.0013 15.5169 10.6703 15.0429 9.5624 14.2709L8.25 15.5833L6.41667 13.75L7.72907 12.4376C6.95708 11.3297 6.48306 9.99865 6.42313 8.56066Z"
                                            fill="#90A3BF"
                                        />
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M13.75 13.75C16.7876 13.75 19.25 11.2876 19.25 8.25C19.25 5.21243 16.7876 2.75 13.75 2.75C10.7124 2.75 8.25 5.21243 8.25 8.25C8.25 11.2876 10.7124 13.75 13.75 13.75ZM15.5833 8.25L13.75 6.41667L11.9167 8.25L13.75 10.0833L15.5833 8.25Z"
                                            fill="#90A3BF"
                                        />
                                    </svg>

                                    <p className="text-sm leading-[150%] -tracking-[0.32px] text-gray-500 2xl:text-base">
                                        Staking
                                    </p>
                                </button>

                                <button className="flex w-fit items-center gap-x-[10px]">
                                    <svg
                                        width="22"
                                        height="22"
                                        viewBox="0 0 22 22"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M19.8002 11C19.8002 15.8601 15.8603 19.8 11.0002 19.8C6.14009 19.8 2.2002 15.8601 2.2002 11C2.2002 6.13985 6.14009 2.19995 11.0002 2.19995C15.8603 2.19995 19.8002 6.13985 19.8002 11ZM11.0002 7.69995C10.5944 7.69995 10.2386 7.91909 10.0467 8.25075C9.7425 8.77662 9.0696 8.95632 8.54373 8.65212C8.01787 8.34792 7.83817 7.67502 8.14236 7.14915C8.71129 6.16565 9.77736 5.49995 11.0002 5.49995C12.8228 5.49995 14.3002 6.97741 14.3002 8.79995C14.3002 10.2368 13.3819 11.4592 12.1002 11.9122V12.1C12.1002 12.7075 11.6077 13.2 11.0002 13.2C10.3927 13.2 9.90021 12.7075 9.90021 12.1V11C9.90021 10.3924 10.3927 9.89995 11.0002 9.89995C11.6077 9.89995 12.1002 9.40746 12.1002 8.79995C12.1002 8.19244 11.6077 7.69995 11.0002 7.69995ZM11.0002 16.5C11.6077 16.5 12.1002 16.0075 12.1002 15.4C12.1002 14.7924 11.6077 14.3 11.0002 14.3C10.3927 14.3 9.9002 14.7924 9.9002 15.4C9.9002 16.0075 10.3927 16.5 11.0002 16.5Z"
                                            fill="#90A3BF"
                                        />
                                    </svg>

                                    <p className="text-sm leading-[150%] -tracking-[0.32px] text-gray-500 2xl:text-base">
                                        FAQs
                                    </p>
                                </button>
                            </div>

                            {/* Balance */}
                            <div className="grid grid-cols-4 gap-x-4">
                                <div className="space-y-3 rounded-xl border border-gray-45 bg-white px-6 py-4 backdrop-blur-lg">
                                    <div className="text-base font-medium leading-7 text-gray-800">
                                        Price
                                    </div>
                                    <div className="flex items-center text-3xl font-semibold leading-7 text-gray-800">
                                        {dataDetails && (
                                            <span>{dataDetails.currency}</span>
                                        )}
                                        {dataDetails && (
                                            <p>{dataDetails.price}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="space-y-3 rounded-xl border border-gray-45 bg-white px-6 py-4 backdrop-blur-lg">
                                    <div className="text-base font-medium leading-7 text-gray-800">
                                        TVL
                                    </div>
                                    <div className="flex items-center text-3xl font-semibold leading-7 text-gray-800">
                                        {dataDetails && (
                                            <span>{dataDetails.currency}</span>
                                        )}
                                        {dataDetails && (
                                            <p>{dataDetails.tvl}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="space-y-3 rounded-xl border border-gray-45 bg-white px-6 py-4 backdrop-blur-lg">
                                    <div className="text-base font-medium leading-7 text-gray-800">
                                        Volume
                                    </div>
                                    <div className="flex items-center text-3xl font-semibold leading-7 text-gray-800">
                                        {dataDetails && (
                                            <span>{dataDetails.currency}</span>
                                        )}
                                        {dataDetails && (
                                            <p>{dataDetails.volume}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="space-y-3 rounded-xl border border-gray-45 bg-white px-6 py-4 backdrop-blur-lg">
                                    <div className="text-base font-medium leading-7 text-gray-800">
                                        Return
                                    </div>
                                    <div className="flex items-center text-3xl font-semibold leading-7 text-gray-800">
                                        {dataDetails && (
                                            <span>{dataDetails.currency}</span>
                                        )}
                                        {dataDetails && (
                                            <p>{dataDetails.return}</p>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Charts */}
                            <div className="shadow-chart space-y-8 rounded-lg border border-gray-100 bg-white py-8">
                                {/* Information */}
                                <div className="flex items-center justify-between px-8">
                                    <div className="space-y-2">
                                        <div className="flex text-2xl font-semibold text-gray-800">
                                            {dataDetails && (
                                                <span>
                                                    {dataDetails.currency}
                                                </span>
                                            )}
                                            {dataDetails && (
                                                <p>{dataDetails.price}</p>
                                            )}
                                        </div>

                                        <div className=" text-xs tracking-wider text-gray-800">
                                            16:00 - 9 Dec, 2023
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-x-3">
                                        <button className="rounded-lg bg-blue-100 px-3 py-0.5 uppercase text-blue-600">
                                            1H
                                        </button>
                                        <button className="rounded-lg bg-gray-50 px-3 py-0.5 uppercase text-gray-800">
                                            3H
                                        </button>
                                        <button className="rounded-lg bg-gray-50 px-3 py-0.5 uppercase text-gray-800">
                                            5H
                                        </button>
                                        <button className="rounded-lg bg-gray-50 px-3 py-0.5 uppercase text-gray-800">
                                            1D
                                        </button>
                                        <button className="rounded-lg bg-gray-50 px-3 py-0.5 uppercase text-gray-800">
                                            1W
                                        </button>
                                        <button className="rounded-lg bg-gray-50 px-3 py-0.5 uppercase text-gray-800">
                                            1M
                                        </button>
                                    </div>
                                </div>

                                <div className="px-5">
                                    <div id="line-chart"></div>
                                </div>
                            </div>

                            {/* TVL */}
                            <div className="shadow-chart rounded-lg border border-gray-100 bg-white">
                                <div className="flex items-center justify-between border-b border-gray-200 p-6">
                                    <div className="text-base font-semibold -tracking-[0.16px]">
                                        1 Week
                                    </div>
                                    <div className="text-base font-semibold -tracking-[0.16px]">
                                        1 Day
                                    </div>
                                    <div className="text-base font-semibold -tracking-[0.16px]">
                                        1 Month
                                    </div>
                                    <div className="text-base font-semibold -tracking-[0.16px]">
                                        3 Months
                                    </div>
                                    <div className="text-base font-semibold -tracking-[0.16px]">
                                        1 Year
                                    </div>
                                </div>

                                <div className="flex items-center justify-between p-6">
                                    <div className="text-base -tracking-[0.16px] text-red-500">
                                        -1,57%
                                    </div>
                                    <div className="text-base -tracking-[0.16px] text-green-500">
                                        24,32%
                                    </div>
                                    <div className="text-base -tracking-[0.16px] text-green-500">
                                        34,32%
                                    </div>
                                    <div className="text-base -tracking-[0.16px] text-green-500">
                                        44,32%
                                    </div>
                                    <div className="text-base -tracking-[0.16px] text-green-500">
                                        54,32%
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full">
                            <div className="mb-[40px] flex items-center gap-x-[6px] rounded-xl bg-[#E0E9F4] p-1">
                                <button className="shadow-elevation w-full rounded-lg bg-white px-8 py-2 font-semibold leading-[150%] -tracking-[0.32px] text-blue-600">
                                    Deposit
                                </button>

                                <button className="w-full rounded-lg px-8 py-2 leading-[150%] -tracking-[0.32px] text-gray-500">
                                    Withdraw
                                </button>
                            </div>

                            <div className="space-y-2">
                                <div className="isolate inline-flex -space-x-px rounded-[10px] bg-white shadow-sm">
                                    <button className="relative inline-flex items-center rounded-l-[10px] p-2 text-sm text-gray-900 ring-1 ring-inset ring-gray-300">
                                        15%
                                    </button>

                                    <button className="relative inline-flex items-center p-2 text-sm text-gray-900 ring-1 ring-inset ring-gray-300">
                                        30%
                                    </button>

                                    <button className="relative inline-flex items-center p-2 text-sm text-gray-900 ring-1 ring-inset ring-gray-300">
                                        50%
                                    </button>

                                    <button className="relative inline-flex items-center rounded-r-[10px] p-2 text-sm text-gray-900 ring-1 ring-inset ring-gray-300">
                                        Max
                                    </button>
                                </div>

                                {/* <div className="space-y-2">
                                    <div className="flex justify-between rounded-[10px] border border-gray-300 bg-white px-6 py-4">
                                        <div className=" space-y-2">
                                            <div className=" text-2xl font-semibold leading-10 -tracking-[0.26px]">
                                                1206.73
                                            </div>
                                            <div className="text-xs font-semibold leading-4 text-gray-500">
                                                $1,206.73
                                                <span className="text-red-600">
                                                    (-0.0572%)
                                                </span>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <button className="flex items-center gap-x-[10px] rounded-xl border border-gray-300 bg-[#FAFBFF] px-4 py-3 text-gray-900">
                                                <span>
                                                    <svg
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g clip-path="url(#clip0_242_12250)">
                                                            <path
                                                                d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
                                                                fill="#2775C9"
                                                            />
                                                            <path
                                                                fill-rule="evenodd"
                                                                clip-rule="evenodd"
                                                                d="M11.28 7.54458V6.79518C11.28 6.39753 11.6024 6.07518 12 6.07518C12.3976 6.07518 12.72 6.39753 12.72 6.79518V7.54198C14.0229 7.73815 14.9161 8.4789 15.1546 9.53435C15.2063 9.76325 15.0626 9.99074 14.8337 10.0424C14.803 10.0494 14.7716 10.0529 14.7401 10.0529H14.3506C14.0354 10.0529 13.7486 9.87085 13.6144 9.58565C13.366 9.0576 12.7772 8.75354 11.9931 8.75354C11.0125 8.75354 10.3508 9.23479 10.3508 9.95666C10.3508 10.5342 10.79 10.871 11.8547 11.1237L12.8533 11.3523C14.6159 11.7553 15.3618 12.4832 15.3618 13.7766C15.3618 15.2098 14.3613 16.1791 12.72 16.4076V17.2752C12.72 17.6728 12.3976 17.9952 12 17.9952C11.6024 17.9952 11.28 17.6728 11.28 17.2752V16.4212C9.8262 16.2457 8.84433 15.4762 8.61369 14.2989C8.57574 14.1052 8.70201 13.9174 8.89572 13.8795C8.91835 13.875 8.94136 13.8728 8.96443 13.8728L9.55574 13.8729C9.82337 13.8729 10.0671 14.0269 10.182 14.2686C10.4543 14.8411 11.1509 15.1963 12.0232 15.1963C13.0699 15.1963 13.7978 14.6789 13.7978 13.9571C13.7978 13.3314 13.3526 12.9705 12.2578 12.7118L11.1329 12.4471C9.5327 12.0802 8.77473 11.3102 8.77473 10.071C8.77473 8.73648 9.78205 7.77693 11.28 7.54458ZM3 12.0004C3 8.02903 5.59223 4.66081 9.18314 3.48306C9.40993 3.40868 9.65407 3.53223 9.72845 3.75902C9.74271 3.80249 9.74997 3.84794 9.74997 3.89369L9.74998 4.14735C9.74998 4.53401 9.51544 4.88202 9.15705 5.02715C6.39432 6.14592 4.44643 8.84655 4.44643 12.0004C4.44643 15.1527 6.39244 17.8522 9.15306 18.9719C9.5139 19.1183 9.74998 19.4688 9.74998 19.8582L9.74999 20.0697C9.74999 20.3233 9.54445 20.5288 9.29089 20.5288C9.24162 20.5288 9.19266 20.5209 9.14591 20.5054C5.57432 19.3166 3 15.9579 3 12.0004ZM21 12.0004C21 15.9486 18.4379 19.3007 14.8794 20.4969C14.6295 20.5809 14.3589 20.4464 14.2749 20.1965C14.2584 20.1475 14.25 20.0961 14.25 20.0444V19.8749C14.25 19.4761 14.4914 19.117 14.8606 18.9664C17.614 17.8433 19.5536 15.1474 19.5536 12.0004C19.5536 8.85623 17.6176 6.16252 14.8684 5.03751C14.4944 4.88445 14.25 4.52044 14.25 4.11631V3.96178C14.25 3.69598 14.4655 3.48051 14.7313 3.48051C14.7835 3.48051 14.8354 3.48902 14.8849 3.50569C18.4405 4.70347 21 8.05417 21 12.0004Z"
                                                                fill="white"
                                                            />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_242_12250">
                                                                <rect
                                                                    width="24"
                                                                    height="24"
                                                                    fill="white"
                                                                />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </span>
                                                <div>USDC</div>
                                                <span>
                                                    <svg
                                                        width="20"
                                                        height="20"
                                                        viewBox="0 0 20 20"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            fill-rule="evenodd"
                                                            clip-rule="evenodd"
                                                            d="M10.0002 13.8765L4.26367 8.13989L5.73681 6.66675L10.0002 10.9302L14.2637 6.66675L15.7368 8.13989L10.0002 13.8765Z"
                                                            fill="#0D121F"
                                                        />
                                                    </svg>
                                                </span>
                                            </button>
                                            <p className="text-right text-xs font-medium leading-4 text-gray-300">
                                                Balance: 1509.00
                                            </p>
                                        </div>
                                    </div>
                                </div> */}

                                <div className="relative">
                                    <div className="space-y-2">
                                        <div className="space-y-2">
                                            <div className="flex justify-between rounded-[10px] border border-gray-300 bg-white px-6 py-4">
                                                <div className=" space-y-2">
                                                    <div className=" text-2xl font-semibold leading-10 -tracking-[0.26px]">
                                                        1206.73
                                                    </div>
                                                    <div className="text-xs font-semibold leading-4 text-gray-500">
                                                        $1,206.73
                                                        <span className="text-red-600">
                                                            (-0.0572%)
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="space-y-2">
                                                    <button className="flex items-center gap-x-[10px] rounded-xl border border-gray-300 bg-[#FAFBFF] px-4 py-3 text-gray-900">
                                                        <span>
                                                            <svg
                                                                width="24"
                                                                height="24"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <g clip-path="url(#clip0_242_12250)">
                                                                    <path
                                                                        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
                                                                        fill="#2775C9"
                                                                    />
                                                                    <path
                                                                        fill-rule="evenodd"
                                                                        clip-rule="evenodd"
                                                                        d="M11.28 7.54458V6.79518C11.28 6.39753 11.6024 6.07518 12 6.07518C12.3976 6.07518 12.72 6.39753 12.72 6.79518V7.54198C14.0229 7.73815 14.9161 8.4789 15.1546 9.53435C15.2063 9.76325 15.0626 9.99074 14.8337 10.0424C14.803 10.0494 14.7716 10.0529 14.7401 10.0529H14.3506C14.0354 10.0529 13.7486 9.87085 13.6144 9.58565C13.366 9.0576 12.7772 8.75354 11.9931 8.75354C11.0125 8.75354 10.3508 9.23479 10.3508 9.95666C10.3508 10.5342 10.79 10.871 11.8547 11.1237L12.8533 11.3523C14.6159 11.7553 15.3618 12.4832 15.3618 13.7766C15.3618 15.2098 14.3613 16.1791 12.72 16.4076V17.2752C12.72 17.6728 12.3976 17.9952 12 17.9952C11.6024 17.9952 11.28 17.6728 11.28 17.2752V16.4212C9.8262 16.2457 8.84433 15.4762 8.61369 14.2989C8.57574 14.1052 8.70201 13.9174 8.89572 13.8795C8.91835 13.875 8.94136 13.8728 8.96443 13.8728L9.55574 13.8729C9.82337 13.8729 10.0671 14.0269 10.182 14.2686C10.4543 14.8411 11.1509 15.1963 12.0232 15.1963C13.0699 15.1963 13.7978 14.6789 13.7978 13.9571C13.7978 13.3314 13.3526 12.9705 12.2578 12.7118L11.1329 12.4471C9.5327 12.0802 8.77473 11.3102 8.77473 10.071C8.77473 8.73648 9.78205 7.77693 11.28 7.54458ZM3 12.0004C3 8.02903 5.59223 4.66081 9.18314 3.48306C9.40993 3.40868 9.65407 3.53223 9.72845 3.75902C9.74271 3.80249 9.74997 3.84794 9.74997 3.89369L9.74998 4.14735C9.74998 4.53401 9.51544 4.88202 9.15705 5.02715C6.39432 6.14592 4.44643 8.84655 4.44643 12.0004C4.44643 15.1527 6.39244 17.8522 9.15306 18.9719C9.5139 19.1183 9.74998 19.4688 9.74998 19.8582L9.74999 20.0697C9.74999 20.3233 9.54445 20.5288 9.29089 20.5288C9.24162 20.5288 9.19266 20.5209 9.14591 20.5054C5.57432 19.3166 3 15.9579 3 12.0004ZM21 12.0004C21 15.9486 18.4379 19.3007 14.8794 20.4969C14.6295 20.5809 14.3589 20.4464 14.2749 20.1965C14.2584 20.1475 14.25 20.0961 14.25 20.0444V19.8749C14.25 19.4761 14.4914 19.117 14.8606 18.9664C17.614 17.8433 19.5536 15.1474 19.5536 12.0004C19.5536 8.85623 17.6176 6.16252 14.8684 5.03751C14.4944 4.88445 14.25 4.52044 14.25 4.11631V3.96178C14.25 3.69598 14.4655 3.48051 14.7313 3.48051C14.7835 3.48051 14.8354 3.48902 14.8849 3.50569C18.4405 4.70347 21 8.05417 21 12.0004Z"
                                                                        fill="white"
                                                                    />
                                                                </g>
                                                                <defs>
                                                                    <clipPath id="clip0_242_12250">
                                                                        <rect
                                                                            width="24"
                                                                            height="24"
                                                                            fill="white"
                                                                        />
                                                                    </clipPath>
                                                                </defs>
                                                            </svg>
                                                        </span>
                                                        <div>USDC</div>
                                                        <span>
                                                            <svg
                                                                width="20"
                                                                height="20"
                                                                viewBox="0 0 20 20"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    fill-rule="evenodd"
                                                                    clip-rule="evenodd"
                                                                    d="M10.0002 13.8765L4.26367 8.13989L5.73681 6.66675L10.0002 10.9302L14.2637 6.66675L15.7368 8.13989L10.0002 13.8765Z"
                                                                    fill="#0D121F"
                                                                />
                                                            </svg>
                                                        </span>
                                                    </button>
                                                    <p className="text-right text-xs font-medium leading-4 text-gray-300">
                                                        Balance: 1509.00
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <div className="flex justify-between rounded-[10px] border border-gray-300 bg-white px-6 py-4">
                                                <div className=" space-y-2">
                                                    <div className=" text-2xl font-semibold leading-10 -tracking-[0.26px]">
                                                        1206.73
                                                    </div>
                                                    <div className="text-xs font-semibold leading-4 text-gray-500">
                                                        $1,206.73
                                                        <span className="text-red-600">
                                                            (-0.0572%)
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="space-y-2">
                                                    <button className="flex items-center gap-x-[10px] rounded-xl border border-gray-300 bg-[#FAFBFF] px-4 py-3 text-gray-900">
                                                        <span>
                                                            <svg
                                                                width="24"
                                                                height="24"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <g clip-path="url(#clip0_242_12250)">
                                                                    <path
                                                                        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
                                                                        fill="#2775C9"
                                                                    />
                                                                    <path
                                                                        fill-rule="evenodd"
                                                                        clip-rule="evenodd"
                                                                        d="M11.28 7.54458V6.79518C11.28 6.39753 11.6024 6.07518 12 6.07518C12.3976 6.07518 12.72 6.39753 12.72 6.79518V7.54198C14.0229 7.73815 14.9161 8.4789 15.1546 9.53435C15.2063 9.76325 15.0626 9.99074 14.8337 10.0424C14.803 10.0494 14.7716 10.0529 14.7401 10.0529H14.3506C14.0354 10.0529 13.7486 9.87085 13.6144 9.58565C13.366 9.0576 12.7772 8.75354 11.9931 8.75354C11.0125 8.75354 10.3508 9.23479 10.3508 9.95666C10.3508 10.5342 10.79 10.871 11.8547 11.1237L12.8533 11.3523C14.6159 11.7553 15.3618 12.4832 15.3618 13.7766C15.3618 15.2098 14.3613 16.1791 12.72 16.4076V17.2752C12.72 17.6728 12.3976 17.9952 12 17.9952C11.6024 17.9952 11.28 17.6728 11.28 17.2752V16.4212C9.8262 16.2457 8.84433 15.4762 8.61369 14.2989C8.57574 14.1052 8.70201 13.9174 8.89572 13.8795C8.91835 13.875 8.94136 13.8728 8.96443 13.8728L9.55574 13.8729C9.82337 13.8729 10.0671 14.0269 10.182 14.2686C10.4543 14.8411 11.1509 15.1963 12.0232 15.1963C13.0699 15.1963 13.7978 14.6789 13.7978 13.9571C13.7978 13.3314 13.3526 12.9705 12.2578 12.7118L11.1329 12.4471C9.5327 12.0802 8.77473 11.3102 8.77473 10.071C8.77473 8.73648 9.78205 7.77693 11.28 7.54458ZM3 12.0004C3 8.02903 5.59223 4.66081 9.18314 3.48306C9.40993 3.40868 9.65407 3.53223 9.72845 3.75902C9.74271 3.80249 9.74997 3.84794 9.74997 3.89369L9.74998 4.14735C9.74998 4.53401 9.51544 4.88202 9.15705 5.02715C6.39432 6.14592 4.44643 8.84655 4.44643 12.0004C4.44643 15.1527 6.39244 17.8522 9.15306 18.9719C9.5139 19.1183 9.74998 19.4688 9.74998 19.8582L9.74999 20.0697C9.74999 20.3233 9.54445 20.5288 9.29089 20.5288C9.24162 20.5288 9.19266 20.5209 9.14591 20.5054C5.57432 19.3166 3 15.9579 3 12.0004ZM21 12.0004C21 15.9486 18.4379 19.3007 14.8794 20.4969C14.6295 20.5809 14.3589 20.4464 14.2749 20.1965C14.2584 20.1475 14.25 20.0961 14.25 20.0444V19.8749C14.25 19.4761 14.4914 19.117 14.8606 18.9664C17.614 17.8433 19.5536 15.1474 19.5536 12.0004C19.5536 8.85623 17.6176 6.16252 14.8684 5.03751C14.4944 4.88445 14.25 4.52044 14.25 4.11631V3.96178C14.25 3.69598 14.4655 3.48051 14.7313 3.48051C14.7835 3.48051 14.8354 3.48902 14.8849 3.50569C18.4405 4.70347 21 8.05417 21 12.0004Z"
                                                                        fill="white"
                                                                    />
                                                                </g>
                                                                <defs>
                                                                    <clipPath id="clip0_242_12250">
                                                                        <rect
                                                                            width="24"
                                                                            height="24"
                                                                            fill="white"
                                                                        />
                                                                    </clipPath>
                                                                </defs>
                                                            </svg>
                                                        </span>
                                                        <div>USDC</div>
                                                        <span>
                                                            <svg
                                                                width="20"
                                                                height="20"
                                                                viewBox="0 0 20 20"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    fill-rule="evenodd"
                                                                    clip-rule="evenodd"
                                                                    d="M10.0002 13.8765L4.26367 8.13989L5.73681 6.66675L10.0002 10.9302L14.2637 6.66675L15.7368 8.13989L10.0002 13.8765Z"
                                                                    fill="#0D121F"
                                                                />
                                                            </svg>
                                                        </span>
                                                    </button>
                                                    <p className="text-right text-xs font-medium leading-4 text-gray-300">
                                                        Balance: 1509.00
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg border border-gray-300 bg-white p-[11px]">
                                        <svg
                                            width="18"
                                            height="18"
                                            viewBox="0 0 18 18"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M9.75006 4.50006L11.0304 3.96973L14.0304 6.96973L12.9697 8.03039L11.2501 6.31072L11.2501 13.5001H9.75006L9.75006 4.50006Z"
                                                fill="#2563EB"
                                            />
                                            <path
                                                d="M8.25006 13.5001L6.96973 14.0305L3.96973 11.0305L5.03039 9.9698L6.75006 11.6895L6.75006 4.50013L8.25006 4.50013L8.25006 13.5001Z"
                                                fill="#2563EB"
                                            />
                                        </svg>
                                    </button>
                                </div>

                                {/* <div className="space-y-2">
                                    <div className="flex justify-between rounded-[10px] border border-gray-300 bg-white px-6 py-4">
                                        <div className=" space-y-2">
                                            <div className=" text-2xl font-semibold leading-10 -tracking-[0.26px]">
                                                1206.73
                                            </div>
                                            <div className="text-xs font-semibold leading-4 text-gray-500">
                                                $1,206.73
                                                <span className="text-red-600">
                                                    (-0.0572%)
                                                </span>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <button className="flex items-center gap-x-[10px] rounded-xl border border-gray-300 bg-[#FAFBFF] px-4 py-3 text-gray-900">
                                                <span>
                                                    <svg
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g clip-path="url(#clip0_242_12250)">
                                                            <path
                                                                d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
                                                                fill="#2775C9"
                                                            />
                                                            <path
                                                                fill-rule="evenodd"
                                                                clip-rule="evenodd"
                                                                d="M11.28 7.54458V6.79518C11.28 6.39753 11.6024 6.07518 12 6.07518C12.3976 6.07518 12.72 6.39753 12.72 6.79518V7.54198C14.0229 7.73815 14.9161 8.4789 15.1546 9.53435C15.2063 9.76325 15.0626 9.99074 14.8337 10.0424C14.803 10.0494 14.7716 10.0529 14.7401 10.0529H14.3506C14.0354 10.0529 13.7486 9.87085 13.6144 9.58565C13.366 9.0576 12.7772 8.75354 11.9931 8.75354C11.0125 8.75354 10.3508 9.23479 10.3508 9.95666C10.3508 10.5342 10.79 10.871 11.8547 11.1237L12.8533 11.3523C14.6159 11.7553 15.3618 12.4832 15.3618 13.7766C15.3618 15.2098 14.3613 16.1791 12.72 16.4076V17.2752C12.72 17.6728 12.3976 17.9952 12 17.9952C11.6024 17.9952 11.28 17.6728 11.28 17.2752V16.4212C9.8262 16.2457 8.84433 15.4762 8.61369 14.2989C8.57574 14.1052 8.70201 13.9174 8.89572 13.8795C8.91835 13.875 8.94136 13.8728 8.96443 13.8728L9.55574 13.8729C9.82337 13.8729 10.0671 14.0269 10.182 14.2686C10.4543 14.8411 11.1509 15.1963 12.0232 15.1963C13.0699 15.1963 13.7978 14.6789 13.7978 13.9571C13.7978 13.3314 13.3526 12.9705 12.2578 12.7118L11.1329 12.4471C9.5327 12.0802 8.77473 11.3102 8.77473 10.071C8.77473 8.73648 9.78205 7.77693 11.28 7.54458ZM3 12.0004C3 8.02903 5.59223 4.66081 9.18314 3.48306C9.40993 3.40868 9.65407 3.53223 9.72845 3.75902C9.74271 3.80249 9.74997 3.84794 9.74997 3.89369L9.74998 4.14735C9.74998 4.53401 9.51544 4.88202 9.15705 5.02715C6.39432 6.14592 4.44643 8.84655 4.44643 12.0004C4.44643 15.1527 6.39244 17.8522 9.15306 18.9719C9.5139 19.1183 9.74998 19.4688 9.74998 19.8582L9.74999 20.0697C9.74999 20.3233 9.54445 20.5288 9.29089 20.5288C9.24162 20.5288 9.19266 20.5209 9.14591 20.5054C5.57432 19.3166 3 15.9579 3 12.0004ZM21 12.0004C21 15.9486 18.4379 19.3007 14.8794 20.4969C14.6295 20.5809 14.3589 20.4464 14.2749 20.1965C14.2584 20.1475 14.25 20.0961 14.25 20.0444V19.8749C14.25 19.4761 14.4914 19.117 14.8606 18.9664C17.614 17.8433 19.5536 15.1474 19.5536 12.0004C19.5536 8.85623 17.6176 6.16252 14.8684 5.03751C14.4944 4.88445 14.25 4.52044 14.25 4.11631V3.96178C14.25 3.69598 14.4655 3.48051 14.7313 3.48051C14.7835 3.48051 14.8354 3.48902 14.8849 3.50569C18.4405 4.70347 21 8.05417 21 12.0004Z"
                                                                fill="white"
                                                            />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_242_12250">
                                                                <rect
                                                                    width="24"
                                                                    height="24"
                                                                    fill="white"
                                                                />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </span>
                                                <div>USDC</div>
                                                <span>
                                                    <svg
                                                        width="20"
                                                        height="20"
                                                        viewBox="0 0 20 20"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            fill-rule="evenodd"
                                                            clip-rule="evenodd"
                                                            d="M10.0002 13.8765L4.26367 8.13989L5.73681 6.66675L10.0002 10.9302L14.2637 6.66675L15.7368 8.13989L10.0002 13.8765Z"
                                                            fill="#0D121F"
                                                        />
                                                    </svg>
                                                </span>
                                            </button>
                                            <p className="text-right text-xs font-medium leading-4 text-gray-300">
                                                Balance: 1509.00
                                            </p>
                                        </div>
                                    </div>
                                </div> */}
                            </div>

                            <div className="mt-8">
                                <div className="space-y-4">
                                    <div className="mt-5 flex items-center justify-between rounded-xl border border-gray-300 bg-white px-5 py-3">
                                        <div className="flex items-center gap-x-2 font-medium leading-6 text-gray-900 lg:text-sm">
                                            <span>
                                                <svg
                                                    width="18"
                                                    height="18"
                                                    viewBox="0 0 18 18"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        clip-rule="evenodd"
                                                        d="M16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9ZM8.25 6.75V5.25H9.75V6.75H8.25ZM8.25 12.75V8.25H9.75V12.75H8.25Z"
                                                        fill="#0D121F"
                                                    />
                                                </svg>
                                            </span>
                                            1 USDT = 1.00021 USDC
                                        </div>
                                        <button className="flex items-center gap-x-1.5 font-medium leading-6 text-gray-900 lg:text-sm">
                                            Advanced Setting
                                            <span>
                                                <svg
                                                    width="12"
                                                    height="12"
                                                    viewBox="0 0 12 12"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        clip-rule="evenodd"
                                                        d="M6.00005 8.32582L2.55811 4.88388L3.44199 4L6.00005 6.55806L8.55811 4L9.44199 4.88388L6.00005 8.32582Z"
                                                        fill="#0D121F"
                                                    />
                                                </svg>
                                            </span>
                                        </button>
                                    </div>

                                    <button className="flex w-full items-center justify-center gap-x-3 rounded-[10px] bg-blue-600 py-4 text-white duration-200 hover:bg-blue-500">
                                        <span>
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M8.0625 10.3125L12 14.25L15.9375 10.3125"
                                                    fill="white"
                                                />
                                                <path
                                                    d="M8.0625 10.3125L12 14.25L15.9375 10.3125"
                                                    stroke="white"
                                                    stroke-width="1.5"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                                <path
                                                    d="M12 3.75V14.25"
                                                    stroke="white"
                                                    stroke-width="1.5"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                                <path
                                                    d="M20.25 14.25V19.5C20.25 19.6989 20.171 19.8897 20.0303 20.0303C19.8897 20.171 19.6989 20.25 19.5 20.25H4.5C4.30109 20.25 4.11032 20.171 3.96967 20.0303C3.82902 19.8897 3.75 19.6989 3.75 19.5V14.25"
                                                    stroke="white"
                                                    stroke-width="1.5"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                            </svg>
                                        </span>
                                        Deposit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Token Description */}
                    <div className="space-y-6 pt-20">
                        <div className="flex w-fit items-center gap-x-[10px] border-b-2 border-blue-600 pb-2 font-semibold text-blue-600">
                            <div>
                                <svg
                                    width="22"
                                    height="22"
                                    viewBox="0 0 22 22"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M3.78125 17.875V11.6875H8.59375"
                                        stroke="#3461FF"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M19.5938 17.875H2.40625"
                                        stroke="#3461FF"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M8.59375 17.875V7.5625H13.4062"
                                        stroke="#3461FF"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M18.2188 3.4375H13.4062V17.875H18.2188V3.4375Z"
                                        stroke="#3461FF"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </div>
                            <div>Token Description</div>
                        </div>

                        <p className="text-base leading-[150%] -tracking-[0.32px] text-gray-800">
                            The Avalanche Social Index (aHYPE) tracks the
                            performance of a portfolio composed of the most
                            socially active cryptocurrencies in the last 30
                            days. This portfolio is weighted according to the
                            social score made available by Heimdall and the
                            technology provided by the Kassandra Protocol. The
                            portfolio is a SIP (Smart Index Pool) and is
                            rebalanced by arbitrageurs just like a usual
                            liquidity pool. The index is accompanied by its own
                            token SaHYPE, allowing investors to buy the index by
                            purchasing the token, just like an ETF.
                        </p>
                    </div>
                </div>
            </section>

            <MorePools></MorePools>
        </main>
    );
}
