import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  position: absolute;
  right: 0;
`;

export const Action = styled.button`
  background-color: white;
  width: 120px;
  padding: 20px 0;
  cursor: pointer;
  margin-bottom: 5px;
  border: 2px solid white;
  color: #106544;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;

  &:hover {
    color: white;
    background-color: #106544;
  }
`;
