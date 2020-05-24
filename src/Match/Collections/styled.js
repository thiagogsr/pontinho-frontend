import styled from "styled-components";
import StyledCard from "../StyledCard";

export const Container = styled.div`
  position: absolute;
  top: 150px;
  left: 450px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Collection = styled.div`
  margin: 0 50px 20px 0;
  display: flex;
  flex-direction: row;
`;

export const Plus = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: white;
  color: #106544;
  text-align: center;
  cursor: pointer;
  margin-top: 49px;

  &:before {
    content: "+";
    font-size: 18px;
    font-weight: bold;
    line-height: 24px;
  }
`;

export const Sequence = styled.div`
  display: flex;
  flex-direction: row;

  ${StyledCard} {
    margin-left: -58px;

    &:first-child {
      margin-left: 0;
    }
  }
`;

export const Trio = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TrioTwin = styled.div`
  display: flex;
  flex-direction: column;

  ${StyledCard} {
    margin-top: -100px;

    &:first-child {
      margin-top: 0;
    }
  }
`;
