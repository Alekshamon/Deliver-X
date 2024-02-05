import React, { useState, useEffect } from "react";
import "./panier.css";
import { Link } from "react-router-dom";
import arrow from "../../assets/icones/round-alt-arrow-left-svgrepo-com.svg";
import CartTotal from "../cartTotal/CartTotal";
import CartDelete from "../cartDelete/CartDelete";
import CartQuantity from "../cartQuantity/CartQuantity";

export default function Panier() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productsInCart = JSON.parse(localStorage.getItem("cart"));
    if (Array.isArray(productsInCart)) {
      setProducts([...productsInCart]);
    } else {
      setProducts([]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartUpdated", JSON.stringify(products));
  }, [products]);

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
