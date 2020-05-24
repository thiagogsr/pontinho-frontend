import styled from "styled-components";
import Card from "../Card";

export default styled(Card)`
  svg {
    border: 2px solid ${(props) => (props.selected ? "white" : "transparent")};
    border-radius: 7px;
    cursor: ${(props) => (props.selectable ? "pointer" : "unset")};

    &:hover,
    &:focus {
      border-color: ${(props) => (props.selectable ? "white" : "transparent")};
    }
  }
`;
