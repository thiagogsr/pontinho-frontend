import styled from "styled-components";

export const Messages = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 99;
`;

export const Message = styled.div`
  background-color: ${(props) =>
    props.type === "success" ? "#228b22" : "#ff4500"};
  color: white;
  min-width: 200px;
  max-width: 400px;
  padding: 10px;
  box-sizing: border-box;
  font-weight: bold;
  margin-bottom: 10px;
  border: 2px solid white;
  border-radius: 7px;
`;
