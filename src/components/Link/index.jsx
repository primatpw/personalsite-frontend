import React from "react";
import styled from "styled-components";
import { Link as RLink } from "react-router-dom";

const RouterLink = styled(RLink)`
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

const A = styled.a`
  &,
  &:visited {
    color: #08000f;
    font-family: "Karla";
    padding: 0.5em 0;
    transition: text-decoration 0.3s ease-out;
  }

  &:hover {
    text-decoration-color: #95b27b;
  }
`;

export default ({ label, target, external }) => {
  if (external) {
    return <A href={target}>{label}</A>;
  } else {
    return <RouterLink to={target}>{label}</RouterLink>;
  }
};
