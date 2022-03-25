import db from "./db";
import Posts from "./Models/Posts";
import Users from "./Models/Users";
import Tags from "./Models/Tags";
import setSeed from "./seeds/index"

Users.hasMany(Posts, { as: 'post', foreignKey: { name: 'autorId', allowNull: false } });
Posts.belongsTo(Users, { as: 'autor' });
Posts.hasMany(Tags, { as: 'tag', foreignKey: { name: 'postId', allowNull: false } });
Tags.belongsTo(Posts, { as: 'post', onDelete: "cascade" });

export const sync = async () => {
  try {
    await db.sync({ force: true }).then(() => {
      console.log('Connection has been established successfully.');
      setSeed();
      sequelize.close()
      return { status: true, message: "Connection has been established successfully." };
    })
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    return { status: false, message: "Unable to connect to the database." };
  }
}