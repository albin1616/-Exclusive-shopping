import React from "react";
import { getImageUrl } from "../../utils/utils";
import { renderStarRating } from "../../utils/renderStars";
import { ProductCardProps } from "../../types/types";
import { AuthConstants } from "../../constants/AuthConstant";
import styles from "./ProductCard.module.scss";

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  image,
  price,
  oldPrice,
  rating,
  reviewCount,
  onClick,
}) => {
  return (
    <div className={styles.productCard} onClick={onClick}>
      <img src={getImageUrl(image)} alt={name} className={styles.image} />
      <div className={styles.details}>
        <h3 className={styles.name}>{name}</h3>
        <div className={styles.price}>
          {oldPrice && <span className={styles.oldPrice}>{oldPrice}</span>}
          <span className={styles.newPrice}>{price}</span>
        </div>
        <div className={styles.rating}>
          {renderStarRating(rating)}
          <span className={styles.reviewCount}>
            ({reviewCount} {AuthConstants.REVIEWS})
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
