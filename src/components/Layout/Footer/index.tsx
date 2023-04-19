import React from "react";
import Image from "next/image";
import NewsImage from "@/public/assets/images/news-image.png";
import RightArrowIcon from "@/components/UI/RightArrowIcon";
import FooterMenus from "./FooterMenus";
import CopyRights from "./CopyRights";

const Footer = () => {
    return (
        <footer className="mt-5 font-DMSans lg:mt-10 2xl:mt-120" id="#contact">
            <div className="flex flex-col items-center justify-between space-y-2.5 bg-blue-ribbon-550 px-4 py-5 sm:px-10 xl:flex-row 2xl:space-y-0 min-[1900px]:px-120">
                <div className="flex items-center">
                    <Image src={NewsImage} alt="news-image" width="84" height="78" className="object-cover" />
                    <h3 className="text-xl font-bold leading-50 text-white sm:text-3xl 2xl:text-16xl 2xl:tracking-tight">
                        Get Newsletter
                    </h3>
                </div>
                <div className="w-full xl:max-w-xl">
                    <div className="relative">
                        <input
                            type="email"
                            placeholder="Infocollax@gmail.com"
                            id="newsletter-email"
                            name="email"
                            className="w-full rounded-5 px-2.5 py-3.5 text-shark-500 outline-none placeholder:text-shark-500 sm:px-7.5 sm:py-7"
                        />
                        <button
                            className="absolute right-1 top-1 cursor-pointer rounded-10 border border-abbey-500 border-opacity-20 bg-cornflower-lilac-500 px-1 sm:right-2.5 sm:top-2.5 sm:px-5 2xl:px-5"
                            id="about"
                            name="about"
                            type="button"
                        >
                            <div className="right-arrow-icon-animation flex items-center space-x-1 sm:space-x-4">
                                <span className="font-bold leading-10 sm:text-lg sm:leading-58">Subscribe</span>
                                <div>
                                    <RightArrowIcon />
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <div className="bg-shark-500 px-4 sm:px-10 2xl:px-60">
                <FooterMenus />
                <CopyRights />
            </div>
        </footer>
    );
};

export default Footer;
