import GreetingSection from "@/components/home/GreetingSection/GreetingSection";
import HeroSection from "@/components/home/heroSection/HeroSection";
import FooterComponent from "@/components/layout/footer/FooterComponent";
import NavbarComponent from "@/components/layout/navbar/NavbarComponent";
import Image from "next/image";

import BG from "@/assets/BACKGROUND_HEADER.png";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-dark">
      <header className="relative">
        <Image src={BG.src} alt="bg" fill className="object-cover opacity-80" />
        <NavbarComponent />
        <HeroSection />
        <GreetingSection />
      </header>
      <main className="bg-black">{children}</main>
      <FooterComponent />
    </div>
  );
}
