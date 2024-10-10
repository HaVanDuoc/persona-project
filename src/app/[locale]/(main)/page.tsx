import DividerHomeComponent from "@/components/home/DividerHomeComponent";
import NftSection from "@/components/home/NftSection/NftSection";

const HomePage = () => {
  return (
    <div className="bg-dark min-h-[100vh]">
      <NftSection />
      <DividerHomeComponent />
    </div>
  );
};

export default HomePage;
