import React from "react";
import BoxLayoutSection from "@/components/common/BoxLayoutSection";
import PERSONA from "@/assets/persona/persona (4).png";
import FRAME from "@/assets/frame/Frame 36829.png";
import TextHighlightComponent from "@/components/common/TextHighlightComponent";
import AnimationFadeUpComponent from "@/components/common/AnimationFadeUpComponent";
import PersonaComponent from "@/components/common/PersonaComponent";
import FrameContainer from "../common/FrameContainer";

const TradeSection = () => {
  return (
    <AnimationFadeUpComponent>
      <BoxLayoutSection padding>
        <div className="flex flex-col xl:flex-row gap-24 justify-between items-center">
            <PersonaComponent src={PERSONA} className="w-full sm:w-[500px] lg:min-w-[400px] " />

            <FrameContainer
              frame={FRAME}
              className="py-10 px-3 sm:py-20 sm:px-5"
            >
              <div className="sm:w-[300px] text-sm sm:text-lg md:text-xl overflow-hidden space-y-5 sm:space-y-8 ">
                <TextHighlightComponent
                  text="With Project Persona, you can share and trade your customized NFT or it’s traits with others, creating a vibrant ecosystem of personalized digital personas."
                  highlights={[
                    "share and trade your customized NFT or it’s traits",
                  ]}
                />

                <p>
                  Our team will be able to engage with the community through
                  social media and other viable channels to gather feedback and
                  ideas for new features and traits.
                </p>
              </div>
            </FrameContainer>
        </div>
      </BoxLayoutSection>
    </AnimationFadeUpComponent>
  );
};

export default TradeSection;
