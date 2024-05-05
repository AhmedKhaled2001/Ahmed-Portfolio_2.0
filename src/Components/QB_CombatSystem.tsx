
import CloudinaryVideo from "./CloudinaryVideo";
function QB_CombatSystem() {
  return (
    <div className="project-desc-nav">
      <CloudinaryVideo styling="project-list-img" videoID="QB_CombatSystem"/>

      <p className="project-desc-text">
        I built the combat system for the game. The system gives the player 4 different attacks (Upwards, Downward, Directional, Neutral) triggered by the left 
        trigger and the position left stick. The system handles: 
      </p>
      <p className="project-desc-text">
      Handling Input - Handles the input for the attacks and determines which attack to play by the position of the Left Stick when pressing the attack button.
      </p> 
      <p className="project-desc-text">
      Collision Tracing - Collision is handled in the attack's animation (Animation Notify) 
      </p>
      <p className="project-desc-text">
      Charging Attacks - Handles the functionality behind the player holding their attack where the damage they deal if they hit someone with the attack scales by the 
      charge duration (50% - 150%)
      </p> 
      <p className="project-desc-text">
      Knockback - The knockback is relative to the attacking player's velocity
      </p>
      <p className="project-desc-text">
      Handling Hit - Handles the logic behind handling taking damage by shaking the screen, applies the knockback, updates the player's health, and stuns the player
      </p> 

    </div>
  );
}
export default QB_CombatSystem;
