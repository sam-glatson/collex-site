import React from "react";
import PuzzleImage from "@/public/assets/images/puzzle-image.png";
import ChooseImage from "@/public/assets/images/choose-image.png";
import Image from "next/image";

const Specification = () => {
    return (
        <section className="px-4 py-5 font-DMSans sm:px-14 lg:px-6 2xl:px-14 min-[1900px]:px-120" id="case-studies">
            <div className="my-5 grid grid-cols-1 items-center justify-items-center space-y-5 overflow-x-clip md:my-10 lg:grid-cols-2 lg:justify-items-start lg:space-y-0">
                <div className="left-right-animation">
                    <Image
                        alt="puzzle-image"
                        src={PuzzleImage}
                        className="absolute animate-bounce object-cover"
                        width="94"
                        height="94"
                    />
                    <Image alt="choose-image" src={ChooseImage} className="relative -z-10 object-cover" />
                </div>
                <div className="right-left-animation sm:pl-5">
                    <h6 className="flex items-center text-lg font-medium leading-22 text-manatee-500 before:mr-2.5 before:h-3 before:w-3 before:rounded-full before:bg-cornflower-lilac-500 before:content-['']">
                        Why Choose us
                    </h6>
                    <h1 className="pt-5 text-3xl font-bold text-shark-500 2xl:text-6xl 2xl:leading-72">
                        Does more then ever platform to achieve goal stages...
                    </h1>
                    <p className="pt-4 text-lg leading-30 text-manatee-500 sm:pt-10">
                        At Collax we specialize in designing, building, shipping and scaling beautiful, usable products
                        with blazing-fast efficiency At Collax we specialize in designing, building, shipping and
                        scaling beautiful, usable products with blazing-fast efficiency
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Specification;
