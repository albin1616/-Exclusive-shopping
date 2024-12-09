import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { PrevButton, NextButton, usePrevNextButtons } from "./FlashSaleArrow";
import { PropType } from "../../types/types";
import { useNavigate } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import { AuthConstants } from "../../constants/AuthConstant";
import styles from "./FlashSale.module.scss";

const FlashSale: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const navigate = useNavigate();
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const handleProductClick = (
    event: React.MouseEvent<HTMLDivElement>,
    product: any,
  ) => {
    event.preventDefault();
    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <section className={styles.embla}>
      <h2>{AuthConstants.TODAYS_FLASH_SALE}</h2>
      <div className={styles.viewport} ref={emblaRef}>
        <div className={styles.container}>
          {slides.map((product) => (
            <div className={styles.slide} key={product.id}>
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                image={product.image}
                price={product.price}
                oldPrice={product.oldPrice}
                rating={product.rating}
                reviewCount={product.reviewCount}
                onClick={(e) => handleProductClick(e, product)}
              />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.controls}>
        <div className={styles.buttons}>
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
};

export default FlashSale;
