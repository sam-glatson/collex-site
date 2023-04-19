import React from "react";
import ProjectCard from "./ProjectCard";
import RightArrowIcon from "@/components/UI/RightArrowIcon";

import Project1Image from "@/public/assets/images/project-1-image.png";
import Project2Image from "@/public/assets/images/project-2-image.png";
import Project3Image from "@/public/assets/images/project-3-image.png";
import Project4Image from "@/public/assets/images/project-4-image.png";
import Project5Image from "@/public/assets/images/project-5-image.png";

const Project = () => {
    const productCardData = [
        {
            name: "Project1Image",
            image: Project1Image,
        },
        {
            name: "Project1Image",
            image: Project2Image,
        },
        {
            name: "Project1Image",
            image: Project3Image,
        },
        {
            name: "Project1Image",
            image: Project4Image,
        },
        {
            name: "Project1Image",
            image: Project5Image,
        },
    ];
    return (
        <section
            className="px-4 py-5 font-DMSans sm:mt-10 sm:px-14 lg:px-6 xl:mt-120 2xl:px-14 min-[1900px]:px-120"
            id="contact"
        >
            <div className="min-[2000px]:grid-cols-3 grid grid-cols-1 gap-1.5 sm:grid-cols-2 md:items-center md:gap-7.5">
                <div className="mb-2.5 sm:mb-0">
                    <h6 className="flex items-center text-lg font-medium leading-22 text-manatee-500 before:mr-2.5 before:h-3 before:w-3 before:rounded-full before:bg-cornflower-lilac-500 before:content-['']">
                        Our Project
                    </h6>
                    <h1 className="pt-5 text-3xl font-bold text-shark-500 2xl:text-6xl 2xl:leading-72">
                        Our recent case studies
                    </h1>
                    <button
                        className="mt-4 cursor-pointer rounded-10 border border-abbey-500 border-opacity-20 bg-cornflower-lilac-500 px-5 2xl:px-10"
                        id="about"
                        name="about"
                        type="button"
                    >
                        <div className="right-arrow-icon-animation flex items-center space-x-4">
                            <span className="text-lg font-bold leading-10 lg:leading-70">All Case Studies</span>
                            <div>
                                <RightArrowIcon />
                            </div>
                        </div>
                    </button>
                </div>
                {productCardData.map((image, index: number) => (
                    <ProjectCard key={index} data={image} />
                ))}
            </div>
        </section>
    );
};

export default Project;
