import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  background-color: white;
`;

export const Player = styled.div`
  text-align: center;
  color: black;
  padding: 5px 15px;
  border-right: 1px dashed black;
  font-size: 14px;

  &:last-child {
    border-right-width: 0;
  }
`;
