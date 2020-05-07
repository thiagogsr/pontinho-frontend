import styled from "styled-components";

export const Container = styled.div`
  padding: 0 20px;
  box-sizing: border-box;
  color: white;
`;

export const Title = styled.h2`
  margin: 20px 0;
`;

export const Button = styled.button`
  background-color: #106544;
  color: white;
  border: 2px solid white;
  border-radius: 8px;
  cursor: pointer;
  padding: 10px 20px;
  margin-top: 20px;
  font-size: 18px;

  &:hover,
  &:focus,
  &:active {
    background-color: white;
    color: #106544;
  }
`;

export const Copy = styled(Button)`
  padding: 5px;
  margin: 0 0 0 10px;
  font-size: 12px;
`;

export const Table = styled.table`
  margin: 20px 0;
  width: 100%;
  text-align: center;
`;

export const Column = styled.td`
  padding: ${(props) => (props.header ? "10px 0" : "5px 0")};
  font-weight: ${(props) => (props.header ? "bold" : "inherit")};
  border-width: 0 1px;
  border-style: solid;
  border-color: white;
  width: 100px;
`;

export const Row = styled.tr`
  &:first-child {
    ${Column} {
      border-top-width: 1px;
    }
  }

  &:last-child,
  &:nth-child(2n) {
    ${Column} {
      border-bottom-width: 1px;
    }
  }
`;
