import { useState } from "react";
import Tag from "./Tag";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
interface Props {
  tags: String[];
  desc: String;
  icon: string;
}

function ProjectCard({ tags, desc, icon }: Props) {
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
      <Link to = "Thoughts">
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
        <div className="row justify-content-start">
          {tags.map((item) => (
            <div className="col-md-3">
              <Tag tagName={item} />
            </div>
          ))}
        </div>
      </div>

      <div className="card-desc">
        <p className="card-desctxt">{desc}</p>
      </div>
    </motion.ul>
  );
}
export default ProjectCard;
