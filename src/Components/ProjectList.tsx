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
  Overview:string;
}
function ProjectList({ProjPoints, Title, YTShowcaseLink, ButtonsLists, Overview}:Props) {
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
          <div className="col">
            <p className="project-list-desc ">
              {" "}
              {Overview}
              {" "}
            </p>
          </div>
        </div>
        <div className="row ">
          <div className="col">
            <p className="project-list-subheader "> Features </p>
          </div>
        </div>
        {ButtonsLists.map((item) => (
            item
          ))}
      </div>
    </div>
  );
}
export default ProjectList;
