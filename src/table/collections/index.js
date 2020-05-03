import React from "react";
import { Container, Sequence, Trio, TrioTwin } from "./styled";
import StyledCard from "../StyledCard";

export default () => (
  <Container>
    <Sequence>
      <StyledCard value="9" suit="hearts" width={90} height={126} />
      <StyledCard value="10" suit="hearts" width={90} height={126} />
      <StyledCard value="J" suit="hearts" width={90} height={126} />
    </Sequence>

    <Trio>
      <StyledCard value="9" suit="spades" width={90} height={126} />
      <StyledCard value="9" suit="hearts" width={90} height={126} />
      <StyledCard value="9" suit="clubs" width={90} height={126} />
    </Trio>

    <Sequence>
      <StyledCard value="9" suit="hearts" width={90} height={126} />
      <StyledCard value="10" suit="hearts" width={90} height={126} />
      <StyledCard value="J" suit="hearts" width={90} height={126} />
    </Sequence>

    <Trio>
      <TrioTwin>
        <StyledCard value="9" suit="spades" width={90} height={126} />
        <StyledCard value="9" suit="spades" width={90} height={126} />
      </TrioTwin>
      <StyledCard value="9" suit="hearts" width={90} height={126} />
      <StyledCard value="9" suit="clubs" width={90} height={126} />
    </Trio>

    <Sequence>
      <StyledCard value="A" suit="hearts" width={90} height={126} />
      <StyledCard value="2" suit="hearts" width={90} height={126} />
      <StyledCard value="3" suit="hearts" width={90} height={126} />
      <StyledCard value="4" suit="hearts" width={90} height={126} />
      <StyledCard value="5" suit="hearts" width={90} height={126} />
      <StyledCard value="6" suit="hearts" width={90} height={126} />
      <StyledCard value="7" suit="hearts" width={90} height={126} />
      <StyledCard value="8" suit="hearts" width={90} height={126} />
      <StyledCard value="9" suit="hearts" width={90} height={126} />
      <StyledCard value="10" suit="hearts" width={90} height={126} />
      <StyledCard value="J" suit="hearts" width={90} height={126} />
      <StyledCard value="Q" suit="hearts" width={90} height={126} />
      <StyledCard value="K" suit="hearts" width={90} height={126} />
      <StyledCard value="A" suit="hearts" width={90} height={126} />
    </Sequence>

    <Trio>
      <StyledCard value="9" suit="spades" width={90} height={126} />
      <StyledCard value="9" suit="hearts" width={90} height={126} />
      <StyledCard value="9" suit="clubs" width={90} height={126} />
    </Trio>
  </Container>
);
