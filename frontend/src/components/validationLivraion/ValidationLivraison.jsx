import React from "react";
import { Link } from "react-router-dom";
import "./validationLivraison.css";
import logoBurger from "../../assets/logoP2/LogoP2_large.png";
import scooter from "../../assets/icones/scooter01.png";

export default function ValidationLivraison() {
  const getRandomNumber = (min, max) => {
    let minValue = min;
    let maxValue = max;
    minValue = Math.ceil(minValue);
    maxValue = Math.floor(maxValue);
    return Math.floor(Math.random() * (maxValue - minValue)) + minValue;
  };

  const userAddress = JSON.parse(localStorage.getItem("address 1"));
  const userAddress2 = JSON.parse(localStorage.getItem("address 2"));
  return (
    <main className="message-container">
      <Link to="/">
        <img src={logoBurger} alt="" />
      </Link>
      <h1>Félicitations !</h1>
      <h2>Votre commande n°{getRandomNumber(1255, 38540)} est en route !</h2>
      <h3>
        Le livreur vous retrouve à l'adresse:
        <br />
        {`${userAddress} ${userAddress2}`}
      </h3>
      <img src={logoBurger} alt="" />
      <img src={scooter} alt="" />
    </main>
  );
}
