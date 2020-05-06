import React from "react";
import JoinGame from "./JoinGame";
import NewGame from "./NewGame";

import { Container, Side, Title } from "./styled";

const Lobby = () => (
  <Container>
    <Side>
      <Title>Novo jogo</Title>
      <NewGame />
    </Side>

    <Side>
      <Title>Entrar em jogo já criado</Title>
      <JoinGame />
    </Side>
  </Container>
);

export default Lobby;
