"use client";
import { useEffect, useRef, useState } from "react";
import Client from "./components/Client";
import Hero from "./components/Hero";
import HeroSecond from "./components/HeroSecond";
import Solutions from "./components/SolutionsScroll";
import MainFooter from "./components/MainFooter";
import SolutionsSecondComp from "./components/SolutionsSecondComp";



export default function Home() {

  return (
    <>
      <Hero />
      <HeroSecond />
      <Solutions />
      <SolutionsSecondComp/>
      <Client />
      <MainFooter />
    </>
  );
}