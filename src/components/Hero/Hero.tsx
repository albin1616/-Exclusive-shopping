import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Link } from "react-router-dom";
import { getImageUrl } from "../../utils/utils";
import hero from "../../data/hero.json";
import { AuthConstants } from "../../constants/AuthConstant";
import styles from "./Hero.module.scss";

const Hero = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 2500 }),
  ]);

  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.container}>
        {hero.map((slide, index) => (
          <div key={index} className={styles.slide}>
            <img
              className={styles.authImg}
              src={getImageUrl(slide.imgSrc)}
              alt={slide.imgAlt}
            />
            <div className={styles.content}>
              <p>{slide.description}</p>
              <h2>{slide.headline}</h2>
              <Link className={styles.shopNow} to={slide.link}>
                {AuthConstants.SHOP_NOW}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
