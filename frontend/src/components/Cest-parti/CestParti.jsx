import { useNavigate } from "react-router-dom";
import "./cestparti.css";

// eslint-disable-next-line react/prop-types
export default function CestParti({ selected }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/menu");
  };
  return (
    <div className="containerLetsGo">
      <button
        type="button"
        onClick={handleClick}
        className={selected ? "btnLetsGo" : "hideBtnLetsGo"}
      >
        C'est parti !
      </button>
    </div>
  );
}
