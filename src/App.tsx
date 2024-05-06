import { useEffect, useRef } from "react";
import NavBar from "./Components/NavBar";
import ProjectCard from "./Components/ProjectCard";
import "./fonts/RobotoSlab-Regular.ttf";
import "./fonts/PlayfairDisplay-Regular.ttf";
import "./fonts/Dosis-Light.ttf";
import "./fonts/Dosis-Medium.ttf";
import "./fonts/Dosis-Regular.ttf";
import ThoughtsBG from "./assets/ThoughtsCardBack.png";
import DieOrBPBG from "./assets/DBPBG.png";
import QBBG from "./assets/QBBG.png";
import LinkedinIcon from "./assets/linkedin-app-icon.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import ExpandIcon from "./assets/expand.png";
import ReactPlayer from "react-player";





type Card = {
  Name: String;
  Tags: String[];
  Desc: String;
  Background: string;
  link: string;
};

interface Props {
  launchCase: number; //0 -> just open 1 -> open on about me 2 -> open on School Projects 3 ->open on Personal Projects
}

function App({ launchCase }: Props) {
  const [expanded, setExpanded] = useState(false);
  function openPageSequence(
    x: number,
    aboutRef: any,
    schoolProjectsRef: any,
    personalProjectsRef: any,
    contactsRef: any
  ) {
    switch (x) {
      case 0:
        break;
      case 1: {
        window.scrollTo({
          top: aboutRef.current.offsetTop - 80,
          behavior: "smooth",
        });
        break;
      }
      case 2: {
        window.scrollTo({
          top: schoolProjectsRef.current.offsetTop - 80,
          behavior: "smooth",
        });
        break;
      }
      case 3: {
        window.scrollTo({
          top: personalProjectsRef.current.offsetTop - 80,
          behavior: "smooth",
        });
        break;
      }
      case 4: {
        window.scrollTo({
          top: contactsRef.current.offsetTop - 80,
          behavior:"instant",
        });
        break;
      }
    }
    return;
  }
  let ThoughtsCard: Card = {
    Name: "Thoughts",
    Tags: ["C++", "Blueprints", "Unreal Engine", "In Progress"],
    Desc: "Thoughts is a game I have been solo developing for the past year and a half, using Unreal Engine 4/5",
    Background: ThoughtsBG,
    link: "../Thoughts",
  };
  let PharmaCard: Card = {
    Name: "Die or Beat Big Pharma",
    Tags: ["C++", "Blueprints", "Game Maker", "Finished"],
    Desc: "This game was my project for Alternative Game Development class",
    Background: DieOrBPBG,
    link: "../DORBP",
  };
  let QuantumBlitzCard: Card = {
    Name: "Quantum Blitz",
    Tags: ["C++", "Blueprints", "Unreal Engine", "In Progress"],
    Desc: "This game was my project for Traditional Game Development class",
    Background: QBBG,
    link: "../QuantumBlitz",
  };
  let schoolProjects: Card[] = [PharmaCard, QuantumBlitzCard];
  let PersonalProjects: Card[] = [ThoughtsCard];

  const aboutRef = useRef(null);
  const schoolPRef = useRef(null);
  const personalPRef = useRef(null);
  const contactRef = useRef(null);


  const ScrollToSection = (ref: any) => {
    setTimeout(() => {
      window.scrollTo({
        top: ref.current.offsetTop - 80,
        behavior: "smooth",
      });
    }, 50); // Adjust the delay as needed
  };
  useEffect(() => {
    setTimeout(() => {
      openPageSequence(launchCase, aboutRef, personalPRef, schoolPRef, contactRef);
    }, 100);
  }, []);
  return (
    <div className="mainContent color-nav">
      <div className="row">
        <div className="col">
          <div className=" color-nav2 navbar-property">
            <NavBar
              onAboutHandler={() => ScrollToSection(aboutRef)}
              onSchoolProjectsHandler={() => ScrollToSection(schoolPRef)}
              onPersonalProjectsHandler={() => ScrollToSection(personalPRef)}
              onContactHandler={() => ScrollToSection(contactRef)}
              // onResumeHandler={() => ScrollToSection(personalPRef)}
            />
          </div>
          {/* <div className="ratio ratio-16x9 testhover">
              <iframe
                src= "https://www.youtube.com/embed/ymYqc0zqmD4?autoplay=1&mute=1"
                title="YouTube video"
                frameBorder='0'
                allow='autoplay; encrypted-media'
              ></iframe>
            </div> */}
            <div className="player-wrapper">
            <ReactPlayer 
              url="https://www.youtube.com/embed/XiqFFihOio4"
              playing={true}
              height= "70vw"
              
              controls = {false}
              width= "100vw"
              loop
              muted
            />
            </div>
        </div>
      </div>
      <div>
      <div className={expanded == true ? "aboutme-pos expanded" : "aboutme-pos"}>

      <div  className="container" >
          <img src = {ExpandIcon} className="expandImg" onClick={() => {if(expanded == true) setExpanded(false); else setExpanded(true); }}/>
        </div>

      <div className="row ">
        <div className="col  aboutme-header ">
          <div className="container">
            <h1 ref={aboutRef} className="aboutme-headerText testhover">
              {" "}
              About Me
              {" "}
            </h1>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col  aboutme-desc">
          <div className="container ">
            <h1 className="aboutme-descText">
              At 22 years old, I'm a game developer originally from Egypt. My journey in the world
              of game development began with a deep passion for creating
              immersive experiences . I'm currently studying Computer Science
              with a focus on game development at the University of Utah, and I'll be graduating in May
              2025. I've had the privilege of working with various game
              engines, including Unreal Engine 5, Unity, and GameMaker . Games,
              for me, are a way to express my creativity and connect with people
              on a global scale. I'm excited about the possibilities that lie
              ahead and look forward t o a career that combines my skills as a
              game developer and a software engineer to make a positive impact
              in the gaming industry. Below you can see the projects I have
              worked on. I'm currently looking for internship opportunities as well as working on my solo project "Thoughts"
            </h1>
          </div>
        </div>
      </div>
      </div>
      <div className="row ">
        <div className="col schoolprojects-header">
          <div className="container ">
            <h1 ref={personalPRef} className="aboutme-headerText ">
              {" "}
              Personal Projects{" "}
            </h1>
          </div>
        </div>
      </div>
      <div className="row">
        {PersonalProjects.map((item) => (
          <div className="col  personalprojects-div">
            <div className="container card-div">
              <ProjectCard
                tags={item.Tags}
                desc={item.Desc}
                icon={item.Background}
                onClickLink={item.link}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="row">
        <div className="col schoolprojects-header">
          <div className="container">
            <h1 ref={schoolPRef} className="aboutme-headerText">
              {" "}
              School Projects{" "}
            </h1>
          </div>
        </div>
      </div>
      <div className="row schoolprojects-header ">
        <div className="row">
          <div className="col ">
            <div className="row schoolprojectcards-header">
              {schoolProjects.map((item) => (
                <div className="col ">
                  <div className="container card-div ">
                    <ProjectCard
                      tags={item.Tags}
                      desc={item.Desc}
                      icon={item.Background}
                      onClickLink={item.link}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      

      <div className="row" ref = {contactRef}>
        <div className="col  aboutme-header">
          <div className="container ">
            <h1 className="contact-headerText">
              Contact
            </h1>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col aboutme-desc">
          <div className="container ">
            <h1 className="aboutme-descText">
              You can reach me at ahmedkabdalla2001@gmail.com and my LinkedIn <span> <Link to = "https://www.linkedin.com/in/ahmedkhaledabdalla" target="_blank" rel="noopener noreferrer"> <img className = "img-inline"src = {LinkedinIcon}></img></Link></span>
            </h1>
          </div>
        </div>
      </div>


      </div>
    </div>
  );
}

export default App;
