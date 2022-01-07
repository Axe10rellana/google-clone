import styled from "styled-components";

export const GoogleButton = styled.button`
  margin: 11px 4px;
  padding: 7px 15px;
  background-color: #f8f9fa;
  border: 1px solid #f8f9fa;
  border-radius: 4px;
  color: #3c4043;
  height: 36px;
  min-width: 54px;
  text-aling: center;
  cursor: pointer;
  user-select: none;

  &:hover {
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    background-image: webkit-linear-gradient(top, #f8f8f8, #f1f1f1);
    color: #202124;
    border: 1px solid #dadce0;
  }

  &:focus {
    outline: 0;
    border: 1px solid #59bfff;
  }
`;
