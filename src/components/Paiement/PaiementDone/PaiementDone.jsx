import "./paiementdone.css";
import LogoAnim from "./Logo-anim/LogoAnim";

export default function PaiementDone() {
  const getRandomNumber = (min, max) => {
    let minValue = min;
    let maxValue = max;
    minValue = Math.ceil(minValue);
    maxValue = Math.floor(maxValue);
    return Math.floor(Math.random() * (maxValue - minValue)) + minValue;
  };

  return (
    <main className="paiement-done-container">
      <h1>Merci pour votre commande n°{getRandomNumber(1255, 38540)} !</h1>

      <p className="first-p">L'équipe prépare vos burgers avec soin.</p>
      <p className="second-p">
        On se retrouve très vite dans votre point de retrait.
      </p>
      <LogoAnim />
    </main>
  );
}
