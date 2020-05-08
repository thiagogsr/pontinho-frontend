import React, { useState } from "react";
import { connect } from "react-redux";
import copy from "copy-to-clipboard";
import BettingTable from "./BettingTable";
import Players from "./Players";
import { Button, Copy, Container, Title } from "./styled";
import { useParams } from "react-router-dom";

const Game = ({ gameId }) => {
  const { playerId } = useParams();
  const [copyButton, setCopyButton] = useState("copiar");

  return (
    <Container>
      <Title>Pontinho</Title>

      <div>
        <strong>Código:</strong> {gameId}
        <Copy
          onClick={() =>
            copy(gameId, {
              onCopy: () => {
                setCopyButton("copiado");
                setTimeout(() => setCopyButton("copiar"), 3000);
              },
            })
          }
        >
          {copyButton}
        </Copy>
      </div>

      <Button>Iniciar partida</Button>

      <Title>Tabela de aposta</Title>
      <BettingTable />

      <Title>Jogadores</Title>
      <Players playerId={playerId} />
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    gameId: state.game.id,
  };
};

export default connect(mapStateToProps)(Game);
