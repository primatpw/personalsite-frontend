import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  min-height: 80vh;
`;

const NotFound = () => (
  <Wrapper>
    <h2>
      Oops, its like you've been <u>lost</u>.
    </h2>
  </Wrapper>
);

export default NotFound;
