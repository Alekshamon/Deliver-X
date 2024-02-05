import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export default function CartTotal({ products }) {
  const navigate = useNavigate();

  const totalPriceByItem = products.map(
    ({ prix, quantity }) => parseFloat(prix) * quantity
  );
  const totalCart = totalPriceByItem.reduce((a, b) => a + b, 0);
  localStorage.setItem("totalCart", JSON.stringify(totalCart));
  console.info("totalCart", totalCart);

  const redirectionPaiement = () => {
    navigate("/paiement");
  };

  return (
    <div className="bottom-block">
      <div className="cart-total">
        <p>Total</p>
        <p>{totalCart.toFixed(2)} €</p>
      </div>
      <button
        type="button"
        className="valider"
        onClick={() => redirectionPaiement()}
      >
        Valider
      </button>
    </div>
  );
}
CartTotal.propTypes = {
  products: PropTypes.shape([]).isRequired,
};
