import Image from "next/image";
import React from "react";
import HeroIcon from "./HeroIcon";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import HeroSecondIcons from "./HeroSecondIcons";
const Img = [
    { path: "/Hassana.svg" },
    { path: "/Stc.svg" },
    { path: "/Saudi.svg" },
    { path: "/Bussma.svg" },
    { path: "/Edarat.svg" },
];

const Icons = [
    {
        id: 1,
        Num: "01",
        Title: "Cybersecurity Expertise at Your Fingertips",
        Description:
            "Gain access to experts with extensive experience leading cybersecurity programs for global enterprises.",
    },
    {
        id: 2,
        Num: "02",
        Title: "End-to-end Cyber Risk Management",
        Description:
            "Count on one trusted source for a comprehensive range of cybersecurity consulting and managed services.",
    },
    {
        id: 3,
        Num: "03",
        Title: "Security Investment Optimization",
        Description:
            "Utilize a shared model to access enterprise-level cybersecurity capabilities at a reasonable cost.",
    },
];
const HeroSecond = () => {
    return (
        <div className="bg-black  max-h-[100vh]  overflow-y-hidden overflow-x-hidden">

            <div
                style={{
                    background:
                        "linear-gradient(180deg, rgba(24, 24, 21, 0.25) 0%, rgba(24, 24, 21, 0.25) 100%)",
                }}
                className="2xl:max-w-[1526px] w-[85vw] border border-[#3A3A3A] rounded-2xl h-auto xs:py-[0px] xs:px-[10px] sm:px-[20px] lg:py-[36px] lg:px-[68px] mx-auto"
            >
                <div className="flex gap-4 xs:justify-center lg:justify-start items-center">
                    <Image
                        src={"/Line4.svg"}
                        width={129}
                        height={100}
                        className="xl:w-[100px] xs:w-[40px] 2xl:w-[129px]"
                    />
                    <p className="2xl:text-[20px] xs:text-[10px] xl:text-[16px] font-[300] text-White leading-[19px]">
                        WHAT SETS US APART?
                    </p>
                </div>
                <div className="text-White flex xs:flex-col sm:flex-row lg:justify-between xs:items-center lg:items-start xs:justify-center ">
                    <div>
                        {" "}
                        <h2 className="2xl:text-[40px] xl:text-[32px] xs:text-[24px] sm:text-[28px] font-[400] 2xl:leading-[44px] 2xl:mt-[31px] xs:text-center sm:text-left">
                            <span className="text-Red">Bridging The Gap</span> Between
                        </h2>
                        <p className="2xl:text-[40px] xl:text-[32px] xs:text-[24px] sm:text-[28px] text-center 2xl:leading-[44px] font-[500] mt-[6px] lg:text-left">
                            you and your audience
                        </p>
                    </div>

                    <p className="2xl:text-[16px]  lg:text-[14px] hidden lg:block text-left">
                        We not only deliver high quality enterprise solutions but also
                        provide
                        <br /> seamless integration with back office system and mobile
                        interface
                        <br /> as a single stack.
                    </p>
                </div>
                <div className="flex xs:flex-col   sm:flex-row  lg:mt-4 sm:justify-between xs:ml-20 lg:ml-10 xs:py-0 sm:py-6 px-6  ">
                    {Icons.map((icon) => (
                        <div className="relative mt-20 md:w-[20%] mx-auto ">
                            <p className="text-[#252525] top-[-53px] left-[-80px] xs:text-[48px] 2xl:text-[86px] font-[800] absolute z-10">
                                {icon.Num}
                            </p>
                            <p className="text-white  z-50 font-[600] xs:text-[12px] text-[16px] relative">
                                {icon.Title}
                            </p>
                            <p className="text-White  text-[14px] font-[300] hidden lg:block mt-10">
                                {" "}
                                {icon.Description}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="gap-4 w-full flex flex-wrap sm:flex-nowrap justify-center">
                    {Img.map((img, index) => (
                        <div
                            key={index}
                            style={{}}
                            className="bg-[#1D1D1D]  h-[84px] flex justify-center w-[45%] sm:w-full   items-center   rounded-lg  "
                        >
                            <Image
                                src={img.path}
                                width={110}
                                height={20}
                                className="object-contain  "
                                alt="description"
                            />
                        </div>
                    ))}
                </div>
                <div className="text-White xs:mt-4 sm:mt-10 xs:text-[14px] font-[400] text-center">
                    <p>
                        2.6k Companies & Individuals{" "}
                        <span className="font-[600]">Trusted Us</span>
                    </p>
                </div>
            </div>
        </div>
    )
}
export default HeroSecond