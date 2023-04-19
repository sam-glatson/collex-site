import React from "react";
import StarIcon from "@/components/UI/StarIcon";

const SliderCard = () => {
    return (
        <div className="text-center text-white">
            <h3 className="text-lg leading-22">Aleutian Detrains</h3>
            <div className="flex items-center justify-center space-x-0.9">
                <h6 className="text-xs leading-26 text-manatee-500">CEO of (Orin)</h6>
                <span className="flex space-x-0.9">
                    {[0, 1, 2, 3, 4].map((data) => (
                        <StarIcon key={data} />
                    ))}
                </span>
            </div>
            <p className="my-4 text-lg leading-7 tracking-tightest sm:text-2xl sm:leading-45">
                “Our office is something we are pleased with. We consider it the little magnet; it is wanting to come
                here and afterward difficult to leave it. Our office is additionally a big name.”
            </p>
        </div>
    );
};

export default SliderCard;
