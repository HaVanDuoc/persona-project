import React from "react";

interface TextHighlightProps {
  text: string;
  highlights: string[];
  className?: string;
}

const TextHighlightComponent = ({
  text,
  highlights,
  className,
}: TextHighlightProps) => {
  // Kết hợp các chuỗi highlight thành một biểu thức chính quy
  const regex = new RegExp(`(${highlights.join("|")})`, "gi");

  // Tách chuỗi text ra bằng cách dùng regex để tìm tất cả các đoạn cần highlight
  const parts = text.split(regex);

  return (
    <p className={className}>
      {parts.map((part, index) =>
        highlights.some(
          (highlight) => highlight.toLowerCase() === part.toLowerCase()
        ) ? (
          <span key={index} className="text-primary">
            {part}
          </span>
        ) : (
          part
        )
      )}
    </p>
  );
};

export default TextHighlightComponent;
