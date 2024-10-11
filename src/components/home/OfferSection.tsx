import React from "react";
import BoxLayoutSection from "@/components/common/BoxLayoutSection";
import NFT from "@/assets/home/hcfbdg 1.png";
import FRAME from "@/assets/frame/Component 60.png";
import GlowingEffect from "@/components/common/GlowingEffect";
import AnimationFadeUpComponent from "@/components/common/AnimationFadeUpComponent";
import PersonaComponent from "@/components/common/PersonaComponent";
import FrameContainer from "@/components/common/FrameContainer";

const OfferSection = () => {
  return (
    <AnimationFadeUpComponent>
      <BoxLayoutSection padding>
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <div className="relative w-full">
            <PersonaComponent src={NFT} className="lg:min-w-[400px]" />
            <GlowingEffect />
          </div>

          <FrameContainer
            frame={FRAME}
            overflow
            className="py-10 sm:px-10"
          >
            <p className="text-sm sm:text-lg md:text-xl sm:w-[400px] z-30">
              We will also offer a Persona UI for holders to view, and manage
              your Project Persona NFTs. The Persona UI will be a fun and simple
              way for you to interact with your Project Persona NFT.
            </p>
          </FrameContainer>
        </div>
      </BoxLayoutSection>
    </AnimationFadeUpComponent>
  );
};

export default OfferSection;
