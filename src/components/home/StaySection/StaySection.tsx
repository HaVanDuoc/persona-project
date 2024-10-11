import AnimationFadeUpComponent from "@/components/common/AnimationFadeUpComponent";
import BoxLayoutSection from "@/components/common/BoxLayoutSection";
import ImageComponent from "@/components/common/ImageComponent";
import TextHighlightComponent from "@/components/common/TextHighlightComponent";
import React from "react";

import FRAME from "@/assets/frame/Frame 36832.svg";

const StaySection = () => {
  return (
    <AnimationFadeUpComponent>
      <BoxLayoutSection>
        <div className="pt-24">
          <div className="relative w-[500px]">
            <ImageComponent
              img={FRAME}
              alt="frame"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
            />
            <TextHighlightComponent
              text="It is worth mentioning that this is only a small part of a bigger plan that we have in store, we are constantly working on new developments to enhance the overall experience. Stay tuned, you don't want to miss out on what's coming next. "
              highlights={[
                "Stay tuned, you don't want to miss out on what's coming next.",
              ]}
              className="text-justify text-sm sm:text-lg md:text-xl px-24 py-20 sm:p-20 overflow-hidden"
            />
          </div>
        </div>
      </BoxLayoutSection>
    </AnimationFadeUpComponent>
  );
};

export default StaySection;
