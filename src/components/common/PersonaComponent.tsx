import utils from "@/utils";
import Image, { StaticImageData } from "next/image";
import React from "react";

const PersonaComponent = ({
  src,
  className,
}: {
  src: StaticImageData;
  className?: string;
}) => {
  return (
    <div
      className={`flex justify-center items-center w-full z-10 ${className}`}
    >
      <Image
        src={src.src}
        alt={utils.generateRandomAriaLabel("Persona__")}
        width={src.width}
        height={src.height}
        className="w-full h-auto object-cover"
      />
    </div>
  );
};

export default PersonaComponent;
