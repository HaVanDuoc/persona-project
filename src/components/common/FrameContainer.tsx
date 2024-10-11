import utils from "@/utils";
import cn from "@/utils/tailwind-utils";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface Props {
  frame: StaticImageData;
  padding?: number;
  children: React.ReactNode;
  className?: string;
  overflow?: boolean;
}

const FrameContainer: React.FC<Props> = ({
  frame,
  className,
  children,
  padding = 40,
  overflow = false,
}) => {
  return (
    <div className={cn("w-fit relative z-10", className)}>
      <div
        className={cn(
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full",
          overflow && "min-w-[500px]"
        )}
      >
        <Image
          src={frame}
          alt={utils.generateRandomAriaLabel("Frame__")}
          fill
        />
      </div>

      <div
        className="flex justify-center items-center"
        style={{
          padding: `${padding}px`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default FrameContainer;
