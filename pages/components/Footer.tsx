import React from "react";
import styled from "styled-components";

const Wrapper = styled.footer`
  height: 56px;
`;

const Footer = () => {
  return (
    <Wrapper>
      <a href="https://suryakumara.com" target="_blank" rel="noopener noreferrer">
        I Made Surya Kumara &#169; 2022
      </a>
    </Wrapper>
  );
};

export default Footer;
