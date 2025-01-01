
import SC1 from "../assets/SlideEx1.png";
import SC2 from "../assets/SlideEx2.png";


function HR_InputHandler() {
  return (
    <div className="project-desc-nav">
      <div className="projlist-img-container">
        <img className = "projlist-img-center" src={SC1} alt="Example" />
      </div>
      <div className="projlist-img-container">
        <img className = "projlist-img-center" src={SC2} alt="Example" />
      </div>
    </div>
  );
}
export default HR_InputHandler;
