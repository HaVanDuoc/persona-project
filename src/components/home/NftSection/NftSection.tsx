import Image from "next/image";
import React from "react";
import ButtonComponent from "@/components/common/ButtonComponent";
import IMG_NFT from "@/assets/home/persona11111 1.png";
import IMG_DIVIDER from "@/assets/home/border.png";
import IMG_BUY from "@/assets/home/buy (1) 1.png";
import IMG_TRAITS from "@/assets/home/Layer_x0020_1.png";
import IMG_KEY from "@/assets/home/digital-key 1.png";
import TextHighlightComponent from "@/components/common/TextHighlightComponent";
import BoxLayoutSection from "@/components/common/BoxLayoutSection";
import AnimationFadeUpComponent from "@/components/common/AnimationFadeUpComponent";
import CornerBorderContainer from "@/components/common/CornerBorderContainer";
import ImageComponent from "@/components/common/ImageComponent";

const DATA = [
  {
    id: 1,
    img: IMG_BUY,
    text: "Through our platform, buy and sell traits with each other.",
    highlights: ["buy and sell traits"],
  },
  {
    id: 2,
    img: IMG_TRAITS,
    text: "Stake your Project Persona NFT to gain credits that can be used to acquire new traits from our trait store.",
    highlights: ["to gain credits", "to acquire new traits"],
  },
  {
    id: 3,
    img: IMG_KEY,
    text: "Our platform will update all meta data ensuring the traits you select are stored on the blockchain, so you can be sure of the authenticity and ownership of your Project Persona NFT.",
    highlights: ["the traits you select are stored on the blockchain"],
  },
];

const NftSection = () => {
  return (
    <AnimationFadeUpComponent>
      <BoxLayoutSection padding>
        <section className="space-y-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 sm:gap-20 py-10 sm:py-20">
            <ImageComponent img={IMG_NFT} alt="" className="sm:w-[400px]" />

            <div className="w-full max-w-[500px]">
              <TextHighlightComponent
                text="With Project Persona, you'll have access to a wide range of interchangeable traits."
                highlights={["a wide range of interchangeable traits."]}
                className="text-lg font-bold"
              />

              <div className="h-10 relative">
                <Image
                  src={IMG_DIVIDER}
                  alt="divider"
                  width={IMG_DIVIDER.width}
                  height={IMG_DIVIDER.height}
                  className="h-auto object-cover absolute -left-[40%]"
                />
              </div>

              <p>
                The customization process is user-friendly and intuitive,
                allowing even those with little technical expertise to create a
                NFT with trait combinations of your own choosing
              </p>

              <ButtonComponent className="mt-8">
                GET Persona NFT
              </ButtonComponent>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-14 sm:gap-20">
            {DATA.map((item) => (
              <div key={item.id}>
                <div className="sm:w-[500px] flex flex-col sm:flex-row items-start sm:items-center justify-center gap-5 sm:gap-7">
                  <CornerBorderContainer size={50}>
                    <div className="w-[45px] h-[45px] ml-6 mt-6">
                      <Image
                        src={item.img}
                        alt="icon"
                        width={50}
                        height={50}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </CornerBorderContainer>

                  <TextHighlightComponent
                    text={item.text}
                    highlights={item.highlights}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </BoxLayoutSection>
    </AnimationFadeUpComponent>
  );
};

export default NftSection;
