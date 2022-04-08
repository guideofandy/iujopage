import db from '../db';
import { DataTypes , Model } from 'sequelize';

class Careers extends Model {
}

Careers.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  color: {
    type : DataTypes.INTEGER(6),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  profile : {
    type : DataTypes.TEXT,
    allowNull: false,
  },
  skills : {
    type : DataTypes.TEXT,
    allowNull: false,
  }
}, {
  sequelize: db,
});

export default Careers;
