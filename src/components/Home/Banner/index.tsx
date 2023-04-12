import React from "react";
import HandImage from "@/public/assets/images/hand-image.png";
import NewsImage from "@/public/assets/images/news-image.png";
import Image from "next/image";

const Banner = () => {
    return (
        <section className="flex flex-col">
            <div className="flex w-full justify-between">
                <Image src={HandImage} alt="logo" width="214" height="161" className="object-cover" />
                <Image src={NewsImage} alt="logo" width="84" className="mr-10 mt-7 h-[78px] object-cover" />
            </div>
            <div></div>
        </section>
    );
};

export default Banner;
