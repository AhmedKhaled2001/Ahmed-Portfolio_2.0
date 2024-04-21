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

      <div>

          <div className="container-fluid color-nav2 navbar-property">
            <NavBar onAboutHandler={() => navigate("/about")} onSchoolProjectsHandler={() => navigate("/SchoolProjects")} 
            onPersonalProjectsHandler={() => navigate("/PersonalProjects")} onContactHandler={() => () => 1}
             onResumeHandler={() => navigate("/PersonalProjects")}/>
          </div>
        <div className="row ">
          <div className="col ">
            <div className="container">
            <ProjectList ProjPoints={projPoints} Title="Thoughts" YTShowcaseLink="https://www.youtube.com/embed/zR-WfqmdfQE" ButtonsLists={buttons}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ThoughtsPage;
