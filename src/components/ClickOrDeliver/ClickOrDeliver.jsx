/* eslint-disable react/prop-types */
import React, { useState, useContext } from "react";
import "./ClickOrDeliver.css";
import Cities from "../Cities/Cities";
import Livraison from "../Livraison/Livraison";
import { userContext } from "../../contexts/userContexts";

export default function ClickOrDeliver({ restaurant }) {
  // state bouton Click'n Collect
  const [clickCollect, setClickCollect] = useState(false);

  // state bouton Livraison
  const [deliver, setDeliver] = useState(false);

  const { setUser } = useContext(userContext);

  // fonction onClick bouton Click and Collect
  const handleClickCollect = () => {
    const newStateCollect = !clickCollect;
    const newStateDeliver2 = false;
    setClickCollect(newStateCollect);
    setDeliver(false);
    localStorage.setItem("userClickcollect", JSON.stringify(newStateCollect));
    localStorage.setItem("userDeliver", JSON.stringify(newStateDeliver2));
    setUser(JSON.parse(localStorage.getItem("userClickcollect")));
  };

  // foncton onClick bouton Livraison
  const handleDeliver = () => {
    const newStateDeliver = !deliver;
    const newStateCollect2 = false;
    setDeliver(newStateDeliver);
    setClickCollect(false);
    localStorage.setItem("userDeliver", JSON.stringify(newStateDeliver));
    localStorage.setItem("userClickcollect", JSON.stringify(newStateCollect2));
    setUser(JSON.parse(localStorage.getItem("userDeliver")));
  };

  return (
    <>
      <h2 className="deliverH2">Tu es plutôt...</h2>
      <section className="btnClickDeliver">
        <button
          type="button"
          className={
            clickCollect
              ? "clickCollect-selected button-width"
              : "btn-cod button-width"
          }
          onClick={handleClickCollect}
        >
          Click and Collect
        </button>
        <button
          type="button"
          className={
            deliver ? "deliver-selected button-width" : "btn-cod button-width"
          }
          onClick={handleDeliver}
        >
          Livraison
        </button>
      </section>
      <Cities restaurant={restaurant} clickCollect={clickCollect} />
      <Livraison deliver={deliver} />
    </>
  );
}
