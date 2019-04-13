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
    position: relative;
    display: inline-block;
    text-decoration: none;

    color: #08000f;
    font-family: "Karla";
  }

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30%;
    background-color: #AFD190;//#fdd104;
    z-index: -10;
    transition: all .1s linear;
  }

  &:hover {
    cursor: pointer;
    &:after {
      bottom: 2px;
    }
  }
`;

export default ({ label, target, external }) => {
  if (external) {
    return (
      <A href={target} target="_blank">
        {label}
      </A>
    );
  } else {
    return <RouterLink to={target}>{label}</RouterLink>;
  }
};
