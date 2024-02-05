import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import iconeCart from "../../assets/icones/cart-large-2-svgrepo-com.svg";
import "./cartLink.css";

export default function CartLink({ cart }) {
  console.info("cart", cart);

  const navigate = useNavigate();
  localStorage.setItem("cart", JSON.stringify(cart));
  const redirectionPanier = () => {
    navigate("/panier");
  };
  return (
    <button
      type="submit"
      onClick={() => redirectionPanier(cart)}
      className={`cart-link ${cart.length ? "cart-link-open" : ""} `}
    >
      <div className="cart-counter">{cart.length}</div>
      <img src={iconeCart} alt="panier" />
    </button>
  );
}
CartLink.propTypes = {
  cart: PropTypes.shape([]).isRequired,
};
