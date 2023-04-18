import React from "react";

const RightArrowIcon = (props: any) => {
    const { fill } = props;
    return (
        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M8.40625 0.33313C8.61719 0.14563 8.81641 0.14563 9.00391 0.33313L16.3516 7.71594C16.5625 7.90344 16.5625 8.09094 16.3516 8.27844L9.00391 15.6613C8.81641 15.8488 8.61719 15.8488 8.40625 15.6613L7.70312 14.9581C7.63281 14.8878 7.59766 14.7941 7.59766 14.6769C7.59766 14.5597 7.63281 14.4542 7.70312 14.3605L13.1523 8.91125H1.16406C0.882812 8.91125 0.742188 8.77063 0.742188 8.48938V7.505C0.742188 7.22375 0.882812 7.08313 1.16406 7.08313H13.1523L7.70312 1.63391C7.51562 1.42297 7.51562 1.22375 7.70312 1.03625L8.40625 0.33313Z"
                fill={`${fill ? fill : "#292930"}`}
            />
        </svg>
    );
};

export default RightArrowIcon;