
import SC1 from "../assets/InputBufferEx1.png";
import SC2 from "../assets/InputBufferEx2.png";
import SC3 from "../assets/CoyoteTimeEx1.png";


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
