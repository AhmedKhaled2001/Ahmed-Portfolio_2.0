
import DP2 from "../assets/DP3.png";
function HR_DesignPattern2() {
  return (
    <div className="project-desc-nav">
      <p className="project-desc-text">
        I experimented with different ways to get to this solution. I have found that this solution (using an external curve) was the most optimal for our case because
        we started without knowing exactly fast our game was going to be so with this solution we could build a mechanic once and change how fast it's driven at any time
      </p>
      <div className="projlist-img-container">
        <img className = "projlist-img-center" src={DP2} alt="Example" />
      </div>
    </div>
  );
}
export default HR_DesignPattern2;
