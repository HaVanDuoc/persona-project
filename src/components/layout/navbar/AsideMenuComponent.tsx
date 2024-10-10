import Image from "next/image";
import React from "react";

import CLOSE from "@/assets/navbar/close 1.svg";
import { NAV_LINKS } from "@/data/constants";
import { useParams, usePathname } from "next/navigation";
import LinkComponent from "@/components/common/LinkComponent";
import SUB_IMG from "@/assets/sub/Vector.png";
import { SubComponent } from "@/components/home/SubDetailsContainer";

const AsideMenuComponent = ({
  open,
  toggle,
}: {
  open: boolean;
  toggle: () => void;
}) => {
  const pathName = usePathname();
  const { locale } = useParams();

  const openMenu = open ? "translate-x-0 shadow-2xl" : "translate-x-[-100%]";

  return (
    <aside
      className={`max-w-screen-xs w-screen h-screen bg-dark backdrop-blur-2xl animation fixed top-0 left-0  z-[999] overflow-hidden ${openMenu}`}
    >
      <div className="flex items-center justify-end py-8 px-7" onClick={toggle}>
        <Image src={CLOSE} alt="icon close" />
      </div>

      <div className="w-fit flex flex-col gap-5 items-center mx-auto mt-10">
        {NAV_LINKS.map((nav, index) => {
          const isActive =
            pathName === `/${locale}${nav.href ? `/${nav.href}` : ""}`;

          return (
            <>
              <LinkComponent
                href={nav.href}
                key={index}
                className={`uppercase font-bold px-5 ${
                  isActive
                    ? "text-primary drop-shadow-2xl text-shadow text-shadow-primary"
                    : "text-light"
                }`}
                onClick={toggle}
              >
                {nav.name}
              </LinkComponent>
              {index < NAV_LINKS.length -1 ? <Divider /> : null}
            </>
          );
        })}
      </div>

      <SubComponent
        img={SUB_IMG}
        className="top-[300px] -right-10 w-full"
      />
    </aside>
  );
};

const Divider = () => (
  <div className="w-full flex flex-row items-center">
    <div className="w-2 h-2 rounded-full bg-primary"></div>
    <div className="w-full h-[1px] bg-primary"></div>
    <div className="w-2 h-2 rounded-full bg-primary"></div>
  </div>
);

export default AsideMenuComponent;
