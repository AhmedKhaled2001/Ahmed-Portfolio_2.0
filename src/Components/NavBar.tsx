interface Props {
  onAboutHandler : () => void;
}

function NavBar({onAboutHandler}:Props) {
  return (
    <nav className="navbar navbar-expand-lg color-nav2">
      <div className="container-fluid color-nav1 ">
        <a className="navbar-brand head-nav" href="">
          <text className="text-nav">Ahmed Abdalla</text>
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 sec-nav">
            <li className="nav-item">
              <a className="nav-link text-nav1  " onClick={()=>onAboutHandler()} aria-current="page" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-nav1 " href="#">
                School Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-nav1 " href="#">
                Personal Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-nav1 " href="#">
                Resume
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link text-nav1 " href="#">
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
