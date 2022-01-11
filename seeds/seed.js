const sequelize = require('../config/connection');
const{ NBATeams } = require('../models');

const NBAteamsSeedData = require('./nbaSeeds.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: false });

    const NBAteams = await NBATeams.bulkCreate(NBAteamsSeedData);

    process.exit(1);

};
seedDatabase();
