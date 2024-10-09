import LinkComponent from "@/components/common/LinkComponent";
import pathPage from "@/libs/path";
import React from "react";

const NAV_LINKS = [
  { id: 1, name: "go to main app", href: pathPage.home, isActive: true },
  { id: 2, name: "white paper", href: pathPage.whitePaper },
  { id: 3, name: "contact us", href: pathPage.contact },
];

type Props = {
  isActive?: boolean;
};

const NavigationComponent: React.FC<Props> = ({ isActive = false }) => {
  return (
    <div className="flex flex-row items-center justify-center gap-14 flex-1">
      {NAV_LINKS.map((nav) => (
        <LinkComponent
          href={nav.href}
          key={nav.id}
          className={`${
            isActive ? "text-primary drop-shadow-2xl" : "text-light"
          } uppercase font-bold `}
        >
          {nav.name}
        </LinkComponent>
      ))}
    </div>
  );
};

export default NavigationComponent;
