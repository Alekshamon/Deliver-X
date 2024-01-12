import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import close from "../../assets/icones/close-lg-svgrepo-com.svg";
import menuBurger from "../../assets/icones/hamburger-menu-svgrepo-com.svg";
import cart from "../../assets/icones/cart-large-2-svgrepo-com.svg";
import logoSmall from "../../assets/logoP2/LogoP2_small.png";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState();
  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };
  /* fonction pour que quand le logo est cliqué il ferme le menu si celui ci est ouvert  */
  const handleMenuLogo = () => {
    setOpenMenu(false);
  };

  return (
    <nav>
      <div className="blockLogo">
        <Link to="/" onClick={handleMenuLogo}>
          <img src={logoSmall} alt="logo" />
        </Link>
        <h3 className={openMenu ? "titleVisible" : ""}>Deliver X</h3>
      </div>
      <ul className={openMenu ? "linkVisible" : ""}>
        <li>
          <Link to="/" onClick={handleMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/menu" onClick={handleMenu}>
            Menu
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={handleMenu}>
            Contact
          </Link>
        </li>
        <li>
          <Link to="/panier" onClick={handleMenu}>
            Mon Panier
            <img src={cart} alt="panier" />
            <div className="cart-counter-nav">1</div>
            {/* si cart partager dans app : ajouter {cart.length} = compte du nombre de  produit dans le panier */}
          </Link>
        </li>
      </ul>
      <h3 className={`titre ${openMenu ? "titre2" : ""}`}>Deliver X</h3>
      <div>
        <button type="button" onClick={handleMenu}>
          <img
            src={openMenu ? close : menuBurger}
            /* le menu est il ouvert (true) ? si oui(true) exècute l'instruction 1, si non (false) exècute l'instruction 2 ;
           par défault à null (donc false, exécute la deuxième instruction)
           instruction 1 : src = chemin vers icône close (s'affiche quand le menu est ouvert)
           instruction 2 : src = chemin vers icône menu burger (s'affiche quand le menu est fermé)
           */
            alt="close bar ou menu burger"
          />
        </button>
      </div>
    </nav>
  );
}
