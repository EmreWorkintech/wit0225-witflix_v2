import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

const Controller = styled.div`
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  display: flex;
  gap: 1rem;
`;

function NavController() {
  return (
    <Controller>
      <Link to="/">Ana Sayfa</Link>
      <Link to="/signup">Signup</Link>
      <Link to="/welcome">Welcome</Link>
      <Link to="/browse">Browse</Link>
    </Controller>
  );
}

export default NavController;
