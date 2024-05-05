

import CloudinaryVideo from "./CloudinaryVideo";
function RandomLevelGeneration() {
  return (
    <div className="project-desc-nav">
      <CloudinaryVideo styling="project-list-img" videoID="Thoughts_LevelGen"/>
      <p className="project-desc-text">
        I designed and implemented a random level generation system for
        "Thoughts," incorporating variables to enhance design flexibility. These
        variables include minimum and maximum room widths and heights, the
        number of paths connecting rooms, and the total number of rooms. The
        algorithm operates on a tile-based framework, generating tiles and
        assembling them into rooms based on the specified inputs. Here's how it
        works:
      </p>
      <p className="project-desc-text">
        1 - Variable Initialization: The algorithm begins by checking the input
        parameters for room dimensions and paths. It selects random numbers
        within the specified ranges for room height and width, and determines
        the number of paths to create.
      </p>
      <p className="project-desc-text">
        2 - Room Construction: Tiles are spawned and arranged to form rooms,
        with equal numbers placed on each side of the starting tile to maintain
        symmetry. The algorithm tracks tile positions in a grid, ensuring
        cohesive room layouts.
      </p>
      <p className="project-desc-text">
        3 - Decoration Phase: After building the rooms, the algorithm sweeps
        through each tile, applying decorations based on predefined
        restrictions. For example, corner tiles with two open sides are
        identified and embellished accordingly, selecting decorations from a
        predetermined array of actors.
      </p>
      <p className="project-desc-text">
        4 - Path Creation: If additional rooms are required, the algorithm
        creates paths (corridors) between rooms, decrementing the room count
        with each iteration. Corridors lead the player to new rooms, with
        portals marking the end of each level.
      </p>
      <p className="project-desc-text">
        5 - Optional Backward Build: An optional parameter allows for backward
        building, necessitating additional calculations to maintain room
        connectivity.
      </p>
      <p className="project-desc-text">
        In conclusion, this random level generation system works for the design
        I have for the game. I'm happy with the way rooms are built, but I plan
        to further improve the decoration algorithm for the system.
      </p>
    </div>
  );
}
export default RandomLevelGeneration;
