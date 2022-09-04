import Link from "next/link";
import React from "react";
import styled from "styled-components";

const NavbarWrapper = styled.nav`
  height: 56px;
  width: 100%;
  background-color: #f4ede4;
  display: flex;
  align-items: center;
`;

const Navbar = () => {
  return (
    <NavbarWrapper>
      <div className="w-6/12 mx-auto flex">
        <h1>
          <Link href="/">
            <span>I Made Surya Kumara</span>
          </Link>
        </h1>

        <div className=" ml-5">
          <h1>
            <Link href="/works">
              <span>Works</span>
            </Link>
          </h1>
        </div>

        <div className=" ml-5">
          <h1>
            <Link href="/projects">
              <span>Projects</span>
            </Link>
          </h1>
        </div>
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
