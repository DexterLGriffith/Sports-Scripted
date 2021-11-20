



const getNBAnews = async () => {
    const data = await fetch("https://fly.sportsdata.io/v3/nba/scores/json/News?key=9a108b6dad1848478e8b7308446476ea")
              .then(res => res.json())
              .then((result) => {
                  result.map( (each) => {
                      return {
                        NewsID: each.NewsID,
                        Title: each.Title,
                        OriginalSourceUrl: each.OriginalSourceUrl,
                        OriginalSourceName: each.OriginalSource,
                        Team: each.Team,
                        TimeAgo: each.TimeAgo,
                        TermsOfUse: each.TermsOfUse,
                        Content: each.Content,
                      }
                  });
                  return result;
              });
      return data;
      const getNBARoster = async (teamName) => {
        const data = await fetch(`https://fly.sportsdata.io/v3/nba/stats/json/Players/${teamName}?key=9a108b6dad1848478e8b7308446476ea`)
              .then(res => res.json())
              .then(results => {
                console.log(results)
                let filteredResults = results.filter((player) => {
                  if (player.Status === "Active") {
                    return true;
                  }
                });
                return filteredResults;
              });
        return data;    
  };
  
  const getAllTeams = async (sport) => {
    const data = await fetch(`/api/${sport}/teams`);
    return data
  };
  const getTeamLogo = async (sport, teamName) => {
    return await fetch(`api/${sport}/teams/logo/${teamName}`);
  };


  module.exports = router;
