import ImageComponent from "@/components/common/ImageComponent";
import LogoComponent from "@/components/ui/LogoComponent";
import React from "react";

import MEDIA_1 from "@/assets/media/Logomark-White 1.svg";
import MEDIA_TWITTER from "@/assets/media/twitter 1.svg";
import MEDIA_DISCORD from "@/assets/media/discord (1) 1.svg";

const FooterComponent = () => {
  return (
    <footer className="container bg-dark py-5 flex flex-col sm:flex-row gap-10 items-center justify-center sm:justify-between">
      <LogoComponent />
      <p className="order-3 sm:order-2 font-bold uppercase">
        PROJECT persona © 2023 COPYRIGHT
      </p>
      <div className="order-2 sm:order-3 flex flex-row items-center gap-3 sm:gap-5">
        <ImageComponent img={MEDIA_1} alt="media " className="w-5" />
        <ImageComponent
          img={MEDIA_TWITTER}
          alt="media twitter"
          className="w-5"
        />
        <ImageComponent
          img={MEDIA_DISCORD}
          alt="media discord"
          className="w-5"
        />
      </div>
    </footer>
  );
};

export default FooterComponent;
