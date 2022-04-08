import {DataTypes, Model} from 'sequelize';
import db from "../db";

class Services extends Model { 
}

Services.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING(11),
    allowNull: false,
  },
  teacher: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {sequelize: db})

export default Services;
