import { DataTypes } from 'sequelize';
import db from "../db";

const Posts = db.define('Posts', {
  // Model attributes are defined here
  type: {
    type: DataTypes.STRING,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  autor: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
}, {
  timestamp: true,
});

export default Posts;

