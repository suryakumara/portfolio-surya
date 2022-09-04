import Image from "next/image";
import React from "react";
import { personal } from "../../constant/profile-surya";
import mypic from "../../assets/photo-surya.jpeg";
import styled from "styled-components";
import Skill from "./Skill";

const Content = styled.div``;

const Profile = () => {
  const lazyRoot = React.useRef(null);

  return (
    <div>
      <Image
        lazyRoot={lazyRoot}
        src={mypic}
        alt="I Made Surya Kumara Photo"
        width="96px"
        height="96px"
        layout="fixed"
        className=" rounded-full"
      />
      <Content>
        <div>
          <h1>{personal.name}</h1>
        </div>
        <div>
          <p>{personal.job}</p>
        </div>
        <div>
          <h1>{personal.location}</h1>
        </div>
        <div>
          <h1>{personal.email}</h1>
        </div>
        <div>
          <h1>{personal.phone}</h1>
        </div>
        <div>
          <Skill />
        </div>
      </Content>
    </div>
  );
};

export default Profile;
