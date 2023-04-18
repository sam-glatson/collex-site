import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderCard from "./SliderCard";
import Image from "next/image";
import CubeImage from "@/public/assets/images/slider-cube-image.png";
import EllipseImage from "@/public/assets/images/ellipse-image.png";
import PuzzleImage from "@/public/assets/images/puzzle-image.png";
import NewsImage from "@/public/assets/images/news-image.png";

export default class Responsive extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true,
                    },
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ],
        };
        return (
            <section className="relative mt-12 bg-shark-500 px-4 py-10 font-DMSans md:mt-120 lg:px-120">
                <Image
                    src={CubeImage}
                    alt="cube-image"
                    width="150"
                    height="97"
                    className="absolute -left-px -top-80 -z-1 object-cover"
                />
                <div className="project-image-card relative mx-auto max-w-[80rem]">
                    <Image
                        src={EllipseImage}
                        alt="cube-image"
                        width="178"
                        height="158"
                        className="absolute -top-11 left-0 object-cover"
                    />

                    <Slider {...settings}>
                        {[0, 1, 2, 3, 4].map((data) => (
                            <SliderCard key={data} />
                        ))}
                    </Slider>
                    <div className="absolute right-5 top-7.5 flex animate-bounce justify-end">
                        <Image src={PuzzleImage} alt="puzzle-image" width="77" className="h-[77px] object-cover" />
                    </div>
                    <div className="news-image absolute bottom-4 left-4 sm:bottom-8">
                        <Image src={NewsImage} alt="logo" width="82" height="89" className="object-cover" />
                    </div>
                </div>
                <Image
                    src={CubeImage}
                    alt="cube-image"
                    width="128"
                    height="84"
                    className="absolute -bottom-15 right-0 object-cover"
                />
            </section>
        );
    }
}
