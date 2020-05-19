import React from "react";
import { Container, Action } from "./styled";

const Actions = ({
  discard,
  onDiscard,
  beat,
  onBeat,
  askBeat,
  onAskBeat,
  falseBeat,
  onFalseBeat,
}) => (
  <Container>
    {discard && <Action onClick={onDiscard}>Descartar</Action>}
    {beat && <Action onClick={onBeat}>Bater</Action>}
    {askBeat && <Action onClick={onAskBeat}>Bati</Action>}
    {falseBeat && <Action onClick={onFalseBeat}>Queimei</Action>}
  </Container>
);

export default Actions;
