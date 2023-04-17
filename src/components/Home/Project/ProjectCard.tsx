import React from "react";
import Project1Image from "@/public/assets/images/project-1-image.png";
import Project2Image from "@/public/assets/images/project-2-image.png";
import Project3Image from "@/public/assets/images/project-3-image.png";
import Project4Image from "@/public/assets/images/project-4-image.png";
import Project5Image from "@/public/assets/images/project-5-image.png";
import Image from "next/image";

const ProjectCard = (props: any) => {
    return (
        <div className="project-image relative z-0">
            <Image src={Project1Image} alt="project-image" className="cursor-pointer rounded-10 object-cover" />
            <div className="absolute bottom-0 z-30  hidden bg-white px-2.5 py-5 md:py-10 md:pl-9 md:pr-4">
                <h4 className="text-sm font-medium leading-10 text-gray-500">
                    SOLUTION <br /> <span className="text-2xl font-bold text-dark-blue-500">Platform integration</span>
                </h4>
            </div>
        </div>
    );
};

export default ProjectCard;
