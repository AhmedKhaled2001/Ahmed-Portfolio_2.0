import ProjectPoints from "./ProjectPoints";
import CollapsibleButton from "./CollapsibleButton";
import RandomLevelGeneration from "./RandomLevelGeneration";
import EnemyAI from "./EnemyAI";
import CombatSystem from "./CombatSystem";
import ProgressionSystem from "./ProgressionSystem";
import UI from "./UI";
import EnemySpawningSystem from "./EnemySpawningSystem";

function ProjectList() {
  return (
    <div className="project-list">
      <div>
        <p className="project-list-header"> Thoughts</p>
        <ProjectPoints />
        <div className="row ">
          <div className="col">
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/zR-WfqmdfQE"
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
        <CollapsibleButton
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
        <CollapsibleButton buttonContent={<UI />} buttonName="UI" />
      </div>
    </div>
  );
}
export default ProjectList;
