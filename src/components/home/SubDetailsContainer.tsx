import React from "react";

import Image, { StaticImageData } from "next/image";
import SUB_1 from "@/assets/sub/Frame.png";
import SUB_2 from "@/assets/sub/Yellow sparks.png";
import SUB_3 from "@/assets/sub/Vector.png";

export const SubComponent = ({
  img,
  className,
  rotate = false,
  hidden,
}: {
  img: StaticImageData;
  className?: string;
  rotate?: boolean;
  hidden?: "xl" | "lg" | "md" | "sm" | "xs";
}) => {
  const classRotate = rotate ? "rotate-180" : "";

  const hiddenClasses = {
    xl: "hidden xl:block",
    lg: "hidden lg:block",
    md: "hidden md:block",
    sm: "hidden sm:block",
    xs: "hidden xs:block",
  };

  const isHidden = hidden ? hiddenClasses[hidden] : "";

  return (
    <div className={`absolute ${classRotate} ${isHidden} ${className}`}>
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

const SubDetailsContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {children}

      {/* Hero Position */}
      <SubComponent
        img={SUB_1}
        hidden="lg"
        className="top-[150px] left-0 w-[250px]"
      />
      <SubComponent
        img={SUB_2}
        hidden="lg"
        className="top-[150px] right-[150px] w-[300px]"
      />
      <SubComponent
        img={SUB_3}
        hidden="md"
        className="top-[600px] right-0 w-[300px]"
      />

      {/* Greeting Position */}
      <SubComponent
        img={SUB_2}
        rotate
        className="top-[750px] right-[400px] w-[500px]"
      />
    </div>
  );
};

export default SubDetailsContainer;
