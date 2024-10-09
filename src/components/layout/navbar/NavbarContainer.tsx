"use client";

import React, { useRef } from "react";
import NavbarComponent from "./NavbarComponent";
import AsideMenuComponent from "./AsideMenuComponent";

const NavbarContainer = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);

  const toggle = () => setIsMenuOpen((prevShow) => !prevShow);

  const handleClickOutside = (event: MouseEvent) => {
    // Kiểm tra nếu click xảy ra bên ngoài NavbarMobile
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target as Node)
    ) {
      setIsMenuOpen(false); // Đóng
    }
  };

  React.useEffect(() => {
    // Thêm sự kiện click
    document.addEventListener("mousedown", handleClickOutside);

    // Gỡ bỏ sự kiện khi component bị hủy
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <NavbarComponent toggle={toggle} />
      <div ref={containerRef}>
        <AsideMenuComponent open={isMenuOpen} toggle={toggle} />
      </div>
    </>
  );
};

export default NavbarContainer;
