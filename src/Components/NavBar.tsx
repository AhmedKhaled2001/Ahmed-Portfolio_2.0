import { Link } from "react-router-dom";
import AboutMeIcon from "../assets/NavBarAssets/info.png";
import SchoolPIcon from "../assets/NavBarAssets/organization-structure.png";
import PersonalPIcon from "../assets/NavBarAssets/project-management.png";
import ResumeIcon from "../assets/NavBarAssets/resume.png";
import ContactIcon from "../assets/NavBarAssets/chat.png";

interface Props {
  onAboutHandler: () => void;
  onSchoolProjectsHandler: () => void;
  onPersonalProjectsHandler: () => void;
  // onResumeHandler: () => void;
  onContactHandler: () => void;
}

function NavBar({
  onAboutHandler,
  onSchoolProjectsHandler,
  onPersonalProjectsHandler,
  // onResumeHandler,
  onContactHandler,
}: Props) {
  return (
    <nav className="navbar navbar-expand-lg color-nav2 ">
      <div className="container-fluid  color-nav1 ">
        <Link className="navbar-brand head-nav" to="../">
          <text className="text-nav">Ahmed Abdalla</text>
        </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 sec-nav">
            <li className="nav-item">
              <span>
                <img src={AboutMeIcon} className="navbar-icon"></img>{" "}
                <a
                  className="text-nav1  "
                  onClick={() => onAboutHandler()}
                  href="#"
                >
                  About
                </a>
              </span>
            </li>
            <li className="nav-item">
              <span>
                <img src={PersonalPIcon} className="navbar-icon-middle"></img>{" "}
                <a
                  className="text-nav1"
                  onClick={() => onPersonalProjectsHandler()}
                  href="#"
                >
                  Personal Projects
                </a>
              </span>
            </li>
            <li className="nav-item">
              <span>
                <img src={SchoolPIcon} className="navbar-icon-middle"></img>{" "}
                <a
                  className=" text-nav1"
                  onClick={() => onSchoolProjectsHandler()}
                  href="#"
                >
                  School Projects
                </a>
              </span>
            </li>
            <li className="nav-item">
            <span>
                <img src={ResumeIcon} className="navbar-icon-middle"></img>{" "}
              <a
                className="text-nav1"
                target="_blank" rel="noopener noreferrer"
                href="https://drive.google.com/file/d/1huvga1ZsAO8w-u0Ka5Nz7x4rawbTfPbK/view?usp=sharing"
              >
                Resume
              </a>
              </span>
            </li>
            <li className="nav-item ">
            <span>
                <img src={ContactIcon} className="navbar-icon-middle"></img>{" "}
              <a
                className=" text-nav1"
                onClick={() => onContactHandler()}
                href="#"
              >
                Contact
              </a>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
