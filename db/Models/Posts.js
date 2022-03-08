import { DataTypes, Model } from 'sequelize';
import db from "../db";
class Posts extends Model {
}

Posts.init({
  type: {
    type: DataTypes.STRING(10),
  },
  title: {
    type: DataTypes.STRING(25),
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  image: {
    type: DataTypes.BLOB('long'),
    allowNull: true
  }
}, {
  sequelize: db,
});

export default Posts;

