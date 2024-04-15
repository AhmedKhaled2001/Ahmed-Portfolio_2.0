import { useRef } from "react";
import NavBar from "./Components/NavBar";
import ProjectCard from "./Components/ProjectCard";
import "./fonts/RobotoSlab-Regular.ttf";
import "./fonts/PlayfairDisplay-Regular.ttf";
import "./fonts/Dosis-Light.ttf";
import "./fonts/Dosis-Medium.ttf";
import "./fonts/Dosis-Regular.ttf";

type Card = {
Name : String;
Tags : String[];
Desc : String;
Background : string;
};


function App() {
  let phIcon: string = "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt6ce962f552812df5/62d6bd83c4f39a1084ff5bef/GettyImages-1409223178.jpg?format=pjpg&auto=webp&width=1920&quality=60";
  let ThoughtsCard: Card = {Name: "Thoughts", Tags: ["C++", "Blueprints", "Unreal Engine", "In Progress"], Desc : "Very good game!", Background: phIcon};
  let schoolProjects:Card[] = [ThoughtsCard];
  const aboutRef = useRef(null);
  const ScrollToSection = (elementRef: any) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <div className="container-fluid color-nav">
      <div className="row">
        <div className="col">
          <div className="container-fluid color-nav2">
            <NavBar onAboutHandler={() => ScrollToSection(aboutRef)} />
          </div>
          <img
            className="img-test"
            src="https://media3.giphy.com/media/xT0GqhayPV7R8lCzPW/giphy.gif?cid=ecf05e475igcg7hi6xgfey6l2m65ez3cvooujyldbpeaq0hv&ep=v1_gifs_related&rid=giphy.gif&ct=g"
            alt="Bootstrap"
          />
        </div>
      </div>
      <div className="row">
        <div className="col"></div>
      </div>
      <div className="row ">
        <div className="col  aboutme-header">
          <div className="container">
            <h1 ref={aboutRef} className="aboutme-headerText">
              {" "}
              About Me{" "}
            </h1>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col  aboutme-desc">
          <div className="container ">
            <h1 className="aboutme-descText">
              At 21 years old, I'm a game developer originally from Egypt, now
              pursuing my dreams in the United States. My journey in the world
              of game development began with a deep passion for creating
              immersive experiences . I'm currently studying Computer Science
              with a focus on game development, and I'll be graduating in May
              2025. I've had the privilege of working wi th various game
              engines, including Unreal Engine 5, Unity, and GameMaker . Games,
              for me, are a way to express my creativity and connect with people
              on a global scale. I'm excited about the possibilities that lie
              ahead and look forward t o a career that combines my skills as a
              game developer and a software engineer to make a positive impact
              in the gaming industry. Below you can see the projects I have
              worked on.
            </h1>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col schoolprojects-header">
          <div className="container">
            <h1 className="aboutme-headerText"> School Projects </h1>
          </div>
        </div>
      </div>
      <div className="row schoolprojects-header ">
        <div className="row">
          <div className="col schoolprojectcards-header">
          <div className="row">
          {schoolProjects.map((item) => (
            <div className="col ">
              <div className="container card-div">
                <ProjectCard tags = {item.Tags} desc={item.Desc} icon={item.Background}/>
              </div>
            </div>
          ))}
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="container ">
            <h1 className="aboutme-headerText"> Personal Projects </h1>
          </div>
        </div>
      </div>
      <div className="row">
      {schoolProjects.map((item) => (
            <div className="col ">
              <div className="container card-div">
                <ProjectCard tags = {item.Tags} desc={item.Desc} icon={item.Background}/>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
