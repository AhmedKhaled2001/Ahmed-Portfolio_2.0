import CloudinaryVideo from "./CloudinaryVideo";

function DOBP_AnimationState() {
  return (
    <div className="project-desc-nav">
<CloudinaryVideo styling="project-list-img" videoID="DOBP_Movement"/>

      <p className="project-desc-text">
I made an animation state system for the game, where it changes the animation playing depending on the action of the player (idle, movement, jumping)
      </p>
      
    </div>
  );
}
export default DOBP_AnimationState;
