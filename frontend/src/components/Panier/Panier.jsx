import React, { useState } from "react";
import "./panier.css";
import { Link } from "react-router-dom";
import arrow from "../../assets/icones/round-alt-arrow-left-svgrepo-com.svg";
import CartTotal from "../cartTotal/CartTotal";
import CartDelete from "../cartDelete/CartDelete";
import CartQuantity from "../cartQuantity/CartQuantity";

export default function Panier() {
  const [products, setProducts] = useState([
    {
      id: 1,
      type: "hamburger",
      name: "burger Rome",
      prix: 10,
      img: "./src/assets/img-menu/burger-rome.png",
      quantity: 1,
    },
    {
      id: 2,
      type: "hamburger",
      name: "burger Amsterdam",
      prix: 12,
      img: "./src/assets/img-menu/burger-amsterdam.png",
      quantity: 1,
    },
    {
      id: 3,
      type: "boisson",
      name: "New York Milkshake",
      prix: 15,
      img: "./src/assets/img-menu/soda3.webp",
      quantity: 1,
    },
    {
      id: 4,
      type: "meal Deal",
      name: "Meal Deal Paris",
      prix: 10,
      img: "./src/assets/img-menu/meal_deal_paris.png",
      quantity: 1,
    },
    {
      id: 5,
      type: "meal Deal",
      name: "Meal Deal Vienna",
      prix: 10,
      img: "./src/assets/img-menu/meal-deal-vienna.png",
      quantity: 1,
    },
    {
      id: 6,
      type: "burger",
      name: "burger Lisbon",
      prix: 15,
      img: "./src/assets/img-menu/burger-lisbon.png",
      quantity: 1,
    },
    {
      id: 7,
      type: "boisson",
      name: "New York Milkshake",
      prix: 15,
      img: "./src/assets/img-menu/soda1.webp",
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
                <img src={product.img} alt="produit sélectionner" />
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
