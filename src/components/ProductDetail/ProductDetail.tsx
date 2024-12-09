import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getImageUrl } from "../../utils/utils";
import CustomButton from "../CustomButton/CustomButton";
import { renderStarRating } from "../../utils/renderStars";
import { useCart } from "../../context/CartContext";
import CartModal from "../Cart/Cart";
import { AuthConstants } from "../../constants/AuthConstant";
import styles from "./ProductDetail.module.scss";

const ProductDetail: React.FC = () => {
  const { state } = useLocation();
  const { product } = state || {};
  const { addToCart, cartItems } = useCart();
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    const isProductInCart = cartItems.some((item) => item.id === product?.id);
    setAddedToCart(isProductInCart);
  }, [cartItems, product]);

  if (!product) {
    return <div>{AuthConstants.PRODUCT_NOT_FOUND}</div>;
  }

  const handleAddToCart = () => {
    addToCart(product);
    setAddedToCart(true);
  };
  const handleGoToCart = () => {
    setIsCartModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsCartModalOpen(false);
  };
  return (
    <div className={styles.productDetail}>
      <img
        className={styles.image}
        src={getImageUrl(product.image)}
        alt={product.name}
      />
      <div className={styles.content}>
        <div className={styles.name}>{product.name}</div>
        <div className={styles.price}>
          {product.oldPrice && (
            <span className={styles.oldPrice}>{product.oldPrice}</span>
          )}
          <span className={styles.newPrice}>{product.price}</span>
        </div>
        <div className={styles.rating}>
          {renderStarRating(product.rating)}
          <span className={styles.reviewCount}>
            ({product.reviewCount} {AuthConstants.REVIEWS})
          </span>
        </div>{" "}
        <div className={styles.description}>{product.description}</div>
        <CustomButton
          label={addedToCart ? "Go To Cart" : "Add To Cart"}
          type="submit"
          className={styles.cart}
          onClick={addedToCart ? handleGoToCart : handleAddToCart}
        />
        <CustomButton label={AuthConstants.BUY_NOW} className={styles.cart} />
      </div>
      <CartModal isOpen={isCartModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default ProductDetail;
