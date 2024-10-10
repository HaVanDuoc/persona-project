import React from "react";

import Image, { StaticImageData } from "next/image";
import SUB_1 from "@/assets/sub/Frame.png";
import SUB_2 from "@/assets/sub/Yellow sparks.png";
import SUB_3 from "@/assets/sub/Vector.png";
import SUB_4 from "@/assets/sub/OLO2GW1 1.png";
import cn from "@/utils/tailwind-utils";

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
        hidden && hiddenClasses[hidden],
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
      {/* <p>{children}</p> */}

      {/* Hero Position */}
      <SubComponent
        img={SUB_1}
        hidden="lg"
        className="top-[150px] left-0 w-[250px]"
      />
      <SubComponent
        img={SUB_2}
        hidden="lg"
        className="top-[150px] right-20 "
      />
      <SubComponent
        img={SUB_3}
        hidden="md"
        className="top-[600px] right-0"
      />

      {/* Greeting Position */}
      <SubComponent
        img={SUB_2}
        rotate
        className="top-[750px] right-[400px]"
      />

      {/* Nft Section position */}
      <SubComponent img={SUB_4} className="top-[700px] right-0" />

      <SubComponent
        img={SUB_2}
        className="top-[1600px] right-1/2 translate-x-1/2 w-full sm:min-w-[500px] max-w-[500px]"
      />
    </div>
  );
};

export default SubDetailsContainer;
