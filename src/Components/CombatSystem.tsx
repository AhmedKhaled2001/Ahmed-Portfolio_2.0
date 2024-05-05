
import CloudinaryVideo from "./CloudinaryVideo";
function CombatSystem() {
  return (
    <div className="project-desc-nav">
      <CloudinaryVideo styling="project-list-img" videoID="Thoughts_CombatSystem"/>

      <p className="project-desc-text">
        Combat was one of the most fun areas I explored with creating this game,
        where it was my first time attempting to create a full combo melee
        system. I had to go through multiple iterations to make it as fun and
        fitting to the game's design as I could. I'm fairly happy with how the
        combat looks. The combat is a modular code design driven by the weapon
        the player is holding, which for now means which class the player chose
        for the current run, where each weapon will have different animations,
        combat effects, combat sounds, as well as different damage. Combat is
        animation driven for the most part where logic behind which attack
        sequence to use (is the player dashing? is it a parry?) is
        predetermined, but logic such delaying an attack input to after the
        current attack is done playing (input buffer), playing sound and visual
        effects, and collision checking is driven by the animation (Animation
        Notifies).
      </p>
    </div>
  );
}
export default CombatSystem;
