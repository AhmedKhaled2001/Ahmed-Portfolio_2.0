function EnemySpawningSystem() {
  return (
    <div className="project-desc-nav">
      <p className="project-desc-text">
        I created a system for enemies to spawn in a randomized pattern to stay
        within the random theme of the game's design. I created that system by
        splitting up enemies into 6 different tiers tier 1 , 2 , 3 ranged, and
        tier 1 , 2, 3 melee, and associated every level with some variables such
        as, min number of waves, max number of waves, and min tier 1 enemies,
        etc... and created a system where it calculates an approriate amount of
        waves and number of enemies to spawn within the wave from each tier. The
        system makes it easier to design the levels, and balance the game since
        I only have to change the variables to make it easier or more difficult.
      </p>
    </div>
  );
}
export default EnemySpawningSystem;
