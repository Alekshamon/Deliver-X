import "./logoanim.css";
import logo from "../../../../assets/logoP2/LogoP2_large.png";

export default function LogoAnim() {
  return (
    <div className="container-logo-anim">
      <img className="logo-anim" src={logo} alt="Logo Deliver X" />

      <div className="star" />
    </div>
  );
}
