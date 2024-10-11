import BoxLayoutSection from "@/components/common/BoxLayoutSection";
import ImageComponent from "@/components/common/ImageComponent";
import React from "react";

import PERSONA from "@/assets/persona/persona.svg";
import FRAME from "@/assets/frame/Frame.svg";
import TextHighlightComponent from "@/components/common/TextHighlightComponent";
import AnimationFadeUpComponent from "@/components/common/AnimationFadeUpComponent";

const TradeSection = () => {
  return (
    <AnimationFadeUpComponent>
      <BoxLayoutSection padding>
        <div className="flex flex-col lg:flex-row gap-10 items-center pb-24">
          <div className="relative w-full sm:w-[600px]">
            <ImageComponent
              img={PERSONA}
              alt="persona"
              className="lg:min-w-[400px]"
            />
          </div>
          <div className="relative flex justify-center items-center">
            <ImageComponent
              img={FRAME}
              alt="frame"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 !max-h-full"
            />
            <div className="sm:w-[400px] text-sm sm:text-lg md:text-xl p-5 sm:p-20 overflow-hidden space-y-5 sm:space-y-8 ">
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
          </div>
        </div>
      </BoxLayoutSection>
    </AnimationFadeUpComponent>
  );
};

export default TradeSection;
