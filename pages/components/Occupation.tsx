import React from "react";
import { works } from "../../constant/profile-surya";

const Occupation = () => {
  return (
    <div>
      <div>Work Experience</div>
      <div>
        {works.map((work, i) => (
          <div key={i}>
            <div>{work.title}</div>
            <div>{work.description}</div>
            <div>
              {work.date.start} - {work.date.end}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Occupation;
