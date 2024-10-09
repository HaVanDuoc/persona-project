import { Button } from "@nextui-org/react";
import React from "react";
import AnimationClick from "./AnimationClick";
import Image from "next/image";

import BORDER_BUTTON from "@/assets/border-button.png";

type Props = {
  children: React.ReactNode;
  endContent?: React.ReactNode;
  startContent?: React.ReactNode;
  hidden?: "xl" | "lg" | "md" | "sm" | "xs";
  className?: string;
};

const ButtonComponent: React.FC<Props> = ({
  children,
  endContent,
  startContent,
  hidden,
  className = "",
}) => {
  const isHidden = hidden ? `hidden ${hidden}:block` : "";

  return (
      <AnimationClick className={`${isHidden}`}>
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
