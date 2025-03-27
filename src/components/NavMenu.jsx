import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

const NavContainer = styled.nav`
  display: flex;
  flex-grow: 1;
  gap: 1rem;
`;

const A = styled(Link)`
  color: white;
`;

function NavMenu() {
  return (
    <NavContainer>
      <A to="/">Home</A>
      <A to="/">Tv Show</A>
      <A to="/">Movies</A>
    </NavContainer>
  );
}

export default NavMenu;
