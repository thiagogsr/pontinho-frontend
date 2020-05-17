import styled from "styled-components";
import Card, { Back } from "../../Card";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
  width: 390px;
`;

export const DiscardPile = styled.div`
  width: 124px;
  height: 172px;
  overflow: hidden;
`;

export const Joker = styled(Card)`
  transform: rotate(-90deg);
  position: relative;
  left: 30px;
  z-index: 1;
`;

export const Stock = styled(Back)`
  z-index: 2;
  cursor: ${(props) => (props.selectable ? "pointer" : "unset")};
  border: 2px solid transparent;
  border-radius: 7px;
  position: relative;
  left: -50px;

  &:hover,
  &:focus,
  &.active {
    border-color: ${(props) => (props.selectable ? "white" : "transparent")};
  }
`;

export const FirstCard = styled.div``;

export const FirstCardActions = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FirstCardButton = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  color: white;

  &:hover,
  &:focus,
  &:active {
    text-decoration: underline;
  }
`;
