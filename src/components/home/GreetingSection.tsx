import CornerBorderContainer from "@/components/common/CornerBorderContainer";
import TitleComponent from "@/components/common/TitleComponent";
import React from "react";

const GreetingSection = () => {
  const bg = "bg-gradient-to-b from-transparent to-black";

  return (
    <section className={`relative pt-20 ${bg}`}>
      <div className="container">
        <TitleComponent
          title="Welcome to Project Persona"
          breakLineAt={[0]}
          className="!text-left"
        />
        <CornerBorderContainer corner="bottomLeft">
          <p className="p-10 max-w-lg">
            {`We're excited to introduce you to our amazing new NFT platform that
              allows you to create a truly digital representation of yourself.`}
          </p>
        </CornerBorderContainer>
      </div>
    </section>
  );
};

export default GreetingSection;
