
import CloudinaryVideo from "./CloudinaryVideo";
function EnemyAI() {
  return (
    <div className="project-desc-nav">
      <CloudinaryVideo styling="project-list-img" videoID="Thoughts_AI"/>
      <p className="project-desc-text">
        I implemented the Enemy AI using Unreal Engine's Behavior Tree system.
        The behavior tree I created is fairly simple, and it's used for most of
        the enemies, where the main difference being in the the enemy character,
        where each enemy will have different sets of attack sequences (animation
        driven) with assigned values for minimum and maximum range, which allows
        the AI to correctly calculate which attack to use for each enemy. I also
        started working on defensive mechanics for enemies because I want some
        of the harder enemies to break out of a stun lock caused by the player,
        but for right some enemies will run away when the player is too close to
        them (Ranged enemies), but I want to expand on that and make it more
        dynamic later.
      </p>
    </div>
  );
}
export default EnemyAI;
