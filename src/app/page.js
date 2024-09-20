"use client";
import { useEffect } from "react";
import Client from "./components/Client";
import Hero from "./components/Hero";
import HeroSecond from "./components/HeroSecond";
import Solutions from "./components/SolutionsScroll";
import MainFooter from "./components/MainFooter";
import SolutionsSecondComp from "./components/SolutionsSecondComp";
import "@/app/utils/page.css";
import gsap from "gsap";

export default function Home() {
  useEffect(() => {
    const { gsap } = require("gsap");
    const { ScrollTrigger, ScrollToPlugin } = require("gsap/all");
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    let panels = gsap.utils.toArray(".panel");
    let scrollTween;

    function goToSection(i) {
      scrollTween = gsap.to(window, {
        scrollTo: { y: i * innerHeight, autoKill: true },
        duration: 1.2,
        onComplete: () => (scrollTween = null),
        overwrite: "auto",
        immediateRender: false,
      });
    }

    panels.forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top bottom", // Change this to trigger in the middle of the viewport
        end: "bottom",
        onToggle: (self) => self.isActive && !scrollTween && goToSection(i),
        toggleActions: "play none none reverse",
        markers: true,
        scroller: "body"
      });
    });

    ScrollTrigger.create({
      start: 0,
      end: "max",
      snap: {
        snapTo: 1 / (panels.length - 1),
        duration: 1.2,
        ease: "power2.inOut",
        delay: 0.1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <div className="mainCont bg-red-500">
        <section className="panel first bg-red-500">
          <div id="page"></div>
        </section>
      </div>
      <div className="mainCont bg-pink-600">
        <section className="panel second bg-pink-600 border"></section>
      </div>
      <div className="mainCont bg-blue-600">
        <section className="panel third bg-blue-600"></section>
      </div>
      <div className="mainCont bg-yellow-500">
        <section className="panel fourth bg-yellow-500"></section>
      </div>
      <div className="mainCont bg-cyan-600">
        <section className="panel fifth bg-cyan-600"></section>
      </div>
      <div className="mainCont bg-gray-600">
        <section className="panel sixth bg-gray-600"></section>
      </div>
    </>
  );
}
