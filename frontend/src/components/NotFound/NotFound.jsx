import React from "react";
import "./notfound.css";

export default function NotFound() {
  return (
    <section className="page_404">
      <div className="container">
        <div className="four_zero_four_bg">
          <h1 className="text-center ">404</h1>
        </div>
        <div className="contant_box_404">
          <h3 className="h2">Looks like you're lost</h3>
          <p>the page you are looking for is not avaible!</p>
          <a href="/" className="link_404">
            Go to Home
          </a>
        </div>
      </div>
    </section>
  );
}
