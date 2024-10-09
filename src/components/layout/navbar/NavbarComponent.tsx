import LogoComponent from "@/components/ui/LogoComponent";
import { Navbar } from "@nextui-org/react";
import React from "react";
import NavigationComponent from "./NavigationComponent";
import ButtonComponent from "@/components/common/ButtonComponent";
import Image from "next/image";

import ICON_CONNECT from "@/assets/navbar/icon-connect.svg";

const NavbarComponent = () => {
  return (
    <Navbar
      shouldHideOnScroll
      className="!h-[13vh] bg-transparent my-auto !backdrop-blur-none !backdrop-saturate-100"
      classNames={{
        wrapper: "!container"
      }}
    >
      <LogoComponent />
      <NavigationComponent />
      <ButtonComponent
        startContent={
          <Image src={ICON_CONNECT} alt="icon connect" width={18} height={18} />
        }
      >
        Connect
      </ButtonComponent>
    </Navbar>
  );
};

export default NavbarComponent;
