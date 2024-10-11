import Image from "next/image";
import React from "react";

import DIVIDER from "@/assets/home/divider.svg";

const DividerHomeComponent = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="w-[768px] lg:w-[1280px] xl:w-full mx-auto py-10 sm:py-24">
        <Image src={DIVIDER} alt="divider home" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default DividerHomeComponent;
