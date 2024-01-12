import React from "react";
import PropTypes from "prop-types";
import trash from "../../assets/icones/trash-bin-minimalistic-svgrepo-com.svg";

export default function CartDelete({ product, products, setProducts }) {
  const handleRemove = () => {
    const newProducts = products.filter((item) => item.id !== product.id);
    setProducts(newProducts);
    if (newProducts.length === 0) {
      // alert("Tu n'as plus rien à commander dans ton panier 😭😭😭");
      window.location.href = "/menu";
    }
  };

  return (
    <button
      className="cart-delete"
      type="button"
      onClick={() => handleRemove(product)}
    >
      <img src={trash} alt="supprimer" />
    </button>
  );
}

CartDelete.propTypes = {
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
