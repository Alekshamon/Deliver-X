import React from "react";
import "./footer.css";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return <footer> {year} - Copyright © Deliver X | KEEP CALM REACT </footer>;
}
