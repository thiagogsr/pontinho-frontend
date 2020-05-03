import styled from "styled-components";
import Card, { Back } from "../../cards";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: center;
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
