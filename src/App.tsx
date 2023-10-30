import { useRef } from "react";
import NavBar from "./Components/NavBar";

function App() {

  const aboutRef = useRef(null);
  const ScrollToSection = (elementRef:any) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior:"smooth",
    });
  };
  return (
    <div className="container-fluid color-nav">
      <div className="row">
        <div className="col">
          <NavBar onAboutHandler={()=>ScrollToSection(aboutRef)}/>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <img
            className="img-test"
            src="https://reactjs.org/logo-og.png"
            alt="Bootstrap"
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="container">
            <h1  className="aboutme-header"> About Me </h1>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="container">
            <h1 ref = {aboutRef} className="aboutme-desc"> ahmed is very good ahmed is very good ahmed is very good ahmed is very good ahmed is very good ahmed is very good ahmed is very good ahmed is very good ahmed is very good ahmed is very good ahmed is very good ahmed is very good ahmed is very good ahmed is very good ahmed is very good ahmed is very good ahmed is very good ahmed is very good ahmed is very good ahmed is very good ahmed is very good ahmed is very good ahmed is very good ahmed is very good ahmed is very good ahmed is very good </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
