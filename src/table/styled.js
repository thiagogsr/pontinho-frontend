import styled from "styled-components";
import Card, { Back } from "../cards";

export const StyledCard = styled(Card)`
  border: 2px solid ${(props) => (props.selected ? "white" : "transparent")};
  border-radius: 7px;
  cursor: pointer;

  &:hover,
  &:focus {
    border-color: white;
  }
`;

export const DiscardPile = styled.div`
  width: 124px;
  height: 172px;
  overflow: hidden;
  margin-left: 50px;
`;

export const Joker = styled(Card)`
  transform: rotate(-90deg);
  position: relative;
  left: 50px;
  z-index: 1;
`;

export const Hand = styled.div`
  position: absolute;
  bottom: -42px;
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: 100%;
`;

export const Setup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: center;
`;

export const Stock = styled(Back)`
  z-index: 2;
  cursor: pointer;
  border: 2px solid transparent;
  border-radius: 7px;

  &:hover,
  &:focus,
  &.active {
    border-color: white;
  }
`;

export const Table = styled.div`
  position: relative;
  height: 100%;
  display: flex;
`;

export const Points = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

export const MatchPlayerName = styled.div`
  font-size: 16px;
  border-bottom: 1px dashed black;
  margin-bottom: 5px;
  padding-bottom: 5px;
`;

export const MatchPlayerInfo = styled.div`
  font-size: 14px;
  line-height: 1.4em;
`;

export const MatchPlayer = styled.div`
  text-align: center;
  background-color: ${(props) => (props.active ? "#4444ff" : "white")};
  color: ${(props) => (props.active ? "white" : "black")};
  padding: 5px 15px;
  border-radius: 0 0 8px 8px;
  margin: 0 5px;

  ${MatchPlayerName} {
    border-bottom-color: ${(props) => (props.active ? "white" : "black")};
  }
`;

export const Collections = styled.div`
  position: absolute;
  top: 150px;
  left: 450px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Sequence = styled.div`
  margin: 0 20px 20px 0;

  ${StyledCard} {
    margin-left: -58px;

    &:first-child {
      margin-left: 0;
    }
  }
`;

export const Trio = styled.div`
  margin: 0 20px 20px 0;
  display: flex;
  flex-direction: row;
`;

export const TrioTwin = styled.div`
  display: flex;
  flex-direction: column;

  ${StyledCard} {
    margin-top: -100px;

    &:first-child {
      margin-top: 0;
    }
  }
`;
