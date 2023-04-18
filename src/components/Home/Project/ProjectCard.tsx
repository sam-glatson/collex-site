import React from "react";
import Image from "next/image";

const ProjectCard = (props: any) => {
    const { data } = props;
    // console.log(data);
    return (
        <div className="project-image relative z-0 overflow-x-clip">
            <Image
                src={data.image}
                alt="project-image"
                className="w-full cursor-pointer rounded-10 object-cover"
                width="633"
                height="395"
            />
            <div className="absolute bottom-0 z-30 hidden rounded-10 bg-white px-2.5 py-5 md:py-10 md:pl-9 md:pr-4">
                <h4 className="text-sm font-medium leading-10 text-gray-500">
                    SOLUTION <br /> <span className="text-2xl font-bold text-dark-blue-500">Platform integration</span>
                </h4>
            </div>
        </div>
    );
};

export default ProjectCard;
