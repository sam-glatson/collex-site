import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Banner from "../Home/Banner";
import AboutUs from "../AboutUs";
import Services from "../Services";

const Layout = () => {
    return (
        <>
            <div className="flex">
                <Header />
            </div>
            <div className="lg:ml-[290px] xl:ml-[320px]">
                <Banner />
                <Footer />
                <AboutUs />
                <Services />
            </div>
        </>
    );
};

export default Layout;
