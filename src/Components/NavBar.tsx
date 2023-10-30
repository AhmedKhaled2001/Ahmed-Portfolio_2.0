function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg color-nav">
      <div className="container-fluid">
        <a className="navbar-brand head-nav" href="">
          <text className="text-nav">Ahmed Abdalla</text>
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 sec-nav">
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                School Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Personal Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Resume
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
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
