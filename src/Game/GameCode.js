import React, { useState } from "react";
import { connect } from "react-redux";
import copy from "copy-to-clipboard";
import { Copy } from "./styled";

const GameCode = ({ gameId }) => {
  const [buttonText, setButtonText] = useState("copiar");

  return (
    <>
      <div>
        <strong>Código do jogo:</strong> {gameId}
        <Copy
          onClick={() =>
            copy(gameId, {
              format: "text/plain",
              onCopy: (a) => {
                setButtonText("copiado");
                setTimeout(() => setButtonText("copiar"), 3000);
              },
            })
          }
        >
          {buttonText}
        </Copy>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    gameId: state.game.id,
  };
};

export default connect(mapStateToProps)(GameCode);
