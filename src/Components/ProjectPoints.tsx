
interface Props
{
  projectType : string;
  projectProgress: string;
  techUsed: string;
  TeamSize : string;
}

function ProjectPoints({projectType, projectProgress, techUsed, TeamSize} : Props) {
  return (
    <div>
    <div className="row ">
      <div className="col ">
        <div className="container">
          <p className="project-list-points project-points-l"> Project Type </p>
        </div>
      </div>
      <div className="col ">
        <div className="container">
          <p className="project-list-points project-points-r"> {projectType} </p>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <div className="container">
          <p className="project-list-points project-points-l"> Project Progress </p>
        </div>
      </div>
      <div className="col ">
        <div className="container">
          <p className="project-list-points project-points-r"> {projectProgress} </p>
        </div>
      </div>
    </div>
    <div className="row ">
      <div className="col ">
        <div className="container">
          <p className="project-list-points project-points-l"> Technology </p>
        </div>
      </div>
      <div className="col ">
        <div className="container">
          <p className="project-list-points project-points-r"> {techUsed} </p>
        </div>
      </div>
    </div>
    <div className="row ">
      <div className="col ">
        <div className="container">
          <p className="project-list-points project-points-l"> Team Size </p>
        </div>
      </div>
      <div className="col ">
        <div className="container">
          <p className="project-list-points project-points-r"> {TeamSize}  </p>
        </div>
      </div>
      


    </div>
    </div>
  );
}
export default ProjectPoints;
