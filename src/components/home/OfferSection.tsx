import React from "react";
import BoxLayoutSection from "@/components/common/BoxLayoutSection";
import ImageComponent from "@/components/common/ImageComponent";

import NFT from "@/assets/home/hcfbdg 1.png";
import FRAME from "@/assets/home/Component 60.svg";
import GlowingEffect from "@/components/common/GlowingEffect";
import AnimationFadeUpComponent from "@/components/common/AnimationFadeUpComponent";

const OfferSection = () => {
  return (
    <AnimationFadeUpComponent>
      <BoxLayoutSection padding>
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <div className="relative w-full">
            <ImageComponent img={NFT} alt="nft" className="lg:min-w-[400px]" />
            <GlowingEffect />
          </div>
          <div className="relative">
            <ImageComponent
              img={FRAME}
              alt="frame"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[470px]"
            />
            <p className="text-sm sm:text-lg md:text-xl p-5 sm:p-20 overflow-hidden">
              We will also offer a Persona UI for holders to view, and manage
              your Project Persona NFTs. The Persona UI will be a fun and simple
              way for you to interact with your Project Persona NFT.
            </p>
          </div>
        </div>
      </BoxLayoutSection>
    </AnimationFadeUpComponent>
  );
};

export default OfferSection;
