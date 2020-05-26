import React from "react";
import { connect } from "react-redux";
import { setNewGameName, setNewGameBettingTable, createGame } from "./actions";
import { Button, Fieldset, GroupedInput, Input, Label } from "../styled";

const NewGame = ({ setNewGameName, setNewGameBettingTable, createGame }) => (
  <form
    onSubmit={(e) => {
      createGame();
      e.preventDefault();
    }}
  >
    <Fieldset>
      <Label htmlFor="new_game_name">Seu nome</Label>
      <Input
        type="text"
        id="new_game_name"
        name="name"
        onChange={setNewGameName}
      />
    </Fieldset>

    <Fieldset>
      <Label>Tabela de aposta (em centavos)</Label>
      <GroupedInput>
        <Input
          type="number"
          placeholder="Sem X"
          name="0"
          onChange={setNewGameBettingTable}
        />
        <Input
          type="number"
          placeholder="X"
          name="1"
          onChange={setNewGameBettingTable}
        />
        <Input
          type="number"
          placeholder="XX"
          name="2"
          onChange={setNewGameBettingTable}
        />
        <Input
          type="number"
          placeholder="XXX"
          name="3"
          onChange={setNewGameBettingTable}
        />
        <Input
          type="number"
          placeholder="XXXX"
          name="4"
          onChange={setNewGameBettingTable}
        />
        <Input
          type="number"
          placeholder="XXXXX"
          name="5"
          onChange={setNewGameBettingTable}
        />
      </GroupedInput>
    </Fieldset>

    <Button type="submit" value="Criar jogo" />
  </form>
);

const mapDispatchToProps = {
  setNewGameName,
  setNewGameBettingTable,
  createGame,
};

export default connect(null, mapDispatchToProps)(NewGame);
