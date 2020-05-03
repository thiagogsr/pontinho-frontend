import React from "react";
import { Container, Player } from "./styled";

const Broke = () => (
  <span role="img" aria-label="Estourou">
    💣
  </span>
);

export default () => (
  <Container>
    <Player>
      <div>Thiago</div>
      <div>99</div>
      <div>7 cartas</div>
      <div>
        <Broke />
      </div>
    </Player>

    <Player>
      <div>Thiago</div>
      <div>99</div>
      <div>7 cartas</div>
      <div></div>
    </Player>

    <Player>
      <div>Thiago</div>
      <div>99</div>
      <div>7 cartas</div>
      <div>
        <Broke />
        <Broke />
        <Broke />
      </div>
    </Player>
  </Container>
);
