import SC1 from "../assets/TL1.png";
import SC2 from "../assets/TL2.png";
import SC3 from "../assets/TL3.png";


function QB_GameSystems() {
  return (
    <div className="project-desc-nav">
      <p className="project-desc-text"> 
      I lead the movement system engineering team. The team consists of 8 Engineers with the main responsibility of building anything related to the movement system. I lead the team by desiging systems, 
      creating tasks, pair programming with other team members on their tasks, writing more details and suggestions on tasks, streaming work days with the team to document how some systems work, documenting design patterns in a clear way so that 
      everyone is on the same page. Also, I tried my best to maintain good communication within the team, and a good communication channel with the other teams on the project.
      </p>
      <div className="projlist-img-container">
        <img className = "projlist-img-center" src={SC1} alt="Example" />
      </div>
      <div className="projlist-img-container">
        <img className = "projlist-img-center" src={SC2} alt="Example" />
      </div>
      <div className="projlist-img-container">
        <img className = "projlist-img-center" src={SC3} alt="Example" />
      </div>
    </div>
  );
}
export default QB_GameSystems;
