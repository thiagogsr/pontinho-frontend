import styled from "styled-components";

export const Hand = styled.div`
  position: absolute;
  bottom: -50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

export const Title = styled.div`
  text-align: center;
  color: white;
  font-size: 14px;
`;

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
