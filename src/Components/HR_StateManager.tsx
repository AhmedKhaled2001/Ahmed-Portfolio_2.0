
import SC1 from "../assets/StateManagerEx1.png";
import SC2 from "../assets/StateManagerEx2.png";
import SC3 from "../assets/StateManagerEx3.png";

function HR_DesignPattern2() {
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
export default HR_DesignPattern2;
