import "./App.css";
import { useState } from "react";
import restaurants from "./restaurants.json";
import ClickOrDeliver from "./components/ClickOrDeliver/ClickOrDeliver";
import Logo from "./components/Logo/Logo";

function App() {
  const [restaurant] = useState(restaurants);

  return (
    <main className="main-App">
      <section className="main-App-section">
        <h1 className="main-App-h1">Prêt à commander ton burger&nbsp;?</h1>
        <ClickOrDeliver restaurant={restaurant} />
      </section>
      <Logo />
    </main>
  );
}

export default App;
