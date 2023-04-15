import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderCard from "./SliderCard";
import Image from "next/image";
import CubeImage from "@/public/assets/images/slider-cube-image.png";
import EllipseImage from "@/public/assets/images/ellipse-image.png";

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
            <section className="relative mt-[120px] bg-shark-500 px-4 py-5 font-DMSans lg:px-[120px]">
                <Image
                    src={CubeImage}
                    alt="cube-image"
                    width="150"
                    height="97"
                    className="absolute -left-px -top-[80px] -z-[1] object-cover"
                />
                <div className="relative mx-auto max-w-4xl">
                    <Image
                        src={EllipseImage}
                        alt="cube-image"
                        width="178"
                        height="158"
                        className="absolute -top-11 left-0 object-cover xl:left-0 2xl:left-[60px]"
                    />

                    <Slider {...settings}>
                        {[0, 1, 2, 3, 4].map((data) => (
                            <SliderCard key={data} />
                        ))}
                    </Slider>
                </div>
                <Image
                    src={CubeImage}
                    alt="cube-image"
                    width="128"
                    height="84"
                    className="absolute -bottom-[15px] -right-px object-cover"
                />
            </section>
        );
    }
}
