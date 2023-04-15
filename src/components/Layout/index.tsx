import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Banner from "../Home/Banner";
import AboutUs from "../AboutUs";
import Services from "../Services";
import Specification from "../Home/Specification";
import Project from "../Home/Project";
import Blog from "../Home/Blog";
import Sliders from "../Home/Sliders";

const Layout = () => {
    return (
        <>
            <div className="flex">
                <Header />
            </div>
            <div className="lg:ml-[290px] xl:ml-[320px]">
                <Banner />
                <AboutUs />
                <Services />
                <Specification />
                <Project />
                <Sliders />
                <Blog />
                <Footer />
            </div>
        </>
    );
};

export default Layout;
