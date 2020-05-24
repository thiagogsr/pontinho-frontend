import styled from "styled-components";
import Card, { Back } from "../../Card";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: center;
`;

export const Joker = styled(Card)`
  transform: rotate(-90deg);
  position: relative;
  left: 35px;
  z-index: 1;
`;

export const Stock = styled(Back)`
  position: relative;
  left: -25px;
  z-index: 2;

  svg {
    cursor: ${(props) => (props.selectable ? "pointer" : "unset")};
    border: 2px solid transparent;
    border-radius: 7px;

    &:hover,
    &:focus,
    &.active {
      border-color: ${(props) => (props.selectable ? "white" : "transparent")};
    }
  }
`;
