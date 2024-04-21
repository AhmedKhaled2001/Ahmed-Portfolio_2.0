import NavBar from "../Components/NavBar";
import ProjectList from "../Components/ProjectList";
import { useNavigate } from "react-router-dom";

function ThoughtsPage() {
  const navigate = useNavigate()

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
            <ProjectList/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ThoughtsPage;
