import SC1 from "../assets/UI1.png";
import SC2 from "../assets/ui2.png";
import SC3 from "../assets/UI3.png";


function QB_GameSystems() {
  return (
    <div className="project-desc-nav">
      <p className="project-desc-text"> 
      I designed and implemented and animated the main mission quest log, the side mission quest log, and the summary screen at the end.
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
