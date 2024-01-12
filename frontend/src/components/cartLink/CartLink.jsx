import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import iconeCart from "../../assets/icones/cart-large-2-svgrepo-com.svg";
import "./cartLink.css";

export default function CartLink({ cart }) {
  console.info("cart", cart);
  return (
    <Link
      to="/panier"
      className={`cart-link ${cart.length ? "cart-link-open" : ""} `}
    >
      <div className="cart-counter">{cart.length}</div>
      <img src={iconeCart} alt="panier" />
    </Link>
  );
}
CartLink.propTypes = {
  cart: PropTypes.shape([]).isRequired,
};
