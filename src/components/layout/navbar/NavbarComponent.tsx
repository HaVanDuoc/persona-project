"use client";

import LogoComponent from "@/components/ui/LogoComponent";
import { Navbar } from "@nextui-org/react";
import React from "react";
import NavigationComponent from "./NavigationComponent";
import ButtonComponent from "@/components/common/ButtonComponent";
import Image from "next/image";

import ICON_CONNECT from "@/assets/navbar/icon-connect.svg";
import ICON_MENU from "@/assets/navbar/menu 1.svg";

const NavbarComponent = ({ toggle }: { toggle: () => void }) => {
  return (
    <Navbar
      shouldHideOnScroll
      className="!h-[13vh] bg-transparent my-auto !backdrop-blur-none !backdrop-saturate-100"
      classNames={{ wrapper: "!container" }}
    >
      <MenuComponent onClick={toggle} />
      <LogoComponent />
      <NavigationComponent />
      <ConnectComponent />
    </Navbar>
  );
};

const MenuComponent = ({ onClick }: { onClick: () => void }) => (
  <div className="lg:hidden flex items-center justify-center" onClick={onClick}>
    <Image src={ICON_MENU} alt="icon menu" />
  </div>
);

const ConnectComponent = () => (
  <>
    <ButtonComponent
      startContent={
        <Image src={ICON_CONNECT} alt="icon connect" width={18} height={18} />
      }
      hidden="lg"
    >
      Connect
    </ButtonComponent>
    <div className="lg:hidden flex items-center justify-center ">
      <Image src={ICON_CONNECT} alt="icon connect" width={22} height={22} />
    </div>
  </>
);

export default NavbarComponent;
