import React from "react";
import PropTypes from "prop-types";

export default function CartQuantity({ product, products, setProducts }) {
  const incrementeProduct = () => {
    const incrementeQuantity = products.map((item) => {
      if (item.id === product.id) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return item;
    });
    setProducts(incrementeQuantity);
  };

  const decrementeProduct = () => {
    const decrementeQuantity = products.map((item) => {
      if (product.quantity > 1 && item.id === product.id) {
        return { ...product, quantity: product.quantity - 1 };
      }
      return item;
    });
    setProducts(decrementeQuantity);
  };
  return (
    <div className="product-counter-and-price">
      <div className="product-counter">
        <button
          type="button"
          className="cart-btn-moins"
          onClick={() => decrementeProduct(product)}
        >
          -
        </button>
        <p className="counter-value">{product.quantity}</p>
        <button
          type="button"
          className="cart-btn-plus"
          onClick={() => incrementeProduct(product)}
        >
          +
        </button>
      </div>
      <p className="cart-price">
        {(parseFloat(product.prix) * product.quantity).toFixed(2)} €
      </p>
    </div>
  );
}

CartQuantity.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    prix: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  products: PropTypes.shape([]).isRequired,
  setProducts: PropTypes.func.isRequired,
};
