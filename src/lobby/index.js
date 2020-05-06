import React from "react";
import { connect } from "react-redux";

import {
  setNewGameName,
  setNewGameBettingTable,
  createGame,
  changeJoinGameForm,
  joinGame,
} from "./actions";

import {
  Button,
  Container,
  Fieldset,
  GroupedInput,
  Input,
  Label,
  Side,
  Title,
} from "./styled";

const Lobby = ({
  setNewGameName,
  setNewGameBettingTable,
  changeJoinGameForm,
  joinGame,
}) => (
  <Container>
    <Side>
      <Title>Novo jogo</Title>

      <form onSubmit={createGame}>
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
    </Side>

    <Side>
      <Title>Entrar em jogo já criado</Title>

      <form onSubmit={joinGame}>
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
    </Side>
  </Container>
);

const mapDispatchToProps = {
  setNewGameName,
  setNewGameBettingTable,
  createGame,
  changeJoinGameForm,
  joinGame,
};

export default connect(null, mapDispatchToProps)(Lobby);
