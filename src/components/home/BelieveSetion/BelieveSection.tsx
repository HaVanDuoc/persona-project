import ImageComponent from "@/components/common/ImageComponent";
import React from "react";

import IMG from "@/assets/home/Frame 36831.png";
import TextHighlightComponent from "@/components/common/TextHighlightComponent";
import CornerBorderContainer from "@/components/common/CornerBorderContainer";
import BoxLayoutSection from "@/components/common/BoxLayoutSection";
import AnimationFadeUpComponent from "@/components/common/AnimationFadeUpComponent";

const BelieveSection = () => {
  return (
    <AnimationFadeUpComponent>
      <BoxLayoutSection padding>
        <ImageComponent img={IMG} alt="" className="sm:p-16 lg:p-24" />

        <CornerBorderContainer>
          <CornerBorderContainer corner="bottomRight">
            <div className="p-10 lg:max-w-xl">
              <TextHighlightComponent
                text="We believe that Project Persona offers a new and exciting way to share your digital self through the medium of NFTs. By allowing for the customization of interchangeable traits, we are enabling individuals create truly enjoyable Persona that reflects their taste, personalities or interests. Join us in this journey and personify yourself. "
                highlights={[
                  "Project Persona offers a new and exciting way to share your digital self ",
                ]}
              />
            </div>
          </CornerBorderContainer>
        </CornerBorderContainer>

      
      </BoxLayoutSection>
    </AnimationFadeUpComponent>
  );
};

export default BelieveSection;
