import React, { useState } from "react";
import { connect } from "react-redux";
import copy from "copy-to-clipboard";
import { Copy } from "./styled";

const GameCode = ({ gameId }) => {
  const [copyButton, setCopyButton] = useState("copiar");

  return (
    <>
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
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    gameId: state.game.id,
  };
};

export default connect(mapStateToProps)(GameCode);
