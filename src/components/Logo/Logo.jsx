import "./Logo.css";
import logoburger from "../../assets/logoP2/LogoP2_large.png";

export default function Logo() {
  return (
    <div className="container-logo">
      <img className="logoSection" src={logoburger} alt="Logo Deliver X" />
    </div>
  );
}
