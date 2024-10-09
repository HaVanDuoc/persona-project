import React from "react";

const AuraEffect = ({
  children,
  color = "var(--primary-color)", // Mặc định sử dụng biến CSS
  blur = "10px", // Độ mờ mặc định
}: {
  children: React.ReactNode;
  color?: string;
  blur?: string;
}) => {
    const aura = `shadow-[0_0_${blur}_2px_${color}]`
    
  return (
    <div className={`${aura}`}>{children}</div>
  );
};

export default AuraEffect;
