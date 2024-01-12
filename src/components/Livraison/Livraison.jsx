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
  const [dataAddress, setDataAddress] = useState({});
  const [address, setAddress] = useState({});
  const handleClick = (e) => {
    const { address_line1, value } = e.target;
    setDataAddress({ ...dataAddress, [address_line1]: value });
    localStorage.setItem("address", JSON.stringify(address));
    setUser(JSON.parse(localStorage.getItem("address")));
  };
  const placeSelect = (value) => {
    setSelected(true);
    setAddress(value);
    // setDataAddress({...value});
    // console.log('dataAddress', address);
    // console.log("dataAddress2", value);
  };

  // function placeSelect(value) {
  //   setSelected(true);
  //   setDataAddress(value);
  //   console.log('dataAddress', dataAddress);
  // };

  // console.info("accepted", accepted);

  // useEffect(() => {
  //   if (accepted && inputValue > 0) {
  //     fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${inputValue}&apiKey=61da4cbff54d4c8d9c92cba1462f7047`)
  //       .then((res) => res.json())
  //       .then((res) => setData(res))
  //       .catch((err) => console.info(err));
  //     // .then(response => response.json())
  //     // .then(result => console.log(result))
  //     // .catch(error => console.log('error', error));
  //   }
  // }, [accepted, inputValue]);
  // console.info("data.features :", data.features);
  // console.info("data 1 =>", data.features[0].properties.label);
  // console.info("data 2 =>", data.features[1].properties.label);
  // console.info("data 3 =>", data.features[2].properties.label);
  // console.info("data 4 =>", data.features[3].properties.label);
  // console.info("data 5 =>", data.features[4].properties.label);
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
