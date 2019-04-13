import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  text-align: center;
  padding-bottom: 1.5em;
  margin-top: 2em;
  font-size: 0.75em;
`;

const Footer = () => (
  <StyledFooter>
    <p>Dave Nathanael - 2019</p>
  </StyledFooter>
);

export default Footer;
