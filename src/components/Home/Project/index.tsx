import React from "react";
import Project1Image from "@/public/assets/images/project-1-image.png";
import Project2Image from "@/public/assets/images/project-2-image.png";
import Project3Image from "@/public/assets/images/project-3-image.png";
import Project4Image from "@/public/assets/images/project-4-image.png";
import Project5Image from "@/public/assets/images/project-5-image.png";
import Image from "next/image";
import ProjectCard from "./ProjectCard";
import RightArrowIcon from "@/components/UI/RightArrowIcon";
const Project = () => {
    return (
        <section className="mt-4 px-4 py-5 font-DMSans sm:mt-10 sm:px-[56px] lg:mt-[120px] lg:px-6 2xl:px-[56px] min-[1900px]:px-[120px]">
            <div className="grid grid-cols-1 items-center justify-items-center gap-[30px] sm:grid-cols-2 lg:justify-items-start  min-[2000px]:grid-cols-3">
                <div>
                    <h6 className="flex items-center text-lg font-medium leading-[22px] text-manatee-500 before:mr-2.5 before:h-3 before:w-3 before:rounded-full before:bg-cornflower-lilac-500 before:content-['']">
                        Our Project
                    </h6>
                    <h1 className="pt-5 text-3xl font-bold text-shark-500 2xl:text-6xl 2xl:leading-[72px]">
                        Our recent case studies
                    </h1>
                    <button
                        className="mt-4 cursor-pointer rounded-[10px] border border-abbey-500 border-opacity-20 bg-cornflower-lilac-500 px-5 2xl:px-10"
                        id="about"
                        name="about"
                        type="button"
                    >
                        <div className="flex items-center space-x-4 ">
                            <span className="text-lg font-bold leading-[70px]">All Case Studies</span>
                            <div>
                                <RightArrowIcon />
                            </div>
                        </div>
                    </button>
                </div>
                {[0, 1, 2, 3, 4].map((data) => (
                    <ProjectCard key={data} data={data} />
                ))}
            </div>
        </section>
    );
};

export default Project;
