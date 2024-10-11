import React from "react";

import Image, { StaticImageData } from "next/image";
import SUB_1 from "@/assets/sub/Frame.png";
import SUB_2 from "@/assets/sub/Yellow sparks.png";
import SUB_3 from "@/assets/sub/Vector.png";
import SUB_4 from "@/assets/sub/OLO2GW1 1.png";
import SUB_5 from "@/assets/sub/sub_1.svg";
import SUB_6 from "@/assets/sub/sub_2.svg";
import cn from "@/utils/tailwind-utils";
import GlowingEffect from "../common/GlowingEffect";

interface SubComponentProps {
  img: StaticImageData;
  className?: string;
  rotate?: boolean;
  hidden?: "xl" | "lg" | "md" | "sm" | "xs";
}

export const SubComponent: React.FC<SubComponentProps> = ({
  img,
  className,
  rotate = false,
  hidden,
}) => {
  const hiddenClasses = {
    xl: "hidden xl:block",
    lg: "hidden lg:block",
    md: "hidden md:block",
    sm: "hidden sm:block",
    xs: "hidden xs:block",
  };

  return (
    <div
      className={cn(
        "absolute pointer-events-none",
        rotate && "rotate-180",
        hidden ? hiddenClasses[hidden] : hiddenClasses["lg"],
        className
      )}
    >
      <Image
        src={img.src}
        alt=""
        width={img.width}
        height={img.height}
        className="w-full h-auto object-cover"
      />
    </div>
  );
};

const SubDetailsContainer = () => {
  return (
    <div>
      {/* Hero Position */}
      <SubComponent
        img={SUB_1}
        hidden="lg"
        className="top-[150px] left-0 w-[250px]"
      />
      <SubComponent img={SUB_2} hidden="lg" className="top-[150px] right-20 " />
      <SubComponent img={SUB_3} hidden="md" className="top-[600px] right-0" />

      {/* Greeting Position */}
      <SubComponent img={SUB_2} rotate className="top-[750px] right-[400px]" />

      {/* Nft Section position */}
      <SubComponent img={SUB_4} className="top-[700px] right-0" />

      <SubComponent
        img={SUB_2}
        className="top-[1600px] right-1/2 translate-x-1/2 w-full sm:min-w-[500px] max-w-[500px]"
      />

      {/* Offer Section */}
      <GlowingEffect size={500} position="left" className="top-[2200px]" />
      <GlowingEffect
        size={500}
        position="right"
        className="top-[3000px] hidden sm:block"
      />
      <SubComponent
        img={SUB_3}
        className="top-[3000px] right-[-100px]"
      />
      <SubComponent
        img={SUB_5}
        className="top-[2700px] left-[-70%]"
      />

      <SubComponent img={SUB_6} className="top-[4000px] right-0" />
      <GlowingEffect size={400} position="right" className="top-[4200px]" />
      <SubComponent
        img={SUB_2}
        className="top-[4300px] right-1/2 translate-x-1/2"
      />

      <SubComponent img={SUB_5} className="top-[4300px] left-[-60%]" />
      <SubComponent img={SUB_6} className="top-[5000px] right-0" />
      <GlowingEffect size={400} position="right" className="top-[5200px]" />
      <SubComponent
        img={SUB_2}
        className="top-[5000px] right-1/2 translate-x-1/2"
      />
    </div>
  );
};

export default SubDetailsContainer;
