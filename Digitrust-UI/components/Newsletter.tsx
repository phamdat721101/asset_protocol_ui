export default function Newsletter() {
    return (
        <div>
            {/* Newsletter */}
            <div className="py-24 xl:container lg:px-16 xl:mx-auto xl:px-0">
                <div className="bg-newsletter relative rounded-primary bg-cover bg-no-repeat object-cover">
                    {/* Content */}
                    <div className="relative space-y-[30px] px-[40px] py-[100px] xl:px-[70px]">
                        {/* Heading */}
                        <div className="space-y-[13px] text-white">
                            <h1 className="text-4xl font-bold leading-[55px] xl:text-heading">
                                Get Started with DigiTrust Today!
                            </h1>
                            <p className="text-base font-normal xl:text-xl">
                                Subscribe to our newsletter to get early
                                information and special calls.
                            </p>
                        </div>

                        {/* Input form */}
                        <div className="relative font-medium">
                            <input
                                className="w-[500px] rounded-full py-[27px] pl-[29px] pr-[200px] text-base leading-[145.5%] text-gray-800 placeholder:text-base placeholder:text-gray-800 focus:outline-4 focus:outline-blue-600/80 xl:text-lg xl:placeholder:text-lg"
                                type="text"
                                placeholder="Enter your Email"
                            />
                            <button className="absolute left-[calc(500px-141px)] top-1/2 -translate-y-1/2 rounded-full bg-gray-800 px-11 py-5 text-base  text-white duration-300 hover:bg-gray-800/90 xl:text-xl">
                                Start
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
