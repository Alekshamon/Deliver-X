/* eslint-disable import/no-unresolved */
import React, { useState } from "react";
import menuItems from "../../../menuItems.json";
import Card from "./Card/Card";

import "./cardlist.css";

export default function CardList() {
  const [items] = useState(menuItems.items);
  return (
    <div className="app">
      <Card items={items} />
    </div>
  );
}
