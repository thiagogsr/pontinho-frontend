import React from "react";
import { Container, MatchPlayer } from "./styled";

export default () => (
  <Container>
    <MatchPlayer>
      <div>Thiago</div>
      <div>99</div>
      <div>7 cartas</div>
      <div>X</div>
    </MatchPlayer>

    <MatchPlayer>
      <div>Thiago</div>
      <div>99</div>
      <div>7 cartas</div>
      <div></div>
    </MatchPlayer>

    <MatchPlayer>
      <div>Thiago</div>
      <div>99</div>
      <div>7 cartas</div>
      <div>XXX</div>
    </MatchPlayer>
  </Container>
);
