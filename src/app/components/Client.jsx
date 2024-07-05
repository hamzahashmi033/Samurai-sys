import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Image from "next/image";

import PartnerIcon from "./PartnerIcon";
import { PartnerImages } from "../utils/Client.constants";

export default function Client() {
  return (
    <div className="bg-Black overflow-x-hidden pb-8">
      <div className="2xl:max-w-[1728px] sm:w-[100vw] mx-auto bg-Black">
        <div className="2xl:max-w-[1526px] w-[85vw]   mx-auto">
          <div className="py-10 text-White xs:mb-4 mb-0">
            <h2 className="font-[300] xs:text-[36px] xl:text-[12px] sm:text-[45px] md:text[20px]   2xl:text-[48.66px] xs:text-center sm:text-end ">
              Excellence <br />
              <span className="font-[500] xs:text-[38px] sm:text-[30px]  2xl:text-[60px]  ">
                and Innovations
              </span>{" "}
              <br />{" "}
              <span className="font-[400] xs:text-[32px] sm:text-[42px] md:text-[36] 2xl:text-[60px] text-Red">
                Shaping Tomorrow
              </span>
            </h2>
          </div>
          <div className="xs:mb-4 sm:mb-12">
            <div className="text-White xs:justify-center sm:justify-start flex gap-2">
              <Image
                src={"/line4.svg"}
                width={100}
                height={100}
                className="2xl:w-[129px] xs:w-[20px] lg:w-[70px]"
              />
              <p className="2xl:text-[20px] text-center font-[300] xs:text-[12px]">
                Our Partners
              </p>
            </div>
            <div className="flex sm:justify-between xs:justify-center items-center ">
              <div className="">
                <h3 className="font-[400] 2xl:text-[40px] xs:text-center sm:text-start xs:text-[24px]  text-White">
                  <span className="text-Red ">Our</span> Stack Partners
                </h3>
                <p className="font-[500] 2xl:text-[40px] xs:text-center sm:text-start xs:text-[24px] text-White">
                  to grow your Business.
                </p>
              </div>
              <p className="text-White font-[300] hidden sm:block xs:text-[8px] xl:text-[12px] 2xl:text-[18px]">
                From small businesses to industry giants, we provide tailored
                solutions that fit your
                <br /> unique needs. Our expertise spans diverse sectors,
                ensuring personalized service and
                <br /> robust support. Trust us to help you grow and thrive in
                an ever-evolving market.
              </p>
            </div>
          </div>
          <div>
            <Box
              sx={{
                flexGrow: 1,
                marginTop: "20px",
                display: "flex",
                // backgroundColor: "#ba000d",
                justifyContent: "space-between",
                alignItems: "center",
                marginX: "auto",
              }}
            >
              <Grid
                container
                spacing={2}
                sx={{
                  // maxWidth: "80vw",
                  marginX: "auto",
                  // background: "#ffffff",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                {PartnerImages.map((img) => (
                  <Grid xs={6} sm={3} md={3}>
                    <PartnerIcon imgPath={img.path} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}
