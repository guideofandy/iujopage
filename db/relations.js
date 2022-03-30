import db from "./db";
import Posts from "./Models/Posts";
import Users from "./Models/Users";
import Tags from "./Models/Tags";
import setSeed from "./seeds/index"

Users.hasMany(Posts, { as: 'post', foreignKey: { name: 'autorId', allowNull: false } });
Posts.belongsTo(Users, { as: 'autor' });
Posts.hasMany(Tags, { as: 'tag', foreignKey: { name: 'postId', allowNull: false } });
Tags.belongsTo(Posts, { as: 'post', onDelete: "cascade" });

export const sync = () => {
  db.sync({ force: true }).then(() => {
    setSeed();
    return { status: true, message: "Connection has been established successfully." };
  }).catch((error) => {
    return { status: false, message: "Unable to connect to the database." }
  });
}