import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100%;
`;

export const Side = styled.div`
  width: 50%;
  padding: 0 20px;
  box-sizing: border-box;
  border-right: 1px dashed white;

  &:last-child {
    border-right: none;
  }
`;

export const Title = styled.h3`
  color: white;
  text-align: center;
`;

export const Fieldset = styled.fieldset`
  border: none;
  padding: 0;
  margin: 0 0 20px 0;
`;

export const Label = styled.label`
  display: block;
  color: white;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  color: #106544;
  box-sizing: border-box;
`;

export const Button = styled.input`
  background-color: #106544;
  color: white;
  border: 2px solid white;
  border-radius: 8px;
  cursor: pointer;
  padding: 10px 20px;

  &:hover,
  &:focus,
  &:active {
    background-color: white;
    color: #106544;
  }
`;
