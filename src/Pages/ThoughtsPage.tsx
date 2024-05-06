import CollapsibleButton from "../Components/CollapsibleButton";
import NavBar from "../Components/NavBar";
import ProjectList from "../Components/ProjectList";
import { useNavigate } from "react-router-dom";
import RandomLevelGeneration from "../Components/RandomLevelGeneration";
import EnemyAI from "../Components/EnemyAI";
import CombatSystem from "../Components/CombatSystem";
import ProgressionSystem from "../Components/ProgressionSystem";
import UI from "../Components/UI";
import EnemySpawningSystem from "../Components/EnemySpawningSystem";
import CloudinaryVideo from "../Components/CloudinaryVideo";

type PP = 
{
  projectType : string;
  projectProgress: string;
  techUsed: string;
  TeamSize : string;
};
function ThoughtsPage() {

  let projPoints : PP = {
    projectProgress : "In Development", projectType: "Personal Project", TeamSize: "Solo", techUsed : "Unreal Engine 4/5 C++/Blueprints"
  };
  const navigate = useNavigate()
  let buttons = [<CollapsibleButton
    buttonContent={<RandomLevelGeneration />}
    buttonName="Random Level Generation"
  />,
  <CollapsibleButton buttonContent={<EnemyAI />} buttonName="Enemy AI" />,
  <CollapsibleButton
    buttonContent={<CombatSystem />}
    buttonName="Combat System"
  />,
  <CollapsibleButton
    buttonContent={<ProgressionSystem />}
    buttonName="Progression System"
  />,
  <CollapsibleButton
    buttonContent={<EnemySpawningSystem />}
    buttonName="Enemy Spawning System"
  />,
  <CollapsibleButton buttonContent={<UI />} buttonName="UI" />]
  return (
    <div className=" ProjectPage">

      {/* <video src={TBGV} className="vidBG" autoPlay loop muted></video> */}
      <CloudinaryVideo styling="vidBG" videoID="Thoughts_BG"/>
        <div className=" ProjectPageQB">
          <div className="container-fluid color-nav2 navbar-property">
            <NavBar onAboutHandler={() => navigate("/about")} onSchoolProjectsHandler={() => navigate("/SchoolProjects")} 
            onPersonalProjectsHandler={() => navigate("/PersonalProjects")} onContactHandler={() => navigate("/Contact")}
             />
          </div>
        <div className="row ">
          <div className="col ">
            <div className="container">
            <ProjectList ProjPoints={projPoints} Title="Thoughts" YTShowcaseLink="https://www.youtube.com/embed/zR-WfqmdfQE" ButtonsLists={buttons} Overview="              Thoughts is a game I have been working on for the past year, it
              started as a self improvement project, where it gave me a chance
              to try and implement different gameplay mechanics."/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ThoughtsPage;
