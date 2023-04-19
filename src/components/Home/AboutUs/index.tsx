import React from "react";
import PuzzleImage from "@/public/assets/images/puzzle-image.png";
import ManImage from "@/public/assets/images/about-image.png";
import PaySafeImage from "@/public/assets/images/paysafe-image.png";
import QlikqImage from "@/public/assets/images/qlikq-image.png";
import SquareImage from "@/public/assets/images/square-image.png";
import WalmartImage from "@/public/assets/images/walmart-image.png";
import Image from "next/image";
import RightArrowIcon from "../../UI/RightArrowIcon";
const AboutUs = () => {
    return (
        <section className="mt-7 px-5 font-DMSans sm:mt-10 sm:px-14 lg:mt-130 min-[1900px]:px-120">
            <div className="grid grid-cols-1 items-center space-y-5 overflow-x-clip lg:grid-cols-2 lg:space-y-0">
                <div className="left-right-animation relative">
                    <Image
                        src={PuzzleImage}
                        alt="puzzle-image"
                        className="max-[400px]:w-[90px] absolute bottom-0 z-1 animate-bounce object-cover"
                        width="148"
                        height="148"
                    />
                    <Image src={ManImage} alt="man-image" className="banner-image-animation object-cover 3xl:w-full" />
                </div>
                <div className="right-left-animation relative lg:pl-7">
                    <h6 className="flex items-center text-lg font-medium leading-22 text-manatee-500 before:mr-2.5 before:h-3 before:w-3 before:rounded-full before:bg-cornflower-lilac-500 before:content-['']">
                        About Company
                    </h6>
                    <h2 className="mt-3 text-3xl font-bold text-shark-500 2xl:text-6xl 2xl:leading-72">
                        More than 10 years experience
                    </h2>
                    <p className="mt-5 text-lg font-normal leading-30 text-manatee-500 xl:mt-10">
                        At Collax we specialize in designing, building, shipping and scaling beautiful, usable products
                        with blazing-fast efficiency At Collax we specialize in designing, building, shipping and
                        scaling beautiful, usable products with blazing-fast efficiency
                    </p>
                    <button
                        className="min-[1037px]:px-14 group mt-5 cursor-pointer rounded-10 border border-abbey-500 border-opacity-20 px-6 sm:px-14 md:mt-14 lg:px-6"
                        id="about"
                        name="about"
                        type="button"
                    >
                        <div className="right-arrow-icon-animation relative flex items-center space-x-4 before:absolute before:bottom-0 before:-z-10 before:h-[3px] before:w-full before:bg-portage-500 before:content-['']">
                            <span className="text-lg font-bold leading-70">Talk With Expert</span>
                            <div>
                                <RightArrowIcon />
                            </div>
                        </div>
                    </button>
                </div>
            </div>
            <div className="min-[425px]:justify-items-start mt-5 grid grid-cols-2 items-center md:grid-cols-3 lg:grid-cols-4 xl:mt-130 xl:justify-items-center 2xl:grid-cols-5 2xl:space-x-25">
                <Image
                    src={PaySafeImage}
                    alt="payslip-image"
                    className="cursor-pointer object-cover py-5 sm:py-2.5"
                    width="109"
                    height="27"
                />
                <Image
                    src={QlikqImage}
                    alt="qlikq-image"
                    className="cursor-pointer object-cover py-5 sm:py-2.5"
                    width="92"
                    height="28"
                />
                <Image
                    src={SquareImage}
                    alt="square-image"
                    className="cursor-pointer object-cover py-5 sm:py-2.5"
                    width="125"
                    height="36"
                />
                <Image
                    src={WalmartImage}
                    alt="walmart-image"
                    className="cursor-pointer object-cover py-5 sm:py-2.5"
                    width="138"
                    height="39"
                />
                <Image
                    src={PaySafeImage}
                    alt="payslip-image"
                    className="cursor-pointer object-cover py-5 sm:py-2.5"
                    width="109"
                    height="27"
                />
            </div>
        </section>
    );
};

export default AboutUs;
