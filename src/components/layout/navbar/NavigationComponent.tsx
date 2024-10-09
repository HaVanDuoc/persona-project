"use client";

import LinkComponent from "@/components/common/LinkComponent";
import { NAV_LINKS } from "@/data/constants";
import { useParams, usePathname } from "next/navigation";
import React from "react";

const NavigationComponent = () => {
  const pathName = usePathname();
  const { locale } = useParams();

  return (
    <div className="hidden lg:flex items-center justify-center gap-14 flex-1">
      {NAV_LINKS.map((nav) => {
        const isActive =
          pathName === `/${locale}${nav.href ? `/${nav.href}` : ""}`;

        return (
          <LinkComponent
            href={nav.href}
            key={nav.id}
            className={`uppercase font-bold ${
              isActive ? "text-primary drop-shadow-2xl text-shadow text-shadow-primary" : "text-light"
            }`}
          >
            {nav.name}
          </LinkComponent>
        );
      })}
    </div>
  );
};

export default NavigationComponent;
