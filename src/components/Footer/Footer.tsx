import React, { useState } from "react";
import { Link } from "react-router-dom";
import CartModal from "../Cart/Cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedin,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./Footer.module.scss";

const Footer = () => {
  const [isCartModalOpen, setCartModalOpen] = useState(false);

  const handleOpenCartModal = () => {
    setCartModalOpen(true);
  };

  const handleCloseCartModal = () => {
    setCartModalOpen(false);
  };
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.container}>
        <div className={styles.exclusive}>
          <h3>Exclusive</h3>
          <h4>Subscribe</h4>
          <p>
            Get 10% off your <br /> first order
          </p>
        </div>
        <div>
          <h3>Support</h3>
          <ul>
            <li>
              111 Bijoy sarani, Dhaka, <br />
              DH 1515, Bangladesh.
            </li>
            <li>exclusive@gmail.com</li>
            <li>+88015-88888-9999</li>
          </ul>
        </div>
        <div>
          <h3>Account</h3>
          <ul>
            <li>My Account</li>
            <Link to="/login" className={styles.link}>
              <li>Login / Register</li>
            </Link>
            <li onClick={handleOpenCartModal}>Cart</li>
            <li>Shop</li>
          </ul>
        </div>
        <div>
          <h3>Quick Link</h3>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <CartModal isOpen={isCartModalOpen} onClose={handleCloseCartModal} />
      <div className={styles.fontAwesomeIcon}>
        <ul className={styles.listedFont}>
          <li className={styles.icon}>
            <a href="https://in.linkedin.com/" target="blank">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li className={styles.icon}>
            <a href="https://www.facebook.com/" target="blank">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </li>
          <li className={styles.icon}>
            <a href="https://x.com/i/flow/login" target="blank">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li className={styles.icon}>
            <a href="https://www.instagram.com/" target="blank">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
