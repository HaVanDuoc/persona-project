import React from "react";

const CornerBorderContainer = ({
  children,
  size = 60,
}: {
  children: React.ReactNode;
  size?: number;
  color?: string;
}) => {
    const aura = "shadow-[0_0_20px_2px_var(--primary-color)]"
    
  return (
    <div className="relative">
        <div
          className={`absolute left-0 bottom-0 border-2 border-primary ${aura}`}
          style={{
            height: size,
            borderTopRightRadius: `${size}px`, // Để bo tròn trong
          }}
        ></div>
      <div
        className={`absolute left-0 bottom-0 border-2 border-primary ${aura}`}
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
