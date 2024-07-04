import Image from "next/image";
import React from "react";

const HeroIcon = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, rgba(24, 24, 21, 0.75) 0%, rgba(24, 24, 21, 0.25) 100%)",
      }}
      className=""
    >
      <Image src={"/Rectangle1.svg"} width={234} height={84} />
    </div>
  );
};

export default HeroIcon;
