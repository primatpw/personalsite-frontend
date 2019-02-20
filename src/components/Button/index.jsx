import styled from "styled-components";

const Button = styled.button`
  padding: 0.75em 3em;
  border: 4px solid #95b27b;
  margin: 1em;
  font-family: Karla, sans-serif;
  background: none;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #95b27b;
  }
`;

export default Button;
