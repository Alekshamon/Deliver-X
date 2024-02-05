import React, { useState } from "react";
import PropTypes from "prop-types";
import menuItems from "../../../../menuItems.json";
import "../../../cartLink/cartLink.css";
import "./card.css";
import CartLink from "../../../cartLink/CartLink";

export default function Card() {
  const cartUpdated = JSON.parse(localStorage.getItem("cartUpdated"));

  const [cart, setCart] = useState([...cartUpdated]);
  const addToCart = (item) => {
    const itemInCart = cart.find((cartItem) => cartItem.id === item.id);

    if (itemInCart) {
      const newCart = cart.map((cartItem) => {
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        }
        return cartItem;
      });
      setCart(newCart);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [{ items }] = useState(menuItems);
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // new Set() élimine automatiquement les doublons, laissant uniquement les catégories uniques.
  const uniqueCategories = Array.from(new Set(items.map((item) => item.type)));

  const filteredItems =
    selectedCategory === "All"
      ? items
      : items.filter((item) => item.type === selectedCategory);

  console.info("cart", cart);
  console.info("setCart", setCart);

  return (
    <div>
      <div className="category-filter">
        <button
          className="button-filter"
          type="button"
          onClick={() => handleCategoryChange("All")}
        >
          Tous
        </button>
        {uniqueCategories.map((category) => (
          <button
            className="button-filter"
            type="button"
            key={category}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <main className="cards-all">
        {filteredItems.map((item) => (
          <button
            className="cards"
            type="submit"
            key={item.id}
            onClick={() => addToCart(item)}
          >
            <div className="card-img">
              <img src={item.img} alt={item.name} />
            </div>
            <div className="info-product">
              <div className="name-and-price">
                <div className="card-name">{item.name}</div>
                <span className="card-price">{item.prix}</span>
              </div>
              <div
                className="button"
                // type="submit"
                // onClick={() => addToCart(item)}
              >
                Ajouter au panier
              </div>
            </div>
          </button>
        ))}
        <CartLink cart={cart} />
      </main>
    </div>
  );
}

Card.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    prix: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
};
