import React from "react";
import ButtonComponent from "@/components/common/ButtonComponent";
import PersonaComponent from "@/components/common/PersonaComponent";
import PERSONA from "@/assets/persona/persona (3).svg";
import FrameContainer from "@/components/common/FrameContainer";
import FRAME from "@/assets/frame/MAIN screen frame.png";

const HeroSection = () => {
  return (
    <section className="container py-20">
      <div className="w-full lg:w-[600px] h-auto m-auto relative">
        <FrameContainer frame={FRAME} overflow className="sm:px-24">
          <PersonaComponent src={PERSONA} />
        </FrameContainer>
      </div>

      <div className="w-full text-center mt-10">
        <ButtonComponent>GET Persona NFT</ButtonComponent>
      </div>
    </section>
  );
};

export default HeroSection;
