import { Button } from "@nextui-org/react";
import React from "react";
import AnimationClick from "./AnimationClick";
import Image from "next/image";

import BORDER_BUTTON from "@/assets/border-button.png";

type Props = {
  children: React.ReactNode;
  endContent?: React.ReactNode;
  startContent?: React.ReactNode;
  className?: string;
};

const ButtonComponent: React.FC<Props> = ({
  children,
  endContent,
  startContent,
  className = "",
}) => {
  return (
    <AnimationClick>
      <Button
        className={`bg-transparent text-light font-bold py-3 px-10 ${className}`}
        endContent={endContent}
        startContent={startContent}
      >
        <Image src={BORDER_BUTTON.src} alt="border button" fill />
        {children}
      </Button>
    </AnimationClick>
  );
};

export default ButtonComponent;
