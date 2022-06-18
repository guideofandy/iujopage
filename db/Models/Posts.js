import {DataTypes, Model} from 'sequelize';
import db from "../db";

class Posts extends Model {
}

Posts.init({
  title: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  sequelize: db,
});

export default Posts;

