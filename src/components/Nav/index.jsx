import React, { useState } from "react";
import styled from "styled-components";
import links from "./links";
import NavLink from "../NavLink";

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 1em 0;
`;

const Menu = styled.div`
  display: ${props => props.visible ? 'block' : 'none'};

  position: absolute;
  margin: 3em auto;
  border-radius: 1em;
  padding: 1em;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.5);
  background: white;

  z-index: 1000;
`;

const NavButton = styled.button`
  background: #FFFFFF;
  padding: 1em;
  outline: none;
  border: none;
  cursor: pointer;

  .hamburger {
    display: block;
    height: 100%;
  }

  .hamburger span {
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;
    
    background: #232323;
    border-radius: 3px;
        
    transform-origin: 4px 0px;
    
    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                opacity 0.55s ease;

    &:first-child {
      transform-origin: 0% 0%;
    }

    &:nth-last-child(2) {
      transform-origin: 0% 100%;
    }

    &:nth-last-child(1) {
      margin-bottom: 0;
    }

    ${({ visible }) => visible && `
      & {
        opacity: 1;
        transform: rotate(45deg) translate(-2px, -2px);
        background: #232323;
      }

      &:nth-last-child(2) {
        opacity: 0;
        transform: rotate(0deg) scale(0.2, 0.2);
      }

      &:nth-last-child(1) {
        transform: rotate(-45deg) translate(0, -1px);
      }
    `}
  }
`;

const Toggle = (props) => (
  <NavButton {...props}>
    <span className="hamburger">
      <span />
      <span />
      <span />
    </span>
  </NavButton>
);

const Nav = () => {
  const [visible, setVisibility] = useState(false);

  return (
    <Wrapper>
      <Toggle onClick={() => setVisibility(!visible)} visible={visible}/>
      <Menu visible={visible}>
        {links.map(({ label, target, description }) => (
          <NavLink
            key={`link-${label}-to-${target}`}
            to={target}
            label={label}
            description={description}
          />
        ))}
      </Menu>
    </Wrapper>
  );
}

export default Nav;