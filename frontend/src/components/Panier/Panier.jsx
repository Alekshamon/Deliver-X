import React, { useState } from "react";
import "./panier.css";
import { Link } from "react-router-dom";
import arrow from "../../assets/icones/round-alt-arrow-left-svgrepo-com.svg";
import amsterdamMeal from "../../assets/img-menu/meal-deal-amsterdam.png";
import CartTotal from "../cartTotal/CartTotal";
import CartDelete from "../cartDelete/CartDelete";
import CartQuantity from "../cartQuantity/CartQuantity";

export default function Panier() {
  const [products, setProducts] = useState([
    {
      id: 1,
      type: "hamburger",
      name: "burger amsterdam",
      prix: 10,
      img: "../../assets/img-menu/meal-deal-amsterdam.png",
      quantity: 1,
    },
    {
      id: 2,
      type: "hamburger",
      name: "burger London",
      prix: 12,
      img: "../../assets/img-menu/meal-deal-amsterdam.png",
      quantity: 1,
    },
    {
      id: 3,
      type: "menu",
      name: "menu amsterdam",
      prix: 15,
      img: "../../assets/img-menu/meal-deal-amsterdam.png",
      quantity: 1,
    },
    {
      id: 4,
      type: "hamburger",
      name: "burger amsterdam",
      prix: 10,
      img: "../../assets/img-menu/meal-deal-amsterdam.png",
      quantity: 1,
    },
    {
      id: 5,
      type: "hamburger",
      name: "burger amsterdam",
      prix: 10,
      img: "../../assets/img-menu/meal-deal-amsterdam.png",
      quantity: 1,
    },
    {
      id: 6,
      type: "menu",
      name: "menu amsterdam",
      prix: 15,
      img: "../../assets/img-menu/meal-deal-amsterdam.png",
      quantity: 1,
    },
    {
      id: 7,
      type: "menu",
      name: "menu amsterdam",
      prix: 15,
      img: "../../assets/img-menu/meal-deal-amsterdam.png",
      quantity: 1,
    },
  ]);

  return (
    <main className="panier-main">
      <Link to="/menu" className="link-back">
        <img src={arrow} alt="flèche" />
        Revenir à ma commande
      </Link>
      <h2 className="panier-h2">Mon Panier</h2>
      <div className="cart-container">
        <div className="cart">
          {products.map((product) => (
            <div className="cart-product-container" key={product.id}>
              <div className="cart-product-image">
                <img src={amsterdamMeal} alt="produit sélectionner" />
              </div>
              <div className="block-product">
                <p className="cart-product-name">{product.name}</p>
                <div className="cart-product-and-remove">
                  <CartQuantity
                    product={product}
                    products={products}
                    setProducts={setProducts}
                  />
                  <CartDelete
                    product={product}
                    products={products}
                    setProducts={setProducts}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <CartTotal products={products} />
      </div>
    </main>
  );
}
