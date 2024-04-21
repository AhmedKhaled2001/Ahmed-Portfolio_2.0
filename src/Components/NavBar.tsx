import { Link } from "react-router-dom";

interface Props {
  onAboutHandler : () => void;
  onSchoolProjectsHandler : () => void;
  onPersonalProjectsHandler : () => void;
  onResumeHandler : () => void;
  onContactHandler : () => void;
}

function NavBar({onAboutHandler, onSchoolProjectsHandler, onPersonalProjectsHandler, onResumeHandler, onContactHandler}:Props) {
  return (
    <nav className="navbar navbar-expand-lg color-nav2 ">
      <div className="container-fluid color-nav1 ">
        <Link className="navbar-brand head-nav" to = "../">
          <text className="text-nav">Ahmed Abdalla</text>
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 sec-nav">
            <li className="nav-item">
              <a className="text-nav1  " onClick={()=>onAboutHandler()}  href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className=" text-nav1" onClick={()=>onSchoolProjectsHandler()} href="#">
                School Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="text-nav1" onClick={()=>onPersonalProjectsHandler()} href="#">
                Personal Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="text-nav1" onClick={()=>onResumeHandler()} href="#">
                Resume
              </a>
            </li>
            <li className="nav-item ">
              <a className=" text-nav1" onClick={()=>onContactHandler()} href="#">
                Contact
              </a>
            </li>
            </ul>
        
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
