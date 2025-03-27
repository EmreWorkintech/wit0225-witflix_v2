import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import NavMenu from "./NavMenu";

const HeaderDiv = styled.header`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  padding: 1rem 3rem;
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  align-items: center;
`;

function Header() {
  return (
    <HeaderDiv>
      <img src={logo} />
      <NavMenu />
      <div>Panel</div>
    </HeaderDiv>
  );
}

export default Header;
