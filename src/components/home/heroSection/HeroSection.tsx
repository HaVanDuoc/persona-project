import Image from "next/image";
import React from "react";

import FRAME from "@/assets/hero/Frame 36827.png";
import NFT from "@/assets/hero/NFT.png";
import ButtonComponent from "@/components/common/ButtonComponent";

const HeroSection = () => {
  return (
    <section className="container py-20">
      <div className="w-[600px] h-auto m-auto relative">
        <Image
          src={FRAME.src}
          alt=""
          width={500}
          height={500}
          className="w-full h-auto"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Image src={NFT} alt="nft" width={392} height={392} />
        </div>
      </div>

      <div className="w-full text-center mt-10">
        <ButtonComponent>GET Persona NFT</ButtonComponent>
      </div>
    </section>
  );
};

export default HeroSection;
