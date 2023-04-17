import React from "react";
import HandImage from "@/public/assets/images/hand-image.png";
import NewsImage from "@/public/assets/images/news-image.png";
import BannerImage from "@/public/assets/images/banner-image.png";
import PuzzleImage from "@/public/assets/images/puzzle-image.png";
import Image from "next/image";
import RightArrowIcon from "@/components/UI/RightArrowIcon";
import PlayIcon from "@/components/UI/PlayIcon";
import SocialShare from "./SocialShare";

const Banner = () => {
    return (
        <section className="flex flex-col font-DMSans">
            <div className="flex justify-between">
                <Image src={HandImage} alt="logo" width="214" height="161" className="object-cover" />
                <Image src={NewsImage} alt="logo" width="84" className="mt-7 h-[78px] object-cover sm:mr-10" />
            </div>
            <div className="px-5 sm:px-14 lg:px-6 xl:px-14 min-[1900px]:px-120">
                <div className="grid grid-cols-1 items-center space-y-2.5 lg:grid-cols-2 lg:space-y-0">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-shark-500 sm:text-10xl 2xl:text-15xl 2xl:leading-138">
                            Global...
                            <br /> Solution
                        </h1>
                        <p className="mt-5 text-xl font-normal leading-8">
                            More than 10 years experience in the finance industry
                        </p>
                        <div className="mt-5 flex flex-row items-center justify-center space-x-5 max-[380px]:flex-col max-[380px]:space-y-2.5 md:mt-10 lg:justify-normal">
                            <button
                                className="cursor-pointer rounded-10 border border-abbey-500 border-opacity-20 px-10"
                                id="about"
                                name="about"
                                type="button"
                            >
                                <div className="relative flex items-center space-x-4 before:absolute before:bottom-0 before:h-[3px] before:w-full before:bg-cornflower-lilac-500 before:content-['']">
                                    <span className="text-lg font-bold leading-70">About Collax</span>
                                    <div>
                                        <RightArrowIcon />
                                    </div>
                                </div>
                            </button>
                            <div className="relative">
                                <div className="play-button flex h-[70px] w-[70px] cursor-pointer items-center justify-center rounded-full border border-abbey-500 border-opacity-20 p-5 before:absolute before:top-px before:h-[69px] before:w-[69px] before:rounded-35 before:border-0.5 before:border-b-portage-500 before:border-l-transparent before:border-r-transparent before:border-t-transparent before:content-['']">
                                    <PlayIcon />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <Image
                            src={BannerImage}
                            alt="banner-image"
                            className="banner-image-animation relative object-cover md:w-full 2xl:w-full"
                            width="668"
                            height="586"
                        />
                        <Image
                            src={PuzzleImage}
                            alt="puzzle-image"
                            className="absolute -bottom-2.5 right-12 w-[120px] animate-bounce object-cover max-xs:w-[100px] xs:bottom-14 xs:right-16 min-[530px]:w-[189px] sm:bottom-12 sm:right-20 md:bottom-70 md:right-160 lg:bottom-4 lg:right-8.5 lg:w-[120px] xl:right-65 xl:w-[160px] 2xl:bottom-5 2xl:right-90 2xl:w-[189px] min-[2200px]:bottom-120 min-[2200px]:right-250"
                        />
                    </div>
                </div>
                <SocialShare />
            </div>
        </section>
    );
};

export default Banner;
