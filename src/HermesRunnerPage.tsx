import CollapsibleButton from "./Components/CollapsibleButton";
import NavBar from "./Components/NavBar";
import ProjectList from "./Components/ProjectList";
import { useNavigate } from "react-router-dom";
import HR_MovementSystem from "./Components/HR_MovementSystem";
import HR_UI from "./Components/HR_UI";
import HR_TeamLead from "./Components/HR_TeamLead";




import CloudinaryVideo from "./Components/CloudinaryVideo";




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


  
  let Overview = "I'm currently working as a movement system engineering team lead (8 people), and a designer. Hermes' Runner is a 3D movement based open level parkour game, where the player can run around using Hermes' boots, deface billboards, and deliveries in a reimagined 2000s Greek city, where the gods are real and they own everything. Update (3/19/2025): A lot of work has been done on the game since then check out our early access now on STEAM https://store.steampowered.com/app/3536730/Hermes_Runner/ "
  let projPoints : PP = 
  {
    projectProgress : "In Progress", projectType: "School Captsone Project", TeamSize: "32", techUsed : "Unreal Engine 5.5 Blueprints"
  };
  const navigate = useNavigate()
  let buttons = [
    <CollapsibleButton
    buttonContent={<HR_TeamLead/>}
    buttonName="Team Lead Role"
  />,
  <CollapsibleButton
    buttonContent={<HR_MovementSystem />}
    buttonName="Movement System (To be Updated....)"
  />,
  <CollapsibleButton
    buttonContent={<HR_UI/>}
    buttonName="UI Implementation"
  />]
  return (
    <div >
     
      <CloudinaryVideo styling="vidBG" videoID="Hermes_BG_m5ukwo"/>
      <div className=" ProjectPageQB">
          <div className="container-fluid color-nav2 navbar-property">
            <NavBar onAboutHandler={() => navigate("/about")} onSchoolProjectsHandler={() => navigate("/SchoolProjects")} 
            onPersonalProjectsHandler={() => navigate("/PersonalProjects")} onContactHandler={() => () => 1}
             />
          </div>
        <div className="row ">
          <div className="col ">
            <div className="container">
            <ProjectList ProjPoints={projPoints} Title="Hermes Runner" YTShowcaseLink="https://www.youtube.com/embed/uHuWykLJt4U" ButtonsLists={buttons}
             Overview= {Overview}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default QuantumBlitzPage;
