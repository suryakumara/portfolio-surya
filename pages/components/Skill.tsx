import React from "react";
import { skills } from "../../constant/profile-surya";

const Skill = () => {
  return (
    <div className=" mt-5">
      {skills.map((skill, i) => {
        return (
          <div key={i}>
            <p>
              {skill.title}, {skill.profiecency}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Skill;
