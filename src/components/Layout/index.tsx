import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Banner from "../Home/Banner";

const Layout = () => {
    return (
        <>
            <div className="flex">
                <Header />
                <div className="w-full sm:ml-[290px] lg:ml-[320px]">
                    <Banner />
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default Layout;
