import {DataTypes, Model} from 'sequelize';
import db from "../db";

class Services extends Model {
}

Services.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  path: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.TEXT('long'),
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
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  coordinator: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize: db,
  timestamps: false,
})

export default Services;
