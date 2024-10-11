import BelieveSection from "@/components/home/BelieveSection";
import DividerHomeComponent from "@/components/home/DividerHomeComponent";
import NftSection from "@/components/home/NftSection";
import OfferSection from "@/components/home/OfferSection";
import TradeSection from "@/components/home/TradeSection";
import StaySection from "@/components/home/StaySection";
import ThankSection from "@/components/home/ThankSection";
import BG from "@/assets/BACKGROUND_HEADER.png";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className="bg-dark min-h-[100vh]">
      <NftSection />
      <DividerHomeComponent />
      <OfferSection />
      <TradeSection />
      <BelieveSection />
      <div className="relative">
        <Image src={BG.src} alt="bg" fill className="object-cover opacity-50" />
        <StaySection />
        <ThankSection />
      </div>
    </div>
  );
};

export default HomePage;
