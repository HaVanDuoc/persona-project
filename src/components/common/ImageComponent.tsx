import Image, { StaticImageData } from "next/image";
import React from "react";

const ImageComponent = ({
  img,
  className,
}: {
  img: StaticImageData;
  className?: string;
}) => {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <Image
        src={img.src}
        alt="image"
        width={img.width}
        height={img.height}
        className="w-full h-auto object-cover"
      />
    </div>
  );
};

export default ImageComponent;
