import React from "react";
import RightArrowIcon from "../../UI/RightArrowIcon";
import DevelopmentIcon from "../../UI/DevelopmentIcon";
import MarketingIcon from "../../UI/MarketingIcon";
import SheetIcon from "../../UI/SheetIcon";
import FinanceIcon from "../../UI/FinanceIcon";

const Services = () => {
    return (
        <section className="mt-7 bg-shark-500 py-60 text-white sm:mt-10 lg:mt-130" id="services">
            <div className="px-5 font-DMSans sm:px-14 min-[2000px]:px-140">
                <h6 className="flex items-center text-lg font-medium leading-22 before:mr-2.5 before:h-3 before:w-3 before:rounded-full before:bg-cornflower-lilac-500 before:content-['']">
                    Our Services
                </h6>
                <div className="mt-4 flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
                    <h2 className="text-3xl font-bold leading-72 sm:text-17xl">What we do</h2>
                    <button
                        className="cursor-pointer rounded-10 border border-abbey-500 border-opacity-20 px-6 sm:px-14 min-[1024px]:px-6 min-[1037px]:px-14"
                        id="about"
                        name="about"
                        type="button"
                    >
                        <div className="right-arrow-icon-animation relative flex items-center space-x-4 before:absolute before:bottom-0 before:h-[3px] before:w-full before:bg-cornflower-lilac-500 before:content-['']">
                            <span className="text-lg font-bold leading-70">More Service</span>
                            <div>
                                <RightArrowIcon fill="#FFFFFF" />
                            </div>
                        </div>
                    </button>
                </div>
                <div className="mt-10 grid gap-7.5 sm:mt-90 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                    <div className="service-card-animation group flex cursor-pointer flex-col items-center justify-center rounded-10 border border-ship-gray-500 py-10 hover:bg-abbey-500">
                        <div className="flex h-[120px] w-[120px] items-center justify-center rounded-full border border-dashed bg-abbey-500 group-hover:bg-shark-500">
                            <DevelopmentIcon />
                        </div>
                        <p className="pt-7 text-center text-2xl font-bold leading-30">
                            Product <br /> Development
                        </p>
                        <button
                            className="mt-9 cursor-pointer rounded-10 border border-abbey-500 border-opacity-20 px-10 group-hover:border-shark-50"
                            id="about"
                            name="about"
                            type="button"
                        >
                            <div className="relative flex items-center space-x-4 before:absolute before:bottom-0 before:h-[3px] before:w-full before:bg-cornflower-lilac-500 before:content-['']">
                                <span className="text-lg font-bold leading-50">Learn More</span>
                            </div>
                        </button>
                    </div>
                    <div className="service-card-animation group flex cursor-pointer flex-col items-center justify-center rounded-10 border border-ship-gray-500 py-10 hover:bg-abbey-500">
                        <div className="flex h-[120px] w-[120px] items-center justify-center rounded-full border border-dashed bg-abbey-500 group-hover:bg-shark-500">
                            <MarketingIcon />
                        </div>
                        <p className="pt-7 text-center text-2xl font-bold leading-30">
                            Business <br /> Consulting
                        </p>
                        <button
                            className="mt-9 cursor-pointer rounded-10 border border-abbey-500 border-opacity-20 px-10 group-hover:border-shark-50"
                            id="about"
                            name="about"
                            type="button"
                        >
                            <div className="relative flex items-center space-x-4 before:absolute before:bottom-0 before:h-[3px] before:w-full before:bg-cornflower-lilac-500 before:content-['']">
                                <span className="text-lg font-bold leading-50">Learn More</span>
                            </div>
                        </button>
                    </div>
                    <div className="service-card-animation group flex cursor-pointer flex-col items-center justify-center rounded-10 border border-ship-gray-500 py-10 hover:bg-abbey-500">
                        <div className="flex h-[120px] w-[120px] items-center justify-center rounded-full border border-dashed bg-abbey-500 group-hover:bg-shark-500">
                            <SheetIcon />
                        </div>
                        <p className="pt-7 text-center text-2xl font-bold leading-30">
                            Digital <br /> Marketing
                        </p>
                        <button
                            className="mt-9 cursor-pointer rounded-10 border border-abbey-500 border-opacity-20 px-10 group-hover:border-shark-50"
                            id="about"
                            name="about"
                            type="button"
                        >
                            <div className="relative flex items-center space-x-4 before:absolute before:bottom-0 before:h-[3px] before:w-full before:bg-cornflower-lilac-500 before:content-['']">
                                <span className="text-lg font-bold leading-50">Learn More</span>
                            </div>
                        </button>
                    </div>
                    <div className="service-card-animation group flex cursor-pointer flex-col items-center justify-center rounded-[10px] border border-ship-gray-500 py-10 hover:bg-abbey-500">
                        <div className="flex h-[120px] w-[120px] items-center justify-center rounded-full border border-dashed bg-abbey-500 group-hover:bg-shark-500">
                            <FinanceIcon />
                        </div>
                        <p className="pt-7 text-center text-2xl font-bold leading-30">
                            Finance & <br /> Management
                        </p>
                        <button
                            className="mt-9 cursor-pointer rounded-10 border border-abbey-500 border-opacity-20 px-10 group-hover:border-shark-50"
                            id="about"
                            name="about"
                            type="button"
                        >
                            <div className="relative flex items-center space-x-4 before:absolute before:bottom-0 before:h-[3px] before:w-full before:bg-cornflower-lilac-500 before:content-['']">
                                <span className="text-lg font-bold leading-50">Learn More</span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
