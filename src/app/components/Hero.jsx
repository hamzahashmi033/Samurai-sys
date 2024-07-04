import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="bg-Black max-w-[1728px] h-[2000px]">
      <Image src={"/Isolation_Mode.png"} width={100} height={100} />
      <h1 className="text-white">
        Turning Your Challenges
        <br /> Into Innovative Solutions
        <br /> Samurai Systems
      </h1>
      <p className="text-white">
        Samurai -Team of solution architects, developers and consultants having
        only one aim in mind “deliver the best, nothing else”
      </p>
      <button class="bg-Red text-white">Get a Quote</button>
      <button class="border border-Red text-white ">Our Services</button>
      <div>
        <p>2000+ Projects</p>
        <p>100+ Clients</p>
        <p>22+ Year of Experience</p>
        <p>2000+ Projects</p>
      </div>
    </div>
  );
};

export default Hero;
