
import CloudinaryVideo from "./CloudinaryVideo";
function DOBP_Movement() {
  return (
    <div className="project-desc-nav">
<CloudinaryVideo styling="project-list-img" videoID="DOBP_Movement"/>
      <p className="project-desc-text">
      I made the movement system for the game. The game being a platformer movement had to be precise and flexible. The system has some fun features which were fun to 
      explore such as holding the jump button makes you hover more in the air, an input buffer, "coyote time" which gives the player a few milliseconds to jump after falling 
      off a ledge, and I added knockback to turrets
      </p>
    </div>
  );
}
export default DOBP_Movement;
