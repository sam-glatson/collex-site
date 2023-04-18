import React from "react";
import Banner from "@/components/Home/Banner";
import AboutUs from "@/components/Home/AboutUs";
import Services from "@/components/Home/Services";
import Specification from "@/components/Home/Specification";
import Project from "@/components/Home/Project";
import Blog from "@/components/Home//Blog";
import Sliders from "@/components/Home/Sliders";
import { motion, useScroll } from "framer-motion";

const Home = () => {
    return (
        <>
            <Banner />
            <AboutUs />
            <Services />
            <Specification />
            <Project />
            <Sliders />
            <Blog />
        </>
    );
};

export default Home;
