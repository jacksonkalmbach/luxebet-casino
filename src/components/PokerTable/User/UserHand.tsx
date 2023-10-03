import React from "react";
import Card from "../../Card/Card";

import { useSelector } from "react-redux";
import { selectUserHand } from "../../../store/features/game/cardsSlice";
import { selectIsFolded } from "../../../store/features/game/userGameSlice";
import { RootState } from "../../../store/store";

export default function UserHand() {
  const userHand = useSelector((state: RootState) => selectUserHand(state));
  const firstCard = userHand[0];
  const secondCard = userHand[1];
  const isFolded = useSelector((state: RootState) => selectIsFolded(state));

  return (
    <>
      {userHand.length > 0 && (
        <div>
          <div className="mr-10">
            <Card
              tilt="left"
              isFaceUp
              suit={firstCard.suit}
              value={firstCard.value}
              absolute
              isFolded={isFolded}
            />
          </div>
          <div className="ml-10">
            <Card
              tilt="right"
              isFaceUp
              suit={secondCard.suit}
              value={secondCard.value}
              absolute
              isFolded={isFolded}
            />
          </div>
        </div>
      )}
    </>
  );
}
