import React from "react";
import styled from "styled-components";

const Span = styled.span`
  font-size: ${props => props.size || "0.7em"};
  padding-left: 0.4em;
`;

const Emoji = ({ emoji, size }) => (
  <Span role="img" aria-label="emoji" size={size}>
    {emoji}
  </Span>
);

export default Emoji;
