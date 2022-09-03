import React from "react";
import styled from "styled-components";
import Card from "./Card";
const Wrapper = styled.div`
  height: calc(100vh - 56px - 56px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = () => {
  return (
    <Wrapper>
      <Card />
    </Wrapper>
  );
};

export default Content;
