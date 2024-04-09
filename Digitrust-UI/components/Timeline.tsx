import Image from "next/image";
import TimeLine from "../public/assets/images/timeline.png";

export default function Timeline() {
    return (
        <section>
            <div className="py-24 xl:container lg:px-16 xl:mx-auto xl:px-0">
                {/* Title */}
                <h1 className="text-center text-4xl font-bold leading-[130%] text-gray-800 xl:text-heading">
                    Timeline
                </h1>
            </div>
            <div className="relative overflow-hidden">
                <Image
                    className="absolute top-1/2 -translate-y-1/2"
                    src={TimeLine}
                    alt="timeline"
                ></Image>

                <div className="relative xl:container lg:px-16 xl:mx-auto xl:px-0">
                    {/* Vertical middle */}
                    <div>
                        <div
                            className="absolute left-1/2 top-0 h-5 w-5
                        -translate-x-1/2 rounded-full bg-blue-600"
                        ></div>

                        <div className="absolute left-1/2 h-full w-[5px] -translate-x-1/2 transform bg-blue-600"></div>

                        <div
                            className="absolute bottom-0 left-1/2 h-5 w-5
                        -translate-x-1/2 rounded-full bg-blue-600"
                        ></div>
                    </div>

                    <div className="space-y-[60px] pb-[75px] pt-[60px]">
                        {/* Left */}
                        <div>
                            <div className="relative flex flex-col items-center">
                                <div className="mx-auto flex w-full items-center justify-start">
                                    <div className="w-1/2 pr-[40px]">
                                        <div className="flex">
                                            <div className="mt-8 flex h-[70px] items-center rounded-l-full bg-blue-600 pl-[40px] pr-[25px] text-4xl font-semibold text-white xl:text-heading">
                                                1
                                            </div>

                                            <div className="space-y-6 rounded-primary border border-gray-45 bg-blue-50 p-8">
                                                <h1 className="text-3xl font-semibold text-gray-800">
                                                    Tittle Sample
                                                </h1>
                                                <div className="flex gap-x-3">
                                                    <div className="mt-2">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="8"
                                                            height="9"
                                                            viewBox="0 0 8 9"
                                                            fill="none"
                                                        >
                                                            <ellipse
                                                                cx="4.0359"
                                                                cy="4.73523"
                                                                rx="3.55592"
                                                                ry="4.15515"
                                                                fill="currentColor"
                                                            />
                                                        </svg>
                                                    </div>
                                                    <p>
                                                        Sample Sample Sample
                                                        Sample Sample Sample
                                                        Sample Sample Sample
                                                        Sample Sample Sample
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute right-1/2 top-0">
                                    <div className="h-0 w-0 border-b-[10px] border-r-[15px] border-t-[10px] border-b-transparent border-r-blue-600 border-t-transparent"></div>
                                </div>
                            </div>
                        </div>

                        {/* Right */}
                        <div>
                            <div className="relative flex flex-col items-center">
                                <div className="mx-auto flex w-full items-center justify-end">
                                    <div className="w-1/2 pl-[40px]">
                                        <div className="flex">
                                            <div className="space-y-6 rounded-primary border border-gray-45 bg-blue-50 p-8">
                                                <h1 className="text-3xl font-semibold text-gray-800">
                                                    Tittle Sample
                                                </h1>
                                                <div className="flex gap-x-3">
                                                    <div className="mt-2">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="8"
                                                            height="9"
                                                            viewBox="0 0 8 9"
                                                            fill="none"
                                                        >
                                                            <ellipse
                                                                cx="4.0359"
                                                                cy="4.73523"
                                                                rx="3.55592"
                                                                ry="4.15515"
                                                                fill="currentColor"
                                                            />
                                                        </svg>
                                                    </div>
                                                    <p>
                                                        Sample Sample Sample
                                                        Sample Sample Sample
                                                        Sample Sample Sample
                                                        Sample Sample Sample
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="mt-8 flex h-[70px] items-center rounded-r-full bg-blue-600 pl-[25px] pr-[40px] text-center text-4xl font-semibold text-white xl:text-heading">
                                                2
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute left-1/2 top-0">
                                    <div className="h-0 w-0 border-b-[10px] border-l-[15px] border-t-[10px] border-b-transparent border-l-blue-600 border-t-transparent"></div>
                                </div>
                            </div>
                        </div>

                        {/* Left */}
                        <div>
                            <div className="relative flex flex-col items-center">
                                <div className="mx-auto flex w-full items-center justify-start">
                                    <div className="w-1/2 pr-[40px]">
                                        <div className="flex">
                                            <div className="mt-8 flex h-[70px] items-center rounded-l-full bg-blue-600 pl-[40px] pr-[25px] text-4xl font-semibold text-white xl:text-heading">
                                                3
                                            </div>

                                            <div className="space-y-6 rounded-primary border border-gray-45 bg-blue-50 p-8">
                                                <h1 className="text-3xl font-semibold text-gray-800">
                                                    Tittle Sample
                                                </h1>
                                                <div className="flex gap-x-3">
                                                    <div className="mt-2">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="8"
                                                            height="9"
                                                            viewBox="0 0 8 9"
                                                            fill="none"
                                                        >
                                                            <ellipse
                                                                cx="4.0359"
                                                                cy="4.73523"
                                                                rx="3.55592"
                                                                ry="4.15515"
                                                                fill="currentColor"
                                                            />
                                                        </svg>
                                                    </div>
                                                    <p>
                                                        Sample Sample Sample
                                                        Sample Sample Sample
                                                        Sample Sample Sample
                                                        Sample Sample Sample
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute right-1/2 top-0">
                                    <div className="h-0 w-0 border-b-[10px] border-r-[15px] border-t-[10px] border-b-transparent border-r-blue-600 border-t-transparent"></div>
                                </div>
                            </div>
                        </div>

                        {/* Right */}
                        <div>
                            <div className="relative flex flex-col items-center">
                                <div className="mx-auto flex w-full items-center justify-end">
                                    <div className="w-1/2 pl-[40px]">
                                        <div className="flex">
                                            <div className="space-y-6 rounded-primary border border-gray-45 bg-blue-50 p-8">
                                                <h1 className="text-3xl font-semibold text-gray-800">
                                                    Tittle Sample
                                                </h1>
                                                <div className="flex gap-x-3">
                                                    <div className="mt-2">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="8"
                                                            height="9"
                                                            viewBox="0 0 8 9"
                                                            fill="none"
                                                        >
                                                            <ellipse
                                                                cx="4.0359"
                                                                cy="4.73523"
                                                                rx="3.55592"
                                                                ry="4.15515"
                                                                fill="currentColor"
                                                            />
                                                        </svg>
                                                    </div>
                                                    <p>
                                                        Sample Sample Sample
                                                        Sample Sample Sample
                                                        Sample Sample Sample
                                                        Sample Sample Sample
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="mt-8 flex h-[70px] items-center rounded-r-full bg-blue-600 pl-[25px] pr-[40px] text-center text-4xl font-semibold text-white xl:text-heading">
                                                4
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute left-1/2 top-0">
                                    <div className="h-0 w-0 border-b-[10px] border-l-[15px] border-t-[10px] border-b-transparent border-l-blue-600 border-t-transparent"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
