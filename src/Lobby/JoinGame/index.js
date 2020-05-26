import React from "react";
import { connect } from "react-redux";
import { changeJoinGameForm, joinGame } from "./actions";
import { Button, Fieldset, Input, Label } from "../styled";

const JoinGame = ({ changeJoinGameForm, joinGame }) => (
  <form
    onSubmit={(e) => {
      joinGame();
      e.preventDefault();
    }}
  >
    <Fieldset>
      <Label id="join_game_id">Código do jogo</Label>
      <Input
        type="text"
        id="join_game_id"
        name="gameId"
        onChange={changeJoinGameForm}
      />
    </Fieldset>

    <Fieldset>
      <Label htmlFor="join_game_name">Seu nome</Label>
      <Input
        type="text"
        id="join_game_name"
        name="name"
        onChange={changeJoinGameForm}
      />
    </Fieldset>

    <Button type="submit" value="Entrar" />
  </form>
);

const mapDispatchToProps = {
  changeJoinGameForm,
  joinGame,
};

export default connect(null, mapDispatchToProps)(JoinGame);
