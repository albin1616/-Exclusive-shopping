import FlashSale from '../FlashSale/FlashSale';
import { EmblaOptionsType } from 'embla-carousel';
import flashData from '../../data/flash.json';
import Hero from '../Hero/Hero';
const HomePage = () => {
  const OPTIONS: EmblaOptionsType = { loop: true };
  return (
    <div>
      <Hero />
      <FlashSale slides={flashData} options={OPTIONS} />
    </div>
  );
};

export default HomePage;
