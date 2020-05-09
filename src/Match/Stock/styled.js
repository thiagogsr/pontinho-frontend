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
  cursor: pointer;
  border: 2px solid transparent;
  border-radius: 7px;
  position: absolute;
  left: 100px;

  &:hover,
  &:focus,
  &.active {
    border-color: white;
  }
`;
