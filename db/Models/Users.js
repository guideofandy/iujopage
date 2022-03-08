import { DataTypes, Model } from 'sequelize';
import db from "../db";

class Users extends Model { }

Users.init({
  name: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(50),
    allowNull: false,
  }
}, {
  timestamp: true,
  sequelize: db,
});

export default Users;