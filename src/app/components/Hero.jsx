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
    <div className="bg-Black pb-12 overflow-x-hidden">
      <Nav />
      <div className="max-w-[1728px] relative overflow-x-hidden max-h-[95vh] overflow-y-hidden  xs:w-[100vw]  mx-auto ">
        <div className="2xl:max-w-[1526px]  w-[85vw] xs:mt-4 sm:mt-8  mx-auto">
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
              <div className="absolute top-0 right-0">
                <Image
                  src={"/Isolation_Mode.png"}
                  width={800}
                  height={100}
                  className="2xl:max-w-[500px] lg:max-w-[450px] xs:max-w-[300px]"
                />
              </div>
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid
              xs={6}
              sm={2}
              sx={{ marginBottom: { xs:"1rem", sm: "2rem" } }}
            >
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
            className="text-white 2xl:px-[16px] xs:text-[12px]  sm:text-[16px]  mt-0 "
          >
            <Grid container spacing={2}>
              <Grid xs={3} sm={3}>
                <p className="font-[300]">
                  <span className="text-Red font-[600]">2000+</span>
                  <br />
                  Projects
                </p>
              </Grid>
              <Grid xs={3} sm={3}>
                <p className="font-[300]">
                  <span className="text-Red font-[600]">100+</span>
                  <br />
                  Clients
                </p>
              </Grid>
              <Grid xs={3} sm={3}>
                <p className="font-[300]">
                  <span className="text-Red font-[600]">22+ Year</span>
                  <br />
                  of Experience
                </p>
              </Grid>
              <Grid xs={3} sm={3}>
                <p className="font-[300]">
                  <span className="text-Red font-[600]">2000+</span>
                  <br />
                  Projects
                </p>
              </Grid>
            </Grid>
          </div>
       
        </div>
      </div>
    </div>
  );
};

export default Hero;