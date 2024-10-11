import React from "react";
import AnimationFadeUpComponent from "@/components/common/AnimationFadeUpComponent";
import BoxLayoutSection from "@/components/common/BoxLayoutSection";
import TextHighlightComponent from "@/components/common/TextHighlightComponent";
import FRAME from "@/assets/frame/STAY TUNED.png";
import cn from "@/utils/tailwind-utils";
import FrameContainer from "@/components/common/FrameContainer";

const StaySection = () => {
  const bg = "bg-gradient-to-t from-transparent to-black";

  return (
    <AnimationFadeUpComponent className={cn(bg)}>
      <BoxLayoutSection>
        <FrameContainer
          frame={FRAME}
          overflow
          className="sm:w-[600px] sm:p-10 p-5 my-20"
        >
          <TextHighlightComponent
            text="It is worth mentioning that this is only a small part of a bigger plan that we have in store, we are constantly working on new developments to enhance the overall experience. Stay tuned, you don't want to miss out on what's coming next. "
            highlights={[
              "Stay tuned, you don't want to miss out on what's coming next.",
            ]}
            className="text-justify text-sm sm:text-lg md:text-xl z-30"
          />
        </FrameContainer>
      </BoxLayoutSection>
    </AnimationFadeUpComponent>
  );
};

export default StaySection;
