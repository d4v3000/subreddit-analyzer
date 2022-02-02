import React from "react";
import Table from "./Table";
import Introduction from "./Introduction";

function Hero() {
  return (
    <div className="container items-center mx-auto">
      <Introduction />
      <Table />
    </div>
  );
}

export default Hero;
