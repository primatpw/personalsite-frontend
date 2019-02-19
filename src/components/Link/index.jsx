import styled from "styled-components";
import { Link } from "react-router-dom";

export default styled(Link)`
  &,
  &:visited {
    color: #08000f;
    font-family: "Karla";
    letter-spacing: 0.6em;
    font-size: 1.35em;
    padding: 0.5em 0;
    transition: text-decoration 0.3s ease-out;
  }

  &:hover {
    text-decoration-color: #95b27b;
  }
`;
