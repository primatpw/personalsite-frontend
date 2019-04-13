import React from "react";
import styled from "styled-components";
import { NavLink as NLink } from "react-router-dom";

const RouterLink = styled(NLink).attrs({
    activeClassName: 'active'
})`
  &,
  &:visited {
    position: relative;
    display: block;
    color: #08000f;
    font-family: "Karla";
    padding: .5em 5em .5em .5em;
    transition: border-left 0.3s ease-out;
    border-left: 5px solid lightgray;
    text-decoration: none;
    margin: .5em 0;
  }

  &.active {
    border-left: 5px solid #95b27b;
  }

  &:hover {
      background: #eeeeee;
  }
`;

export default ({ to, label, description }) =>  (
    <RouterLink to={to} exact={true}>
        <p className="link-title">{label}</p>
        <p className="link-desc">{description}</p>
    </RouterLink>
);

