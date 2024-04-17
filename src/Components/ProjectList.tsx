import ProjectPoints from "./ProjectPoints";
import CollapsibleButton from "./collapsibleButton";
import { useState } from "react";
function ProjectList() {
    let phImage:string = "https://img.freepik.com/free-photo/majestic-mountain-peak-tranquil-winter-landscape-generated-by-ai_188544-15662.jpg?w=1380&t=st=1713328188~exp=1713328788~hmac=a068443557a0ac7252280bf55866bd2d1a0b1f0c280f50b82a80720f6e46cc4d";

  return (
    <div className="project-list">
      <div>
        <p className="project-list-header"> Thoughts</p>
        <ProjectPoints />
        <div className="row ">
          <div className="col">
              <img className = " project-list-img" src={phImage} alt="" />
          </div>
        </div>
        <div className="row ">
          <div className="col-flex">
          <p className="project-list-desc "> Thoughts is a game I have been working on for the past year, it started as a self improvement project, where it gave me a chance to try and implement different gameplay mechanics. </p>
          </div>
          
        </div>
        <div className="row ">
          <div className="col-flex">
          <p className="project-list-subheader "> Features </p>
          </div>
        </div>
        <CollapsibleButton buttonContent = {<ProjectPoints/>} buttonName="Random Level Generation"/>
        <CollapsibleButton buttonContent = {<ProjectPoints/>} buttonName="Random Level Generation"/>
        <CollapsibleButton buttonContent = {<ProjectPoints/>} buttonName="Random Level Generation"/>
        <CollapsibleButton buttonContent = {<ProjectPoints/>} buttonName="Random Level Generation"/>

      </div>
    </div>
  );
}
export default ProjectList;
