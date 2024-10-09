import React from "react";

type TitleComponentProps = {
  title: string;
  gradientWords?: string[]; // Mảng các từ cần áp dụng gradient
  breakLineAt?: number[];
  className?: string;
};

const TitleComponent = ({
  title,
  breakLineAt = [], // Mặc định không có ngắt dòng
  className = "",
}: TitleComponentProps) => {
  // Tách các từ trong tiêu đề
  const words = title.split(" ");

  return (
    <h2 className={`w-fit text-center bg-gradient bg-clip-text text-transparent ${className}`}>
      {words.map((word, index) => (
        <span key={index}>
          <span>{word}</span>
          {breakLineAt.includes(index) ? <br /> : " "}
        </span>
      ))}
    </h2>
  );
};

export default TitleComponent;
