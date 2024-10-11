import React from "react";
import PERSONA from "@/assets/persona/persona (2).svg";
import BoxLayoutSection from "@/components/common/BoxLayoutSection";
import AnimationFadeUpComponent from "@/components/common/AnimationFadeUpComponent";
import PersonaComponent from "@/components/common/PersonaComponent";

const ThankSection = () => {
  return (
    <AnimationFadeUpComponent>
      <BoxLayoutSection padding className="!mb-0">
        <section className="flex flex-col md:flex-row md:gap-10 items-center pb-10">
          <PersonaComponent src={PERSONA}  />
            <h1 className="text-light">
              Thank you for choosing Project Persona.
            </h1>
        </section>
      </BoxLayoutSection>
    </AnimationFadeUpComponent>
  );
};

export default ThankSection;
