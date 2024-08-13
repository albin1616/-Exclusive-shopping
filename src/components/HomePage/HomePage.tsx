import FlashSale from "../FlashSale/FlashSale";
import { EmblaOptionsType } from "embla-carousel";
import flashData from "../../data/flash.json";
import Hero from "../Hero/Hero";
import Footer from "../Footer/Footer";
const HomePage = () => {
  const OPTIONS: EmblaOptionsType = { loop: true };
  return (
    <div>
      <Hero />
      <FlashSale slides={flashData} options={OPTIONS} />
      <Footer />
    </div>
  );
};

export default HomePage;
