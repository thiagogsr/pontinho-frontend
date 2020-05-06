import React from "react";
import { ReactComponent as Card10C } from "./10C.svg";
import { ReactComponent as Card10D } from "./10D.svg";
import { ReactComponent as Card10H } from "./10H.svg";
import { ReactComponent as Card10S } from "./10S.svg";
import { ReactComponent as Card2C } from "./2C.svg";
import { ReactComponent as Card2D } from "./2D.svg";
import { ReactComponent as Card2H } from "./2H.svg";
import { ReactComponent as Card2S } from "./2S.svg";
import { ReactComponent as Card3C } from "./3C.svg";
import { ReactComponent as Card3D } from "./3D.svg";
import { ReactComponent as Card3H } from "./3H.svg";
import { ReactComponent as Card3S } from "./3S.svg";
import { ReactComponent as Card4C } from "./4C.svg";
import { ReactComponent as Card4D } from "./4D.svg";
import { ReactComponent as Card4H } from "./4H.svg";
import { ReactComponent as Card4S } from "./4S.svg";
import { ReactComponent as Card5C } from "./5C.svg";
import { ReactComponent as Card5D } from "./5D.svg";
import { ReactComponent as Card5H } from "./5H.svg";
import { ReactComponent as Card5S } from "./5S.svg";
import { ReactComponent as Card6C } from "./6C.svg";
import { ReactComponent as Card6D } from "./6D.svg";
import { ReactComponent as Card6H } from "./6H.svg";
import { ReactComponent as Card6S } from "./6S.svg";
import { ReactComponent as Card7C } from "./7C.svg";
import { ReactComponent as Card7D } from "./7D.svg";
import { ReactComponent as Card7H } from "./7H.svg";
import { ReactComponent as Card7S } from "./7S.svg";
import { ReactComponent as Card8C } from "./8C.svg";
import { ReactComponent as Card8D } from "./8D.svg";
import { ReactComponent as Card8H } from "./8H.svg";
import { ReactComponent as Card8S } from "./8S.svg";
import { ReactComponent as Card9C } from "./9C.svg";
import { ReactComponent as Card9D } from "./9D.svg";
import { ReactComponent as Card9H } from "./9H.svg";
import { ReactComponent as Card9S } from "./9S.svg";
import { ReactComponent as CardAC } from "./AC.svg";
import { ReactComponent as CardAD } from "./AD.svg";
import { ReactComponent as CardAH } from "./AH.svg";
import { ReactComponent as CardAS } from "./AS.svg";
import { ReactComponent as CardJC } from "./JC.svg";
import { ReactComponent as CardJD } from "./JD.svg";
import { ReactComponent as CardJH } from "./JH.svg";
import { ReactComponent as CardJS } from "./JS.svg";
import { ReactComponent as CardKC } from "./KC.svg";
import { ReactComponent as CardKD } from "./KD.svg";
import { ReactComponent as CardKH } from "./KH.svg";
import { ReactComponent as CardKS } from "./KS.svg";
import { ReactComponent as CardQC } from "./QC.svg";
import { ReactComponent as CardQD } from "./QD.svg";
import { ReactComponent as CardQH } from "./QH.svg";
import { ReactComponent as CardQS } from "./QS.svg";
import { ReactComponent as Card1B } from "./1B.svg";
import { ReactComponent as Card2B } from "./2B.svg";

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
const HEIGHT = 168;

export default ({ value, suit, width = WIDTH, height = HEIGHT, className }) => {
  const Component = cards[value][suit];

  return <Component width={width} height={height} className={className} />;
};

export const Back = ({ color, className }) => {
  switch (color) {
    case "black":
      return <Card1B width={WIDTH} height={HEIGHT} className={className} />;

    case "red":
    default:
      return <Card2B width={WIDTH} height={HEIGHT} className={className} />;
  }
};
