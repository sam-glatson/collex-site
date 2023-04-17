import React from "react";
import ProjectCard from "./ProjectCard";
import RightArrowIcon from "@/components/UI/RightArrowIcon";

const Project = () => {
    return (
        <section className="px-4 py-5 font-DMSans sm:mt-10 sm:px-14 lg:px-6 xl:mt-120 2xl:px-14 min-[1900px]:px-120">
            <div className="min-[2000px]:grid-cols-3 grid grid-cols-1 gap-1.5 sm:grid-cols-2 md:items-center md:justify-items-center md:gap-7.5 lg:justify-items-start">
                <div>
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
                        <div className="flex items-center space-x-4">
                            <span className="text-lg font-bold leading-10 lg:leading-70">All Case Studies</span>
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
