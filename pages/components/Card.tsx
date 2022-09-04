import React from "react";
import styled from "styled-components";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
import Profile from "./Profile";
import Occupation from "./Occupation";
import Education from "./Education";

const Container = styled.div`
  width: 1000px;
  height: 700px;
  border-radius: 10px;
  background: white;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  cursor: pointer;
  padding: 20px;
  color: black;
  display: flex;
`;

const Card = () => {
  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.8}
      glareColor="#ffffff"
      glarePosition="bottom"
      glareBorderRadius="20px"
      className=" preser"
    >
      <Container>
        <Profile />
        <Occupation />
        <Education />
      </Container>
    </Tilt>
  );
};

export default Card;
