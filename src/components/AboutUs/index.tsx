import React from "react";
import PuzzleImage from "@/public/assets/images/puzzle-image.png";
import ManImage from "@/public/assets/images/about-image.png";
import PaySafeImage from "@/public/assets/images/paysafe-image.png";
import QlikqImage from "@/public/assets/images/qlikq-image.png";
import SquareImage from "@/public/assets/images/square-image.png";
import WalmartImage from "@/public/assets/images/walmart-image.png";
import Image from "next/image";
import RightArrowIcon from "../UI/RightArrowIcon";
const AboutUs = () => {
    return (
        <section className="mt-7 px-5 font-DMSans sm:mt-10 sm:px-[56px] lg:mt-[130px] min-[2000px]:px-[140px]">
            <div className="grid grid-cols-1 items-center space-y-5 lg:grid-cols-2 lg:space-y-0">
                <div className="relative">
                    <Image
                        src={PuzzleImage}
                        alt="puzzle-image"
                        className="absolute  bottom-0 z-[1] animate-bounce object-cover max-[400px]:w-[90px]"
                        width="148"
                        height="148"
                    />
                    <Image src={ManImage} alt="man-image" className="banner-image-animation relative object-cover" />
                </div>
                <div className="pl-7">
                    <h6 className="flex items-center text-lg font-medium leading-[22px] text-manatee-500 before:mr-2.5 before:h-3 before:w-3 before:rounded-full before:bg-cornflower-lilac-500 before:content-['']">
                        About Company
                    </h6>
                    <h2 className="mt-3 text-3xl font-bold text-shark-500 2xl:text-6xl 2xl:leading-[72px]">
                        More than 10 years experience
                    </h2>
                    <p className="mt-10 text-lg font-normal leading-[30px] text-manatee-500">
                        At Collax we specialize in designing, building, shipping and scaling beautiful, usable products
                        with blazing-fast efficiency At Collax we specialize in designing, building, shipping and
                        scaling beautiful, usable products with blazing-fast efficiency
                    </p>
                    <button
                        className="mt-14 cursor-pointer rounded-[10px] border border-abbey-500 border-opacity-20 px-6 sm:px-14 min-[1024px]:px-6 min-[1037px]:px-14"
                        id="about"
                        name="about"
                        type="button"
                    >
                        <div className="relative flex items-center space-x-4 before:absolute before:bottom-0 before:h-[3px] before:w-full before:bg-portage-500 before:content-['']">
                            <span className="text-lg font-bold leading-[70px]">Talk With Expert</span>
                            <div>
                                <RightArrowIcon />
                            </div>
                        </div>
                    </button>
                </div>
            </div>
            <div className="mt-5 grid grid-cols-1 items-center justify-items-center min-[425px]:grid-cols-2 min-[425px]:justify-items-start md:grid-cols-3 lg:mt-[130px] lg:grid-cols-4 2xl:grid-cols-5 2xl:space-x-[100px]">
                <Image src={PaySafeImage} alt="payslip-image" className="object-cover py-2.5" width="109" height="27" />
                <Image src={QlikqImage} alt="qlikq-image" className="object-cover py-2.5" width="92" height="28" />
                <Image src={SquareImage} alt="square-image" className="object-cover py-2.5" width="125" height="36" />
                <Image src={WalmartImage} alt="walmart-image" className="object-cover py-2.5" width="138" height="39" />
                <Image src={PaySafeImage} alt="payslip-image" className="object-cover py-2.5" width="109" height="27" />
            </div>
        </section>
    );
};

export default AboutUs;
