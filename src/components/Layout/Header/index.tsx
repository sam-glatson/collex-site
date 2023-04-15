import React from "react";
import Image from "next/image";
import LogoImage from "@/public/assets/images/logo-white.png.png";
import EnvelopeImage from "@/public/assets/images/envelop-image.png";
import Menus from "./Menus";
const Header = () => {
    return (
        <header className="fixed z-0 hidden h-[1080px] max-w-xs bg-shark-500 py-[45px] pl-[25px] pr-[25px] font-DMSans lg:block xl:pl-[55px] xl:pr-[35px]">
            <div className="space-y-[100px]">
                <Image src={LogoImage} alt="logo" className="h-[70px] w-[240px] object-cover" />
                <Menus />
                <div className="space-y-[13px]">
                    <Image src={EnvelopeImage} alt="logo" width="50" height="26" className="object-cover " />
                    <p className="text-10xl font-semibold leading-64 text-white">infocollax.com</p>
                </div>
            </div>
        </header>
    );
};

export default Header;
