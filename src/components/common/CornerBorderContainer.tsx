import React from "react";

const CornerBorderContainer = ({
  children,
  size = 60,
  corner = "topLeft",
}: {
  children: React.ReactNode;
  size?: number;
  color?: string;
  corner?: "topLeft" | "topRight" | "bottomRight" | "bottomLeft";
}) => {
  const aura = "shadow-[0_0_20px_2px_var(--primary-color)]";
  const positionCorner =
    corner === "topLeft"
      ? "top-0 left-0"
      : corner === "topRight"
      ? "top-0 right-0"
      : corner === "bottomRight"
      ? "bottom-0 right-0"
      : corner === "bottomLeft" && "bottom-0 left-0";

  return (
    <div className="relative">
      <div
        className={`absolute border-2 border-primary ${positionCorner} ${aura}`}
        style={{
          height: size,
          borderTopRightRadius: `${size}px`, // Để bo tròn trong
        }}
      ></div>
      <div
        className={`absolute border-2 border-primary ${positionCorner} ${aura}`}
        style={{
          width: size,
          borderTopRightRadius: `${size}px`, // Để bo tròn trong
        }}
      ></div>

      {children}
    </div>
  );
};

export default CornerBorderContainer;
