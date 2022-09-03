import React from "react";
import styled from "styled-components";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
import mypic from "../../assets/photo-surya.jpeg";

const Container = styled.div`
  width: 500px;
  height: 500px;
  border-radius: 10px;
  box-shadow: 10px 10px 5px #aaaaaa;
  background-color: #f4ede4;
  cursor: pointer;
`;

const Card = () => {
  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.8}
      glareColor="#ffffff"
      glarePosition="bottom"
      glareBorderRadius="20px"
    >
      <Container>
        <Image
          src={mypic}
          alt="I Made Surya Kumara Photo"
          width="50px"
          height="50px"
          layout="fixed"
        />
      </Container>
    </Tilt>
  );
};

export default Card;
