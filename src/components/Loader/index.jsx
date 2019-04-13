import React from 'react';
import styled, { keyframes } from 'styled-components';

const kf1 = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;

const kf2 = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(19px, 0);
  }
`;

const kf3 = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;

  & div {
    position: absolute;
    top: 27px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: #AFD190;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);

    &:nth-child(1) {
      left: 6px;
      animation: ${kf1} 0.6s infinite;
    }
    &:nth-child(2) {
      left: 6px;
      animation: ${kf2} 0.6s infinite;
    }
    &:nth-child(3) {
      left: 26px;
      animation: ${kf2} 0.6s infinite;
    }
    &:nth-child(4) {
      left: 45px;
      animation: ${kf3} 0.6s infinite;
    }
  }
`;

export default () => (
  <Wrapper>
    <div/>
    <div/>
    <div/>
    <div/>
  </Wrapper>
);