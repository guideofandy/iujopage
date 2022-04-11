import {DataTypes, Model} from 'sequelize';
import db from '../db';

class Profiles extends Model {
}

Profiles.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize: db,
  timestamps: false,
});

export default Profiles;
