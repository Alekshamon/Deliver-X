import { useState, useContext } from "react";
import PropTypes from "prop-types";
import "./Livraison.css";
import {
  GeoapifyGeocoderAutocomplete,
  GeoapifyContext,
} from "@geoapify/react-geocoder-autocomplete";
import { userContext } from "../../contexts/userContexts";
import CestParti from "../Cest-parti/CestParti";

export default function Livraison({ deliver }) {
  const [selected, setSelected] = useState(false);
  const { setUser } = useContext(userContext);

  const [address, setAddress] = useState({});
  console.info(address);
  const handleClick = () => {
    setUser(JSON.parse(localStorage.getItem("address")));
  };
  const placeSelect = (value) => {
    setSelected(true);
    setAddress(value);
    localStorage.setItem(
      "address 1",
      JSON.stringify(value.properties.address_line1)
    );
    localStorage.setItem(
      "address 2",
      JSON.stringify(value.properties.address_line2)
    );
  };

  return (
    <>
      <div className={deliver ? "showLivraison" : "hideLivraison"}>
        <GeoapifyContext apiKey="61da4cbff54d4c8d9c92cba1462f7047">
          <GeoapifyGeocoderAutocomplete placeSelect={placeSelect} />
        </GeoapifyContext>
      </div>
      <CestParti selected={selected} handleClick={handleClick} />
    </>
  );
}
Livraison.propTypes = {
  deliver: PropTypes.bool.isRequired,
};
