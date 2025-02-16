import styled from "styled-components";

export const Button = styled.button`
  padding: 10px 18px;
  min-width: 220px;
  border: none;
  font-size: 16px;
  border-radius: 5px;
  background: #000;
  color: white;
  border: 2px solid transparent;
  transition: 0.4s background ease-in;
  &:hover {
    background-color: #fff;
    border: 2px solid black;
    color: black;
    transition: 0.3s background ease-in;
  }
`;

export const OutlineButton = styled(Button)`
  background-color: white;
  border: 2px solid black;
  color: black;
  &:hover {
    background-color: black;
    border: 2px solid transparent;
    color: white;
    transition: 0.3s background ease-in;
  }
`;
