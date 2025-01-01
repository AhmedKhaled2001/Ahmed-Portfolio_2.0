
import SC1 from "../assets/SC1.png";
import CollapsibleButton from "../Components/CollapsibleButton";
import HR_DesignPattern1 from "../Components/HR_DesignPattern1";
import HR_DesignPattern2 from "../Components/HR_DesignPattern2";
import HR_StateManager from "../Components/HR_StateManager";
import HR_InputHandler from "../Components/HR_InputHandler";
import HR_Mantling from "../Components/HR_Mantling";
import HR_DoubleJump from "../Components/HR_DoubleJump";
import HR_RailGrind from "../Components/HR_RailGrind";
import HR_Slide from "../Components/HR_Slide";
import HR_WallJump from "../Components/HR_WallJump";
import HR_AirDash from "../Components/HR_AirDash";
import HR_SpeedManager from "../Components/HR_SpeedManager";
import HR_AnimationSystem from "../Components/HR_AnimationSystem";
import HR_CameraManager from "../Components/HR_CameraManager";







function QB_CombatSystem() {
  return (
    <div className="project-desc-nav">
      <p className="project-desc-text">
        I designed and built the movement system for Hermes Runner with the idea of breaking the system into smaller
        sub-systems each with it's own responsibility, and defined rules of communication between these sub-systems so that 
        so that later in devolpment if we want to iterate on a specific part of the system we can know what other sub-systems might be changing it's interal variables
      </p>
      <div className="projlist-img-container">
        <img className = "projlist-img-center" src={SC1} alt="Example" />
      </div>
      <p className="project-desc-text bold margin-left-1">
      System Breakdown
      </p>
      <p className="project-desc-text margin-left-2">
      <span className="project-desc-text bold">Input Handler</span>
      <span className="project-desc-text "> <span className="inlineText">-    </span> 
      Handles and refines user inputs, incorporating features like Input Buffering, Coyote Time, and Input Mappings.</span>
      </p> 
      <p className="project-desc-text margin-left-2">
      <span className="project-desc-text bold">State Manager</span>
      <span className="project-desc-text "><span className="inlineText">-    </span>     
      Manages the player's states, defines rules to transition between states and communicates with the speed manager whenever a state change happens to modify speed.
      </span>
      </p> 
      <p className="project-desc-text margin-left-2">
      <span className="project-desc-text bold">Speed Manager</span>
      <span className="project-desc-text "><span className="inlineText">-    </span>     
      Tracks and manages the player's speed, offering functionalities like speed boosts and momentum adjustments.
      </span>
      </p> 
      <p className="project-desc-text margin-left-2">
      <span className="project-desc-text bold">Movement Mechanics</span>
      <span className="project-desc-text "><span className="inlineText">-    </span>     
      A library of movement mechanics which are (up untill now) rail grinding, a wall jump, double jump, single jump, slide, air dash, and a mantling system. All the mechanics are wrapped in 
      a wrapper method that can be called when the action is needed. Initally the movement of the game was positional curve driven, but it didn't feel good on some of the mechanics so now it's 
      velocity curve driven, where mechanics are a combination of "pushes" on the player character with the push being driven by a magnitude of some sort, a float curve to drive the magnitude, and a time 
      so that designers have freedom to change how mechanics work and feel without changing the code.  
      </span>
      </p> 
      <p className="project-desc-text margin-left-2">
      <span className="project-desc-text bold">Animation System</span>
      <span className="project-desc-text "><span className="inlineText">-    </span>     
      Responsible for animating the player character, which initally meant building the animation blueprint and managing animation montages, but we just pivoted to using Unreal Engine's 
      Motion Matching instead to drive the animation. 
      </span>
      </p> 
      <p className="project-desc-text margin-left-2">
      <span className="project-desc-text bold">Camera Manager</span>
      <span className="project-desc-text "><span className="inlineText">-    </span>     
      Responsible for animating the third-person camera by zooming out/in to give feedback to the player on how fast their going
      </span>
      </p> 
      <p className="project-desc-text bold margin-left-1">
      Implementation Contributions
      </p>
      <p className="project-desc-text margin-left-2">
      <span className="project-desc-text bold">Input Handler</span>
      <span className="project-desc-text "><span className="inlineText">-    </span>     
      Designed how coyote time and the input buffer should work and implemented it with another person on the team. Coyote time works with the state manager to check whenever 
      the character falls of a surface it starts a timer for x seconds, where the canJump function will be overriden to return true. The input buffer stores an input in an array for x seconds when that input is reported to be
      invalid by the state manager, and whenever the current input is done executing it tries to run the stored inputs.
      </span>
      </p> 
      <CollapsibleButton buttonContent={<HR_InputHandler/>} buttonName="Example Blueprint Snippets"/>

      <p className="project-desc-text margin-left-2">
      <span className="project-desc-text bold">State Manager</span>
      <span className="project-desc-text "><span className="inlineText">-    </span>     
      Designed and fully implemented the state manager, which manages switching states by cleaning up the current state, and switching to another one while keeping track
      of how good the transition was to report to the speed manager which then mathematically calculates a new player speed. It's also responsible for checks to enter a state. Example, canDash?, canWallJump, etc...
      </span>
      </p> 
      <CollapsibleButton buttonContent={<HR_StateManager/>} buttonName="Example Blueprint Snippets"/>

      <p className="project-desc-text margin-left-2">
      <span className="project-desc-text bold">Movement Mechanics</span>
      <span className="project-desc-text "><span className="inlineText">-    </span>     
      I came up with 2 design patterns that we used for building movement mechanics, the idea with both design patterns is to make it as smooth as possible in terms of managing velocities
      as well as making it as modular as possible for designers to change the mechanics works. I also fully implemented the rail grind, 
      the slide, the air dash, the mantling, the double jump, and assisted with the inital wall jump and then reiterated on it to follow a force curve driven approach.
      </span>
      </p> 
      <CollapsibleButton buttonContent={<HR_DesignPattern1/>} buttonName="Movement Mechanic Design Pattern"/>
      <CollapsibleButton buttonContent={<HR_DesignPattern2/>} buttonName="Curve Driven Mechanic Design Pattern"/>
      <CollapsibleButton buttonContent={<HR_RailGrind/>} buttonName="Rail Grind Blueprint Example"/>
      <CollapsibleButton buttonContent={<HR_Slide/>} buttonName="Slide Blueprint Example"/>
      <CollapsibleButton buttonContent={<HR_AirDash/>} buttonName="Air Dash Blueprint Example"/>
      <CollapsibleButton buttonContent={<HR_Mantling/>} buttonName="Mantling Blueprint Example"/>
      <CollapsibleButton buttonContent={<HR_DoubleJump/>} buttonName="Double Jump Blueprint Example"/>
      <CollapsibleButton buttonContent={<HR_WallJump/>} buttonName="Wall Jump Example"/>
      <p className="project-desc-text margin-left-2">
      <span className="project-desc-text bold">Speed Manager</span>
      <span className="project-desc-text "><span className="inlineText">-    </span>     
      I setup and designed how the speed manager should work, I initally added some starting functionality to the system which was then expanded on by another member of the team.
      The system works by keeping track of a curve of momentum gain which is an inversely exponential curve, which means the faster the player is going the harder it is to gain momentum
      </span>
      </p> 
      <CollapsibleButton buttonContent={<HR_SpeedManager/>} buttonName="Example Blueprint Snippets"/>
      <p className="project-desc-text margin-left-2">
      <span className="project-desc-text bold">Animation System</span>
      <span className="project-desc-text "><span className="inlineText">-    </span>     
      Initally the system was made using Unreal Engine's Animation blueprint state machine system, but recently we wanted to experiment with Unreal Engine's Motion Matching system
      . So I implemented a starting point to the motion matching system while referencing the sample project by Epic games.
      </span>
      </p> 
      <CollapsibleButton buttonContent={<HR_AnimationSystem/>} buttonName="Example Blueprint Snippets"/>
      <p className="project-desc-text margin-left-2">
      <span className="project-desc-text bold">Camera Manager</span>
      <span className="project-desc-text "><span className="inlineText">-    </span>     
      I implemented the camera manager sub-system, which for now animates the camera when the character starts moving (defualt animation) relative to the player's speed
      which zooms in/out to give a better feeling for speed. Also, it has a function to animate the camera using an additive fov value, a curve, and time, which is used in the 
      movement mechanics to give certain mechanics a better feeling by zooming in/out.
      </span>
      </p> 
      <CollapsibleButton buttonContent={<HR_CameraManager/>} buttonName="Example Blueprint Snippets"/>
    </div>
  );
}
export default QB_CombatSystem;
