import React from "react";

const FooterMenus = () => {
    return (
        <ul className="footer-menus flex flex-col space-y-2.5 border-b border-b-concord-500 border-opacity-50 px-10 py-4 text-center text-white sm:flex-row sm:justify-between sm:space-y-0 sm:py-8">
            <li>Home</li>
            <li>Portfolio</li>
            <li>Blog</li>
            <li>Pages</li>
            <li>Contact us</li>
        </ul>
    );
};

export default FooterMenus;
