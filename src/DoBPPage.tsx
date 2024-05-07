import CollapsibleButton from "./Components/CollapsibleButton";
import NavBar from "./Components/NavBar";
import ProjectList from "./Components/ProjectList";
import { useNavigate } from "react-router-dom";
import DOBP_Movement from "./Components/DOBP_Movement";
import DOBP_Pickups from "./Components/DOBP_Pickups";
import DOBP_AnimationState from "./Components/DOBP_AnimationState";
import CloudinaryVideo from "./Components/CloudinaryVideo";


type PP = 
{
  projectType : string;
  projectProgress: string;
  techUsed: string;
  TeamSize : string;
};
function DoBPPage() {
  let projPoints : PP = {
    projectProgress : "Finished", projectType: "School Project", TeamSize: "4", techUsed : "Game Maker 2 GML"
  };
  const navigate = useNavigate()
  let buttons = [<CollapsibleButton
    buttonContent={<DOBP_Movement />}
    buttonName="Movement"
  />,
  <CollapsibleButton buttonContent={<DOBP_Pickups />} buttonName="Pickups" />,
  <CollapsibleButton
    buttonContent={<DOBP_AnimationState />}
    buttonName="Animation State"
  />]
  return (
    <div className="ProjectPage">

<CloudinaryVideo styling="vidBG" videoID="DOBP_BG"/>

      <div>

          <div className="container-fluid color-nav2 navbar-property">
            <NavBar onAboutHandler={() => navigate("/about")} onSchoolProjectsHandler={() => navigate("/SchoolProjects")} 
            onPersonalProjectsHandler={() => navigate("/PersonalProjects")} onContactHandler={() => () => 1}
             />
          </div>
        <div className="row ">
          <div className="col ">
            <div className="container">
            <ProjectList ProjPoints={projPoints} Title="Die or Beat Big Pharma" YTShowcaseLink="https://www.youtube.com/embed/d4y7b_ytl5U" ButtonsLists={buttons} Overview=" Die or Beat Big Pharma was a project 
            I worked on for my undergraduate Alternative Game Development class, where the main goal was to make a game with an alternative value. The game focus on how big pharma influences the price on insulin, where our protagonist is a diabetic man that has to keep 
            his blood sugar in check while making his way to the top of a company to confront the boss! Our team consisted of 4 Engineers, so our approach with the alternative message was to make it through a fun 
            platformer with cool mechanics to play into our strengths as programmers who can develop these mechanics. I worked on this game as an Engineer, designer, and a producer"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DoBPPage;
