import React from "react";
import { educations } from "../../constant/profile-surya";

const Education = () => {
  return (
    <div>
      <div>Education</div>
      {educations.map((edu, i) => (
        <div key={i}>
          <div>{edu.school}</div>
          <div>{edu.date}</div>
          <div>{edu.major}</div>
          <div>{edu.degree}</div>
        </div>
      ))}
    </div>
  );
};

export default Education;
