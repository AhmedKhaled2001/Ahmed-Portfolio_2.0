
import SC1 from "../assets/MantlingEx1.png";
import SC2 from "../assets/MantlingEx2.png";
import SC3 from "../assets/MantlingEx3.png";


function HR_InputHandler() {
  return (
    <div className="project-desc-nav">
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
export default HR_InputHandler;
