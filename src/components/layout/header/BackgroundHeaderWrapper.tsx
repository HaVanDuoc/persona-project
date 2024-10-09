import React from "react";

import BG from "@/assets/BACKGROUND_HEADER.png";

const BackgroundHeaderWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="relative">
      {/* Background with blend mode */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${BG.src})`,
          backgroundBlendMode: "overlay", // Bạn có thể thay đổi chế độ hòa trộn theo ý muốn
          backgroundColor: "#444444", // Thay đổi màu sắc và độ mờ để hòa trộn
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default BackgroundHeaderWrapper;
