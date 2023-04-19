import React from "react";
import CoupleImage from "@/public/assets/images/couple-image.png";
import ClothsImage from "@/public/assets/images/shirt-image.png";
import StudentsImage from "@/public/assets/images/students-image.png";
import Image from "next/image";
const Blog = () => {
    return (
        <section className="mt-10 px-4 py-5 font-DMSans md:mt-10 md:py-0 2xl:mt-120 2xl:px-14 4xl:px-120" id="blog">
            <div className="space-y-6 lg:space-y-12">
                <div className="flex flex-col items-center justify-center">
                    <h6 className="flex items-center text-lg font-medium leading-22 text-manatee-500 before:mr-2.5 before:h-3 before:w-3 before:rounded-full before:bg-cornflower-lilac-500 before:content-['']">
                        Blog & Article
                    </h6>
                    <h1 className="pt-5 text-3xl font-bold text-shark-500 2xl:text-6xl 2xl:leading-72">
                        Check blog post
                    </h1>
                </div>
                <div className="grid grid-cols-1 gap-7.5 sm:grid-cols-2 xl:grid-cols-3">
                    <div>
                        <div className="blog-image overflow-hidden rounded-xl">
                            <Image
                                src={CoupleImage}
                                alt="couple-image"
                                width="412"
                                height="315"
                                className="w-full cursor-pointer object-cover"
                            />
                        </div>

                        <div className="mt-7 flex space-x-4">
                            <div className="min-[375]:px-5 group cursor-pointer rounded-10 bg-[#5856e91a] px-2.5 hover:bg-blue-ribbon-550">
                                <p className="text-sm font-bold uppercase leading-35 text-blue-ribbon-500 group-hover:text-white">
                                    Development
                                </p>
                            </div>
                            <div className="min-[375]:px-5 rounded-10 bg-[#5856e91a] px-2.5">
                                <p className="text-sm font-bold uppercase leading-35 text-manatee-500">
                                    February. 3.2023
                                </p>
                            </div>
                        </div>
                        <p className="pt-5 text-2xl font-medium leading-8 tracking-tightest text-shark-500">
                            Show at the University of the Michigan Started.
                        </p>
                    </div>
                    <div>
                        <div className="blog-image overflow-hidden rounded-xl">
                            <Image
                                src={ClothsImage}
                                alt="cloths-image"
                                width="412"
                                height="315"
                                className="w-full cursor-pointer object-cover"
                            />
                        </div>
                        <div className="mt-7 flex space-x-4">
                            <div className="min-[375]:px-5 group cursor-pointer rounded-10 bg-[#5856e91a] px-2.5 hover:bg-blue-ribbon-550">
                                <p className="text-sm font-bold uppercase leading-35 text-blue-ribbon-500 group-hover:text-white">
                                    Development
                                </p>
                            </div>
                            <div className="min-[375]:px-5 rounded-10 bg-[#5856e91a] px-2.5">
                                <p className="text-sm font-bold uppercase leading-35 text-manatee-500">
                                    February. 3.2023
                                </p>
                            </div>
                        </div>
                        <p className="pt-5 text-2xl font-medium leading-8 tracking-tightest text-shark-500">
                            Hair Storting: Are You Ready for the Next Big Hair
                        </p>
                    </div>
                    <div>
                        <div className="blog-image overflow-hidden rounded-xl">
                            <Image
                                src={StudentsImage}
                                alt="students-image"
                                width="412"
                                height="315"
                                className="w-full cursor-pointer object-cover"
                            />
                        </div>

                        <div className="mt-7 flex space-x-4">
                            <div className="min-[375]:px-5 group cursor-pointer rounded-10 bg-[#5856e91a] px-2.5 hover:bg-blue-ribbon-550">
                                <p className="text-sm font-bold uppercase leading-35 text-blue-ribbon-500 group-hover:text-white">
                                    Development
                                </p>
                            </div>
                            <div className="min-[375]:px-5 rounded-10 bg-[#5856e91a] px-2.5">
                                <p className="text-sm font-bold uppercase leading-35 text-manatee-500">
                                    February. 3.2023
                                </p>
                            </div>
                        </div>
                        <p className="pt-5 text-2xl font-medium leading-8 tracking-tightest text-shark-500">
                            The Buzziest New Fashion Brands You Need to Know About
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;
