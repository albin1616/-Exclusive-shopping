import React, { useState } from "react";
import { getImageUrl } from "../../utils/utils";
import CustomInput from "../CustumInput/CustomInput";
import TopHeader from "../TopHeader/TopHeader";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import CartModal from "../Cart/Cart";
import { AuthConstants } from "../../constants/AuthConstant";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [menu, setMenu] = useState<string>("home");
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
  const { cartItems } = useCart();
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <TopHeader />
      <nav className={styles.navbar}>
        <div className={styles.menu}>
          <img
            className={styles.menuBtn}
            src={
              menuOpen
                ? getImageUrl("navbar/closeIcon.png")
                : getImageUrl("navbar/menuIcon.png")
            }
            alt="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
          />
          <h3 className={styles.title}>{AuthConstants.EXCLUSIVE}</h3>
          <ul
            className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
            onClick={() => setMenuOpen(false)}
          >
            <li
              onClick={() => {
                setMenu("home");
              }}
            >
              <Link className={styles.navLink} to="/">
                {AuthConstants.HOME}
              </Link>
              {menu === "home" && window.innerWidth > 900 && <hr />}
            </li>
            <li
              onClick={() => {
                setMenu("contact");
              }}
            >
              <Link className={styles.navLink} to="/contact">
                {AuthConstants.CONTACT}
              </Link>
              {menu === "contact" && window.innerWidth > 900 && <hr />}
            </li>
            <li
              onClick={() => {
                setMenu("about");
              }}
            >
              <Link className={styles.navLink} to="/about">
                {AuthConstants.ABOUT}
              </Link>
              {menu === "about" && window.innerWidth > 900 && <hr />}
            </li>
          </ul>
        </div>
        <div className={styles.navCart}>
          <CustomInput
            type="text"
            name="search"
            placeholder="What are you looking for ?"
            className={styles.searchbar}
          />
          <div className={styles.cartContainer} onClick={openModal}>
            <img src={getImageUrl("navbar/AddToCart.png")} alt="Cart" />
            <div className={styles.navCartCount}>{cartItems.length}</div>
          </div>
        </div>
      </nav>
      <CartModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Navbar;
