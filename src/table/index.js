import React from "react";
import {
  Collections,
  DiscardPile,
  Hand,
  Joker,
  MatchPlayer,
  MatchPlayerInfo,
  MatchPlayerName,
  Points,
  Sequence,
  Setup,
  Stock,
  StyledCard,
  Table,
  Trio,
  TrioTwin,
} from "./styled";

export default () => (
  <Table>
    <Points>
      <MatchPlayer>
        <MatchPlayerName>Thiago</MatchPlayerName>
        <MatchPlayerInfo>99</MatchPlayerInfo>
        <MatchPlayerInfo>7 cartas</MatchPlayerInfo>
      </MatchPlayer>

      <MatchPlayer active>
        <MatchPlayerName>Thiago</MatchPlayerName>
        <MatchPlayerInfo>99</MatchPlayerInfo>
        <MatchPlayerInfo>7 cartas</MatchPlayerInfo>
      </MatchPlayer>

      <MatchPlayer>
        <MatchPlayerName>Thiago</MatchPlayerName>
        <MatchPlayerInfo>99</MatchPlayerInfo>
        <MatchPlayerInfo>7 cartas</MatchPlayerInfo>
      </MatchPlayer>

      <MatchPlayer>
        <MatchPlayerName>Thiago</MatchPlayerName>
        <MatchPlayerInfo>99</MatchPlayerInfo>
        <MatchPlayerInfo>7 cartas</MatchPlayerInfo>
      </MatchPlayer>

      <MatchPlayer>
        <MatchPlayerName>Thiago</MatchPlayerName>
        <MatchPlayerInfo>99</MatchPlayerInfo>
        <MatchPlayerInfo>7 cartas</MatchPlayerInfo>
      </MatchPlayer>

      <MatchPlayer>
        <MatchPlayerName>Thiago</MatchPlayerName>
        <MatchPlayerInfo>99</MatchPlayerInfo>
        <MatchPlayerInfo>7 cartas</MatchPlayerInfo>
      </MatchPlayer>
    </Points>

    <Setup>
      <Joker value="A" suit="spades" />
      <Stock color="black" />

      <DiscardPile>
        <StyledCard value="K" suit="hearts" />
        <StyledCard value="Q" suit="hearts" />
      </DiscardPile>
    </Setup>

    <Collections>
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
    </Collections>

    <Hand>
      <StyledCard value="2" suit="clubs" />
      <StyledCard value="3" suit="clubs" />
      <StyledCard value="4" suit="clubs" />
      <StyledCard value="5" suit="clubs" />
      <StyledCard value="6" suit="clubs" selected />
      <StyledCard value="7" suit="clubs" />
      <StyledCard value="8" suit="clubs" />
      <StyledCard value="9" suit="clubs" />
      <StyledCard value="10" suit="clubs" />
    </Hand>
  </Table>
);
