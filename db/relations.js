import db from "./db";
import Posts from "./Models/Posts";
import Users from "./Models/Users";
import Tags from "./Models/Tags";
import Careers from "./Models/Careers";
import Services from "./Models/Services";
import Skills from "./Models/Skills";
import Profiles from "./Models/Profiles";
import setSeed from "./seeds/index";
import Logs from "./Models/Logs";

Users.hasMany(Posts, {
  as: "post",
  foreignKey: { name: "autorId", allowNull: false },
});
Users.hasMany(Logs, {
  as: "log",
  foreignKey: { name: "userId", allowNull: false },
});
Logs.belongsTo(Users, {
  as: "user",
});
Posts.belongsTo(Users, { as: "autor" });
Posts.hasMany(Tags, {
  as: "tag",
  foreignKey: { name: "postId", allowNull: false },
});
Tags.belongsTo(Posts, { as: "post", onDelete: "cascade" });
Careers.hasMany(Profiles, {
  foreignKey: { name: "careerId", allowNull: false },
});
Careers.hasMany(Skills, {
  foreignKey: { name: "careerId", allowNull: false },
});

export const sync = () => {
  db.sync({ force: true })
    .then(() => {
      setSeed();
      return {
        status: true,
        message: "Connection has been established successfully.",
      };
    })
    .catch((error) => {
      return { status: false, message: "Unable to connect to the database." };
    });
};
