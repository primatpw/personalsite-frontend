import React from "react";
import Nav from "../Nav";
import Container from "../Container";

export default ({ children }) => (
  <Container>
    <Nav />
    {children}
  </Container>
);
