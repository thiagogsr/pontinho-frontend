import React from "react";
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

export default () => (
  <Container>
    <Side>
      <Title>Novo jogo</Title>
      <form>
        <Fieldset>
          <Label>Seu nome</Label>
          <Input type="text" />
        </Fieldset>
        <Fieldset>
          <Label>Tabela de aposta (em centavos)</Label>
          <GroupedInput>
            <Input type="text" placeholder="Sem X" />
            <Input type="text" placeholder="X" />
            <Input type="text" placeholder="XX" />
            <Input type="text" placeholder="XXX" />
            <Input type="text" placeholder="XXXX" />
            <Input type="text" placeholder="XXXXX" />
          </GroupedInput>
        </Fieldset>
        <Button type="submit" value="Criar jogo" />
      </form>
    </Side>

    <Side>
      <Title>Entrar em jogo já criado</Title>
      <form>
        <Fieldset>
          <Label>Código do jogo</Label>
          <Input type="text" />
        </Fieldset>

        <Fieldset>
          <Label>Seu nome</Label>
          <Input type="text" />
        </Fieldset>
        <Button type="submit" value="Entrar" />
      </form>
    </Side>
  </Container>
);
