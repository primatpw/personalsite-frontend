import React from "react";
import styled from "styled-components";
import links from "./links";
import Container from "../Container";
import Link from "../Link";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default () => (
  <Container>
    <Wrapper>
      {links.map(({ label, target }) => (
        <Link
          key={`link-${label}-to-${target}`}
          target={target}
          label={label}
        />
      ))}
    </Wrapper>
  </Container>
);
