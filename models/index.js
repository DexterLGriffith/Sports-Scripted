const NBATeams = require('./NBATeams');
const User = require('./users');
const Blog = require('./Blog');

//user has many blogs
User.hasMany(Blog, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

//blogs belong to user
Blog.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { NBATeams, User, Blog };
