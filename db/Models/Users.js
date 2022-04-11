import {DataTypes, Model} from 'sequelize';
import db from "../db";

class Users extends Model {}

Users.init({
  id: {
    type: DataTypes.INTEGER(2),
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING(20),
    allowNull: false,
    unique: true,
  },
  role: {
    type: DataTypes.BOOLEAN(),
    allowNull: false,
    defaultValue: false
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true
  },
}, {
  timestamps: true,
  sequelize: db,
});

export default Users;
