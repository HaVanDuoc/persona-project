import GreetingSection from "@/components/home/GreetingSection";
import HeroSection from "@/components/home/HeroSection";
import FooterComponent from "@/components/layout/footer/FooterComponent";
import Image from "next/image";

import BG from "@/assets/BACKGROUND_HEADER.png";
import SubDetailsContainer from "@/components/home/SubDetailsContainer";
import NavbarContainer from "@/components/layout/navbar/NavbarContainer";
import FloatingContainer from "@/components/ui/floating/FloatingContainer";
import UpToTopComponent from "@/components/ui/floating/UpTopTopComponent";

const items = [<UpToTopComponent key={"upto"} />];

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-dark">
      <FloatingContainer items={items} />
      <SubDetailsContainer />
      <header className="relative">
        <Image src={BG.src} alt="bg" fill className="object-cover opacity-50" />
        <NavbarContainer />
        <HeroSection />
        <GreetingSection />
      </header>
      <main className="bg-black">{children}</main>
      <FooterComponent />
    </div>
  );
}
