import { useEffect, useRef } from "react";
import NavBar from "./Components/NavBar";
import ProjectCard from "./Components/ProjectCard";
import "./fonts/RobotoSlab-Regular.ttf";
import "./fonts/PlayfairDisplay-Regular.ttf";
import "./fonts/Dosis-Light.ttf";
import "./fonts/Dosis-Medium.ttf";
import "./fonts/Dosis-Regular.ttf";
import ThoughtsBG from "./assets/ThoughtsCardBack.png"

type Card = {
Name : String;
Tags : String[];
Desc : String;
Background : string;
link : string;
};

interface Props
{
  launchCase: number; //0 -> just open 1 -> open on about me 2 -> open on School Projects 3 ->open on Personal Projects
}


function App({launchCase} : Props) {
  console.log(launchCase);
  function openPageSequence(x:number, aboutRef: any, schoolProjectsRef: any, personalProjectsRef: any)
{
  switch(x)
  {
    case 0:
      break;
    case 1:
      {
        window.scrollTo({
          top: aboutRef.current.offsetTop - 80,
          behavior: "smooth",
        });
        break;
      }
      case 2:
        {
          window.scrollTo({
            top: schoolProjectsRef.current.offsetTop - 80,
            behavior: "smooth",
          });
          break;
        }
        case 3:
          {
            window.scrollTo({
              top: personalProjectsRef.current.offsetTop - 80,
              behavior: "smooth",
            });
            break;
          }
  }
  return;
}
  let ThoughtsCardImg:string = ""
  let phIcon: string = "data:image/jpeg;base64,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";
  let ThoughtsCard: Card = {Name: "Thoughts", Tags: ["C++", "Blueprints", "Unreal Engine", "In Progress"], Desc : "Thoughts is a game I have been solo developing for the past year and a half, using Unreal Engine 4/5", Background: ThoughtsBG, link : "../Thoughts"};
  let schoolProjects:Card[] = [ThoughtsCard, ThoughtsCard];
  const aboutRef = useRef(null);
  const schoolPRef = useRef(null);
  const personalPRef = useRef(null);


  const ScrollToSection = (ref:any) => {
    setTimeout(() => {
      window.scrollTo({
        top: ref.current.offsetTop - 80,
        behavior: "smooth",
      });
    }, 50); // Adjust the delay as needed
  };
  useEffect(() => {
    setTimeout(()=> {openPageSequence(launchCase, aboutRef, personalPRef, schoolPRef)}, 150);
    },[]);
  return (
    <div className="container-fluid color-nav">
      <div className="row">
        <div className="col">
          <div className="container-fluid color-nav2 navbar-property">
            <NavBar onAboutHandler={() => ScrollToSection(aboutRef)} onSchoolProjectsHandler={() => ScrollToSection(schoolPRef)} 
            onPersonalProjectsHandler={() => ScrollToSection(personalPRef)} onContactHandler={() => ScrollToSection(personalPRef)}
             onResumeHandler={() => ScrollToSection(personalPRef)}/>
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
            <h1 ref = {schoolPRef} className="aboutme-headerText"> School Projects </h1>
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
                <ProjectCard tags = {item.Tags} desc={item.Desc} icon={item.Background} onClickLink={item.link}/>
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
            <h1 ref = {personalPRef} className="aboutme-headerText"> Personal Projects </h1>
          </div>
        </div>
      </div>
      <div className="row">
      {schoolProjects.map((item) => (
            <div className="col ">
              <div className="container card-div">
                <ProjectCard tags = {item.Tags} desc={item.Desc} icon={item.Background} onClickLink={item.link}/>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
