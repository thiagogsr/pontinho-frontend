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

export const Sequence = styled.div`
  margin: 0 20px 20px 0;

  ${StyledCard} {
    margin-left: -58px;

    &:first-child {
      margin-left: 0;
    }
  }
`;

export const Trio = styled.div`
  margin: 0 20px 20px 0;
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
