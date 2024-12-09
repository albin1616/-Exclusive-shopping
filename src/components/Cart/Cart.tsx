import React from "react";
import { useCart } from "../../context/CartContext";
import { getImageUrl } from "../../utils/utils";
import { Toaster, toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { CartModalProps } from "../../types/types";
import { AuthConstants } from "../../constants/AuthConstant";
import styles from "./Cart.module.scss";

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();
  const handleIncrement = (id: number, quantity: number) => {
    updateQuantity(id, quantity + 1);
  };

  const handleDecrement = (id: number, quantity: number) => {
    if (quantity > 1) {
      updateQuantity(id, quantity - 1);
    } else {
      removeFromCart(id);
    }
  };

  const totalAmount = cartItems
    .reduce((total, item) => {
      const price = parseFloat(item.price.replace("$", ""));
      return total + price * item.quantity;
    }, 0)
    .toFixed(2);
  if (!isOpen) return null;

  const handlePlaceOrder = () => {
    toast.success(AuthConstants.ORDER_PLACED);
    setTimeout(() => {
      onClose();
      navigate("/");
    }, 2500);
  };

  return (
    <div className={styles.modal}>
      <Toaster
        position="top-right"
        toastOptions={{
          className: styles.toastMessage,
        }}
      />
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <h2 className={styles.cartTitle}>{AuthConstants.MY_CART}</h2>
        {cartItems.length === 0 ? (
          <p>{AuthConstants.CART_EMPTY}</p>
        ) : (
          <>
            <ul className={styles.ul}>
              {cartItems.map((item) => {
                const price = parseFloat(item.price.replace("$", ""));
                const totalPrice = (price * item.quantity).toFixed(2);

                return (
                  <li key={item.id} className={styles.cartItems}>
                    <img
                      src={getImageUrl(item.image)}
                      alt={item.name}
                      className={styles.image}
                    />
                    <div className={styles.name}>{item.name}</div>
                    <div className={styles.price}>${totalPrice}</div>
                    <div className={styles.quantityControls}>
                      <button
                        className={styles.decrement}
                        onClick={() => handleDecrement(item.id, item.quantity)}
                      >
                        {AuthConstants.DECRE_BUTTON}
                      </button>
                      <span className={styles.quantity}>{item.quantity}</span>
                      <button
                        className={styles.increment}
                        onClick={() => handleIncrement(item.id, item.quantity)}
                      >
                        {AuthConstants.INCRE_BUTTON}
                      </button>
                    </div>
                    <img
                      src={getImageUrl("delete/delete.png")}
                      alt="DeleteImg"
                      className={styles.removeButton}
                      onClick={() => removeFromCart(item.id)}
                    ></img>
                  </li>
                );
              })}
            </ul>
            <div className={styles.totalAmount}>
              <p>
                {AuthConstants.TOTAL}
                {totalAmount}
              </p>

              <button className={styles.placeOrder} onClick={handlePlaceOrder}>
                {AuthConstants.PLACE_ORDER}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartModal;
