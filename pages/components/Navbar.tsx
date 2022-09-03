import React from "react";
import styled from "styled-components";

const NavbarWrapper = styled.nav`
  height: 56px;
  width: 100%;
  background-color: #f4ede4;
`;

const Navbar = () => {
  return (
    <NavbarWrapper>
      <div>Nav</div>
    </NavbarWrapper>
  );
};

export default Navbar;
