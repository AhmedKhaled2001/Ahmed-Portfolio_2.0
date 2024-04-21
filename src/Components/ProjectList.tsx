import ProjectPoints from "./ProjectPoints";
type PP = 
{
  projectType : string;
  projectProgress: string;
  techUsed: string;
  TeamSize : string;
};
interface Props
{
  ProjPoints: PP;
  Title: string;
  YTShowcaseLink: string;
  ButtonsLists: React.ReactNode[];
}
function ProjectList({ProjPoints, Title, YTShowcaseLink, ButtonsLists}:Props) {
  return (
    <div className="project-list">
      <div>
        <p className="project-list-header"> {Title}</p>
        <ProjectPoints projectType= {ProjPoints.projectType} projectProgress= {ProjPoints.projectProgress} 
        TeamSize={ProjPoints.TeamSize} techUsed={ProjPoints.techUsed}/>
        <div className="row ">
          <div className="col">
            <div className="ratio ratio-16x9">
              <iframe
                src= {YTShowcaseLink}
                title="YouTube video"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col-flex">
            <p className="project-list-desc ">
              {" "}
              Thoughts is a game I have been working on for the past year, it
              started as a self improvement project, where it gave me a chance
              to try and implement different gameplay mechanics.{" "}
            </p>
          </div>
        </div>
        <div className="row ">
          <div className="col-flex">
            <p className="project-list-subheader "> Features </p>
          </div>
        </div>
        {ButtonsLists.map((item) => (
            item
          ))}
        {/* <CollapsibleButton
          buttonContent={<RandomLevelGeneration />}
          buttonName="Random Level Generation"
        />
        <CollapsibleButton buttonContent={<EnemyAI />} buttonName="Enemy AI" />
        <CollapsibleButton
          buttonContent={<CombatSystem />}
          buttonName="Combat System"
        />
        <CollapsibleButton
          buttonContent={<ProgressionSystem />}
          buttonName="Progression System"
        />
        <CollapsibleButton
          buttonContent={<EnemySpawningSystem />}
          buttonName="Enemy Spawning System"
        />
        <CollapsibleButton buttonContent={<UI />} buttonName="UI" /> */}
      </div>
    </div>
  );
}
export default ProjectList;
