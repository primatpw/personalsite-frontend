import React from "react";
import styled from "styled-components";
import { Nav, Container, Footer } from "../index";

const Wrapper = styled(Container)`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-between;
`;

export default ({ children }) => (
  <Wrapper>
    <Nav />
    {children}
    <Footer />
  </Wrapper>
);
