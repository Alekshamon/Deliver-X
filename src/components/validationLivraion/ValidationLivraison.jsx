import React from "react";
import { Link } from "react-router-dom";
import "./validationLivraison.css";
import logoBurger from "../../assets/logoP2/LogoP2_large.png";
import scooter from "../../assets/icones/scooter01.png";

export default function ValidationLivraison() {
  return (
    <main className="message-container">
      <Link to="/">
        <img src={logoBurger} alt="" />
      </Link>
      <h1>Félicitations !</h1>
      <h2>Votre commande est en route !</h2>
      <img src={logoBurger} alt="" />
      <img src={scooter} alt="" />
    </main>
  );
}
