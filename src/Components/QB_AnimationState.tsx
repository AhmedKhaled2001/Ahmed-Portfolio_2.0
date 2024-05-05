
function QB_AnimationState() {
  return (
    <div className="project-desc-nav">
      
      <p className="project-desc-text">
      I found animations on mixamo, edited and retargeted them to build the animation states for the characters' locomotion as well as creating the animation montages
      for their attack animations. For the locomotion I had 3 sates (idle - moving - jumping) and blended between them depending on the state of the character. For the attack
      animations I had every attack cut up and loops at certain time frames depending if the player is charging their attack or not, it also handles triggering the VFX and the collision tracing
      (Animation Notifies).
      </p>
      
    </div>
  );
}
export default QB_AnimationState;
