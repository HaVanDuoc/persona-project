"use client";

import BelieveSection from "@/components/home/BelieveSetion/BelieveSection";
import DividerHomeComponent from "@/components/home/DividerHomeComponent";
import NftSection from "@/components/home/NftSection/NftSection";
import OfferSection from "@/components/home/OfferSection/OfferSection";
import TradeSection from "@/components/home/TradeSection/TradeSection";
import StaySection from "@/components/home/StaySection/StaySection";
import ThankSection from "@/components/home/ThankSection/ThankSection";

const HomePage = () => {
  return (
    <div className="bg-dark min-h-[100vh]">
      <NftSection />
      <DividerHomeComponent />
      <OfferSection />
      <TradeSection />
      <BelieveSection />
      <StaySection />
      <ThankSection />
    </div>
  );
};

export default HomePage;
