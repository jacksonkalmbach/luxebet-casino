import React from "react";
import Card from "../Card/Card";

export default function CardPair() {
  return (
    <div>
      <div className="mr-10">
        <Card tilt="left" isFaceUp suit="clubs" value="2" absolute />
      </div>
      <div className="ml-10">
        <Card tilt="right" isFaceUp suit="hearts" value="5" absolute />
      </div>
    </div>
  );
}
