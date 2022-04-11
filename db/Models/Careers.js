import db from '../db';
import {DataTypes, Model} from 'sequelize';

class Careers extends Model {
}

Careers.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  career: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  path: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  color: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  icon: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  profile: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  pensumURL: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize: db,
  timestamps: false,
});

export default Careers;
