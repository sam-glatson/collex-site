import BehanceIcon from "@/components/UI/BehanceIcon";
import FacebookIcon from "@/components/UI/FacebookIcon";
import ScrollDownIcon from "@/components/UI/ScrollDownIcon";
import TwitterIcon from "@/components/UI/TwitterIcon";
import Youtube from "@/components/UI/YoutubeIcon";
import React from "react";

const SocialShare = () => {
    return (
        <div className="mt-5 flex flex-col items-center justify-between space-y-5 font-DMSans sm:mt-10 lg:mt-[120px] lg:flex-row lg:space-y-0">
            <ul className="social-shares flex flex-col space-y-2.5 sm:flex-row sm:space-x-10 sm:space-x-4 sm:space-y-0">
                <li>
                    <span>
                        <FacebookIcon />
                    </span>
                    <p>FACEBOOK</p>
                </li>
                <li>
                    <span>
                        <Youtube />
                    </span>
                    <p>YOUTUBE</p>
                </li>
                <li>
                    <span>
                        <TwitterIcon />
                    </span>
                    <p>TWITTER</p>
                </li>
                <li>
                    <span>
                        <BehanceIcon />
                    </span>
                    <p>BEHANCE</p>
                </li>
            </ul>
            <div className="flex space-x-3.5">
                <span className="animate-bounce">
                    <ScrollDownIcon />
                </span>
                <p>SCROLL DOWN</p>
            </div>
        </div>
    );
};

export default SocialShare;
