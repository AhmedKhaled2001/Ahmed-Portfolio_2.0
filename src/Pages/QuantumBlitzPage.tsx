import CollapsibleButton from "../Components/CollapsibleButton";
import NavBar from "../Components/NavBar";
import ProjectList from "../Components/ProjectList";
import { useNavigate } from "react-router-dom";
import QB_GameSystems from "../Components/QB_GameSystems";
import QB_CombatSystem from "../Components/QB_CombatSystem";
import QB_Portals from "../Components/QB_Portals";
import QB_AnimationState from "../Components/QB_AnimationState";



import CloudinaryVideo from "../Components/CloudinaryVideo";




type PP = 
{
  projectType : string;
  projectProgress: string;
  techUsed: string;
  TeamSize : string;
};
function QuantumBlitzPage() {


  // myVideo.resize(fill().width(150).height(150)
  // .gravity(Gravity.autoGravity().autoFocus(AutoFocus.focusOn(FocusOn.faces())))) // Crop the video, focusing on the faces.
  // .roundCorners(byRadius(20));  


  
  let Overview = "Quantum Blitz is local multiplayer fighting game where the player is most rewarded for precision and speed. The game was my project for the Traditional Game Development class. Our team consisted of 5 people, 3 Engineers, 1 Designer, and 1 3d artist. I an engineer on the development team,I prototyped, implemented, and polished some of the mechanics and systems of the game."
  let projPoints : PP = {
    projectProgress : "Finished", projectType: "School Project", TeamSize: "5", techUsed : "Unreal Engine 5.3 Blueprints"
  };
  const navigate = useNavigate()
  let buttons = [<CollapsibleButton
    buttonContent={<QB_CombatSystem />}
    buttonName="Combat System"
  />,
  <CollapsibleButton
    buttonContent={<QB_AnimationState/>}
    buttonName="Animation States"
  />,
  <CollapsibleButton
    buttonContent={<QB_Portals/>}
    buttonName="Portals"
  />,
  <CollapsibleButton
    buttonContent={<QB_GameSystems />}
    buttonName="Game Systems"
  />]
  return (
    <div >
     
      <CloudinaryVideo styling="vidBG" videoID="QB_BGV"/>
      <div className=" ProjectPageQB">

          <div className="container-fluid color-nav2 navbar-property">
            <NavBar onAboutHandler={() => navigate("/about")} onSchoolProjectsHandler={() => navigate("/SchoolProjects")} 
            onPersonalProjectsHandler={() => navigate("/PersonalProjects")} onContactHandler={() => () => 1}
             onResumeHandler={() => navigate("/PersonalProjects")}/>
          </div>
        <div className="row ">
          <div className="col ">
            <div className="container">
            <ProjectList ProjPoints={projPoints} Title="Quantum Blitz" YTShowcaseLink="https://www.youtube.com/embed/ymYqc0zqmD4" ButtonsLists={buttons}
             Overview= {Overview}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default QuantumBlitzPage;
