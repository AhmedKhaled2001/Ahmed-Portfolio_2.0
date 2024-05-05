
import CloudinaryVideo from "./CloudinaryVideo";
function QB_Portals() {
  return (
    <div className="project-desc-nav">
      <CloudinaryVideo styling="project-list-img" videoID="QB_Portals"/>
      <p className="project-desc-text">
        I implemented the portals system for the game, where the player uses their left and right trigger to make to portals and if the player has two portals
        in the level the player can teleport between them. The portal also maintains momentum, which is why it's a big part of the game in terms of design it lets the player
        maintain their momentum and allows them to strategize to find strong hits on other players
      </p>
      
    </div>
  );
}
export default QB_Portals;
