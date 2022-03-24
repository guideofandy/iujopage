import { DataTypes, Model } from 'sequelize';
import db from "../db";

class Tags extends Model { }

Tags.init({
  id: {
    type: DataTypes.INTEGER(),
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(15),
    allowNull: false,
  }
}, {
  timestamps: false,
  sequelize: db,
});

export default Tags;