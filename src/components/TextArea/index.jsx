import styled from "styled-components";

const TextArea = styled.textarea`
  background: transparent;
  outline: none;
  border: none;
  border-bottom: 2px solid grey;
  padding: 1em;
  margin: 1em;
  font-family: Karla, sans-serif;
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

export default TextArea;
