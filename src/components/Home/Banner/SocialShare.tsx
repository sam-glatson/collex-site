import BehanceIcon from "@/components/UI/BehanceIcon";
import FacebookIcon from "@/components/UI/FacebookIcon";
import ScrollDownIcon from "@/components/UI/ScrollDownIcon";
import TwitterIcon from "@/components/UI/TwitterIcon";
import Youtube from "@/components/UI/YoutubeIcon";
import React from "react";

const SocialShare = () => {
    return (
        <div className="mt-5 flex flex-col items-center justify-between space-y-5 font-DMSans sm:mt-10 lg:mt-120 lg:flex-row lg:space-y-0">
            <ul className="social-shares grid grid-cols-2 gap-5 sm:grid-cols-4">
                <li>
                    <div>
                        <FacebookIcon />
                    </div>
                    <p>FACEBOOK</p>
                </li>
                <li>
                    <div>
                        <Youtube />
                    </div>
                    <p>YOUTUBE</p>
                </li>
                <li>
                    <div>
                        <TwitterIcon />
                    </div>
                    <p>TWITTER</p>
                </li>
                <li>
                    <div>
                        <BehanceIcon />
                    </div>
                    <p>BEHANCE</p>
                </li>
            </ul>
            <div className="flex space-x-3.5">
                <div className="animate-bounce">
                    <ScrollDownIcon />
                </div>
                <p>SCROLL DOWN</p>
            </div>
        </div>
    );
};

export default SocialShare;
