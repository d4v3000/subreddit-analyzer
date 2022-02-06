import React from "react";
import Hero from "./hero-section/Hero";
import Information from "./Information";

function Homepage() {
  return (
    <div className="container items-center mx-auto">
      <Hero />
      <Information />
    </div>
  );
}

export default Homepage;
