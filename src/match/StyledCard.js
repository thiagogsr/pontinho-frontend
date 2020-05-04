import styled from "styled-components";
import Card from "../cards";

export default styled(Card)`
  border: 2px solid ${(props) => (props.selected ? "white" : "transparent")};
  border-radius: 7px;
  cursor: pointer;

  &:hover,
  &:focus {
    border-color: white;
  }
`;
