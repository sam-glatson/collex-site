import React from "react";
import Image from "next/image";
import LogoImage from "@/public/assets/images/logo-white.png.png";
import EnvelopeImage from "@/public/assets/images/envelop-image.png";
import Menus from "./Menus";
const Header = () => {
    return (
        <header className="fixed z-0 hidden h-full max-w-xs bg-shark-500 px-25 py-45 font-DMSans lg:block xl:pl-55 xl:pr-35">
            <div className="space-y-25">
                <Image src={LogoImage} alt="logo" className="h-[70px] w-[240px] object-cover" />
                <Menus />
                <div className="space-y-13">
                    <Image src={EnvelopeImage} alt="logo" width="50" height="26" className="object-cover" />
                    <p className="leading-64 text-12xl font-semibold text-white">infocollax.com</p>
                </div>
            </div>
        </header>
    );
};

export default Header;
