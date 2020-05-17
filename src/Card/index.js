import React from "react";
import { ReactComponent as Card10C } from "./deck/10C.svg";
import { ReactComponent as Card10D } from "./deck/10D.svg";
import { ReactComponent as Card10H } from "./deck/10H.svg";
import { ReactComponent as Card10S } from "./deck/10S.svg";
import { ReactComponent as Card2C } from "./deck/2C.svg";
import { ReactComponent as Card2D } from "./deck/2D.svg";
import { ReactComponent as Card2H } from "./deck/2H.svg";
import { ReactComponent as Card2S } from "./deck/2S.svg";
import { ReactComponent as Card3C } from "./deck/3C.svg";
import { ReactComponent as Card3D } from "./deck/3D.svg";
import { ReactComponent as Card3H } from "./deck/3H.svg";
import { ReactComponent as Card3S } from "./deck/3S.svg";
import { ReactComponent as Card4C } from "./deck/4C.svg";
import { ReactComponent as Card4D } from "./deck/4D.svg";
import { ReactComponent as Card4H } from "./deck/4H.svg";
import { ReactComponent as Card4S } from "./deck/4S.svg";
import { ReactComponent as Card5C } from "./deck/5C.svg";
import { ReactComponent as Card5D } from "./deck/5D.svg";
import { ReactComponent as Card5H } from "./deck/5H.svg";
import { ReactComponent as Card5S } from "./deck/5S.svg";
import { ReactComponent as Card6C } from "./deck/6C.svg";
import { ReactComponent as Card6D } from "./deck/6D.svg";
import { ReactComponent as Card6H } from "./deck/6H.svg";
import { ReactComponent as Card6S } from "./deck/6S.svg";
import { ReactComponent as Card7C } from "./deck/7C.svg";
import { ReactComponent as Card7D } from "./deck/7D.svg";
import { ReactComponent as Card7H } from "./deck/7H.svg";
import { ReactComponent as Card7S } from "./deck/7S.svg";
import { ReactComponent as Card8C } from "./deck/8C.svg";
import { ReactComponent as Card8D } from "./deck/8D.svg";
import { ReactComponent as Card8H } from "./deck/8H.svg";
import { ReactComponent as Card8S } from "./deck/8S.svg";
import { ReactComponent as Card9C } from "./deck/9C.svg";
import { ReactComponent as Card9D } from "./deck/9D.svg";
import { ReactComponent as Card9H } from "./deck/9H.svg";
import { ReactComponent as Card9S } from "./deck/9S.svg";
import { ReactComponent as CardAC } from "./deck/AC.svg";
import { ReactComponent as CardAD } from "./deck/AD.svg";
import { ReactComponent as CardAH } from "./deck/AH.svg";
import { ReactComponent as CardAS } from "./deck/AS.svg";
import { ReactComponent as CardJC } from "./deck/JC.svg";
import { ReactComponent as CardJD } from "./deck/JD.svg";
import { ReactComponent as CardJH } from "./deck/JH.svg";
import { ReactComponent as CardJS } from "./deck/JS.svg";
import { ReactComponent as CardKC } from "./deck/KC.svg";
import { ReactComponent as CardKD } from "./deck/KD.svg";
import { ReactComponent as CardKH } from "./deck/KH.svg";
import { ReactComponent as CardKS } from "./deck/KS.svg";
import { ReactComponent as CardQC } from "./deck/QC.svg";
import { ReactComponent as CardQD } from "./deck/QD.svg";
import { ReactComponent as CardQH } from "./deck/QH.svg";
import { ReactComponent as CardQS } from "./deck/QS.svg";
import { ReactComponent as BackDeck1 } from "./deck/1B.svg";
import { ReactComponent as BackDeck2 } from "./deck/2B.svg";

const cards = {
  "2": { clubs: Card2C, spades: Card2S, hearts: Card2H, diamonds: Card2D },
  "3": { clubs: Card3C, spades: Card3S, hearts: Card3H, diamonds: Card3D },
  "4": { clubs: Card4C, spades: Card4S, hearts: Card4H, diamonds: Card4D },
  "5": { clubs: Card5C, spades: Card5S, hearts: Card5H, diamonds: Card5D },
  "6": { clubs: Card6C, spades: Card6S, hearts: Card6H, diamonds: Card6D },
  "7": { clubs: Card7C, spades: Card7S, hearts: Card7H, diamonds: Card7D },
  "8": { clubs: Card8C, spades: Card8S, hearts: Card8H, diamonds: Card8D },
  "9": { clubs: Card9C, spades: Card9S, hearts: Card9H, diamonds: Card9D },
  "10": { clubs: Card10C, spades: Card10S, hearts: Card10H, diamonds: Card10D },
  J: { clubs: CardJC, spades: CardJS, hearts: CardJH, diamonds: CardJD },
  Q: { clubs: CardQC, spades: CardQS, hearts: CardQH, diamonds: CardQD },
  K: { clubs: CardKC, spades: CardKS, hearts: CardKH, diamonds: CardKD },
  A: { clubs: CardAC, spades: CardAS, hearts: CardAH, diamonds: CardAD },
};

const WIDTH = 120;

export default ({ value, suit, width = WIDTH, className, onClick }) => {
  const Component = cards[value][suit];

  return (
    <div onClick={onClick}>
      <Component width={width} className={className} />
    </div>
  );
};

export const Back = ({ deck, className, onClick }) => {
  switch (deck) {
    case 1:
      return (
        <div onClick={onClick}>
          <BackDeck1 width={WIDTH} className={className} />
        </div>
      );

    case 2:
    default:
      return (
        <div onClick={onClick}>
          <BackDeck2 width={WIDTH} className={className} />
        </div>
      );
  }
};
