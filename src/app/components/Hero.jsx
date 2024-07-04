import Image from "next/image";
import React from "react";
import HeroIcon from "./HeroIcon";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import HeroSecondIcons from "./HeroSecondIcons";
import Nav from "./Nav";

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
const Hero = () => {
  return (
    <div className="bg-Black">
      <Nav />
      <div className="max-w-[1728px] xs:w-[100vw] relative mx-auto ">
        <div className="2xl:max-w-[1526px] w-[85vw] lg:pt-32 xs:pt-20 2xl:pt-28 mx-auto">
          <Grid container spacing={2}>
            <Grid xs={12} sx={{ marginBottom: "16px" }}>
              <h1 className="text-white mb-12">
                <span className="2xl:text-[30px] xs:text-[18px] xl:text-[24px] font-[300]">
                  Turning Your Challenges
                </span>
                <br />
                <span className="text-Red font-[400] xs:text-[26px] xl:text-[48px] 2xl:text-[67px]">
                  Into Innovative
                </span>{" "}
                <span className="text-White font-[400] xs:text-[26px] xl:text-[48px] 2xl:text-[67px]">
                  Solutions
                </span>
                <br />{" "}
                <span className="text-White font-[500] xs:text-[32px] xl:text-[48px] 2xl:text-[67px]">
                  Samurai Systems
                </span>
                <Image
                  src={"/lines.svg"}
                  width={500}
                  height={100}
                  className="2xl:w-[500px] xs:w-[250px] xl:w-[400px]"
                />
              </h1>
              <p className="text-White mb-2 font-[300] xs:text-[14px] lg:text-[18px] 2xl:text-[24px]">
                Samurai -Team of solution architects, developers and consultants
                having only one aim in mind
                <br />
                <span className="text-White font-[500] xs:text-[14px] lg:text-[18px] 2xl:text-[24px]">
                  “deliver the best, nothing else”
                </span>
              </p>
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid xs={6} sm={2}>
              <button className="bg-Red text-white xs:px-[16px] xs:py-[2px] xl:px-[32px] xl:py-[6px] 2xl:py-[10px] 2xl:px-[41px]">
                Get a Quote
              </button>
            </Grid>
            <Grid xs={6} sm={2}>
              <button className="border border-Red xl:px-[32px] xs:px-[16px] xs:py-[2px] xl:py-[6px] 2xl:py-[10px] 2xl:px-[41px] text-white">
                Our Services
              </button>
            </Grid>
          </Grid>

          <div
            style={{
              border: "1px solid transparent",
              borderImageSource:
                "linear-gradient(271.18deg, rgba(58, 58, 58, 0) -4.85%, #3a3a3a 147.42%)",
              borderImageSlice: "1",
            }}
            className="text-white px-[16px] py-[30px] mt-20"
          >
            <Grid container spacing={2}>
              <Grid xs={6} sm={3} sx={{ paddingX: "8px", paddingY: "10px" }}>
                <p className="font-[300]">
                  <span className="text-Red font-[600]">2000+</span>
                  <br />
                  Projects
                </p>
              </Grid>
              <Grid xs={6} sm={3} sx={{ paddingX: "8px", paddingY: "10px" }}>
                <p className="font-[300]">
                  <span className="text-Red font-[600]">100+</span>
                  <br />
                  Clients
                </p>
              </Grid>
              <Grid xs={6} sm={3} sx={{ paddingX: "8px", paddingY: "10px" }}>
                <p className="font-[300]">
                  <span className="text-Red font-[600]">22+ Year</span>
                  <br />
                  of Experience
                </p>
              </Grid>
              <Grid xs={6} sm={3} sx={{ paddingX: "8px", paddingY: "10px" }}>
                <p className="font-[300]">
                  <span className="text-Red font-[600]">2000+</span>
                  <br />
                  Projects
                </p>
              </Grid>
            </Grid>
          </div>

          <div className="absolute top-0 right-0">
            <Image src={"/Isolation_Mode.png"} width={800} height={100} />
          </div>
        </div>
        <div
          style={{
            background:
              "linear-gradient(180deg, rgba(24, 24, 21, 0.25) 0%, rgba(24, 24, 21, 0.25) 100%)",
          }}
          className="2xl:max-w-[1526px] w-[85vw] mt-24 border border-[#3A3A3A] rounded-2xl h-auto xs:py-[28px] xs:px-[10px] sm:px-[20px]   lg:py-[78px] lg:px-[68px] mx-auto"
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

            <p className="2xl:text-[16px]  lg:text-[14px] hidden lg:block mt-4 text-left">
              We not only deliver high quality enterprise solutions but also
              provide
              <br /> seamless integration with back office system and mobile
              interface
              <br /> as a single stack.
            </p>
          </div>
          <div className="flex xs:flex-col   sm:flex-row  lg:mt-10 justify-between xs:ml-20 lg:ml-10 py-10 px-6  ">
            {Icons.map((icon) => (
              <div className="relative mt-20 md:w-[20%] mx-auto ">
                <p className="text-[#252525] top-[-53px] left-[-80px] text-[86px] font-[800] absolute z-10">
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
    </div>
  );
};

export default Hero;
