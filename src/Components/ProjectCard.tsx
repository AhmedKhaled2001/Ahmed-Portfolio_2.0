import { useState } from "react";
import Tag from "./Tag";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CheckList from "./Checklist";
interface Props {
  tags: String[];
  desc: String;
  icon: string;
  onClickLink: string;
  checkListIcon:string;
  checklistItems:string[];
  
}

function ProjectCard({ tags, desc, icon, onClickLink, checkListIcon, checklistItems}: Props) {
  const [isSelected, setSelected] = useState(false);
  function selectedClass() {
    if (isSelected && isSelected != null) return "img-border-hovered";
    else return "img-border";
  }

  return (
    <motion.ul
      animate={{ scale: isSelected ? 1.05 : 1 }}
      onMouseLeave={() => setSelected(false)}
      onMouseEnter={() => setSelected(true)}
      className="list-group"
    >
      <Link to = {onClickLink}>
      <motion.img
        animate={{ scale: isSelected ? 1 : 1 }}
        className={selectedClass()}
        src={icon}
        alt="Bootstrap"
        onMouseOver={() => {
          setSelected(true);
        }}
        onMouseOut={() => {
          setSelected(false);
        }}
      />
            </Link>
      
      <div className="container tag-container">
          {tags.map((item) => (
            <div className="tag-content ">
              <Tag tagName={item} />
            </div>
          ))}
      </div>
      <div className="container card-desc">
        <div className="">
        <p className="card-desctxt">{desc}</p>
        </div>
      </div>
      <CheckList icon = {checkListIcon} items={checklistItems}/> 
    </motion.ul>
  );
}
export default ProjectCard;
