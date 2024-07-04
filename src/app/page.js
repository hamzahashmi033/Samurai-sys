"use client";
import { useEffect, useRef, useState } from "react";
import Client from "./components/Client";
import Hero from "./components/Hero";
import HeroSecond from "./components/HeroSecond";

import { motion, AnimatePresence } from 'framer-motion';
import Solutions from "./components/SolutionsScroll";
import MainFooter from "./components/MainFooter";

const components = [Hero, HeroSecond, Solutions, Client, MainFooter];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const refs = useRef([]);

  const handleScroll = () => {
    for (let i = 0; i < refs.current.length; i++) {
      const ref = refs.current[i];
      if (ref && ref.getBoundingClientRect().top < window.innerHeight / 2) {
        setCurrentIndex(i);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div style={{
        backgroundColor: 'black', height: '100vh',
      }}>
        <AnimatePresence>
          {components.map((Component, index) => (
            <motion.div
              key={index}
              ref={(el) => (refs.current[index] = el)}
              initial={{ opacity: 0 }}

              animate={{ opacity: currentIndex === index ? 1 : 0 }}
              exit={{ opacity: 0.4 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <Component />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>
  );
}