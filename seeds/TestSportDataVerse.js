const sdv = require('sportsdataverse');
const gameId = 401272446;


(async function(){
    // get detailed play-by-play data for a game
const result = await sdv.nhl.getPlayByPlay(gameId);

// get box score
const box = await sdv.nhl.getBoxScore(gameId);

// get all game data
const summary = await sdv.nhl.getSummary(gameId);

// get all game pickcenter data
const picks = await sdv.nhl.getPicks(gameId);
console.log(result);
console.log(box);
console.log(summary);
console.log(picks);
})()