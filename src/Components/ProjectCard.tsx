import { useState } from "react";
import Tag from "./Tag";
import {motion} from "framer-motion"

interface Props
{
  tags: String[];
}

function ProjectCard({tags}:Props) {
  const [isSelected, setSelected] = useState(false);
  function selectedClass() {
    if (isSelected && isSelected != null) return "img-border-hovered";
    else return "img-border";
  }

  return (
    <motion.ul animate = {{scale :isSelected ? 1.05 : 1}}
    onMouseLeave= {()=>setSelected(false)} onMouseEnter={()=>setSelected(true)} className="list-group">
      <motion.img
      animate = {{scale:isSelected?1:1.}}
        className={selectedClass()}
        src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt6ce962f552812df5/62d6bd83c4f39a1084ff5bef/GettyImages-1409223178.jpg?format=pjpg&auto=webp&width=1920&quality=60"
        alt="Bootstrap"
        onMouseOver={() => {
          setSelected(true);
        }}
        onMouseOut={() => {
          setSelected(false);
        }}
      />
      <div className="container tag-container">
        <div className="row justify-content-start">
          <div className="col-md-auto">
            <Tag />
          </div>
          <div className="col-md-auto">
            <Tag />
          </div>
          <div className="col-md-auto">
            <Tag />
          </div>
          <div className="col-md-auto">
            <Tag />
          </div>
        </div>
      </div>
      <div className="card-desc" >
        <p className="card-desctxt">This is a great game I made this game this is my son on the cover i made him using Unreal Engine Blueprints/C++</p>
      </div>
    </motion.ul>
  );
}
export default ProjectCard;
