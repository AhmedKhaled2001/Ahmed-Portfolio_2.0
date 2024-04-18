function ProgressionSystem() {
  return (
    <div className="project-desc-nav">
      <p className="project-desc-text">
      The progression system for the game was an area I hadn't explored yet before creating this game. Since the game is a rougelike the progression system had to be randomized
      and unique for each run, so the way I designed and implemented a progression system was by rewarding the player when clearing a room by offering 3 different stat upgrades and allowing the player to choose 
      one, and after beating the whole level (clearing the last room of the level) I offer the player 3 different special abilities (ex. have a 30 % chance of exploding while in combat dealing 50 damage to surrounding enemies) 
      and let the player choose one. Special abilities were made using delegates on certain events that the player encounter, such as dealing damage, or taking damage, and binding these events to the special abilities when activated.
      Also, since the progression system changes player stats, abilities, and the special abilities offered at the end (I don't want the same special ability to show up twice), I created a system
      to save and restore player information when moving between levels.
      </p>
      
    </div>
  );
}
export default ProgressionSystem;
