import styled from "styled-components";

const Input = styled.input`
  background: transparent;
  outline: none;
  border: none;
  border-bottom: 2px solid grey;
  padding: 1em;
  font-family: Karla, sans-serif;
  margin: 1em;
  transition: border-bottom 0.5s ease;
  width: 40%;

  @media (max-width: 768px) {
    width: 60%;
  }

  @media (max-width: 576px) {
    width: 100%;
  }

  &:focus {
    border-bottom: 2px solid black;
  }

  &:valid {
    border-bottom: 2px solid #95b27b;
  }
`;

export default Input;
