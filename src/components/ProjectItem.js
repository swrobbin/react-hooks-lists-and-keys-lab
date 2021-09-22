import React from "react";
import user from "../data/user";

function ProjectItem({ name, about, technologies, id }) {
  console.log(technologies, "tech")
  const techSpanTag = technologies.map((tech, i) => {
     return <span key={i} >{tech}</span>
  })


  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {techSpanTag}
      </div>
    </div>
  );
}

export default ProjectItem;
