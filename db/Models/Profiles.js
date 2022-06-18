import {DataTypes, Model} from 'sequelize';
import db from '../db';

class Profiles extends Model {
}

Profiles.init({
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  sequelize: db,
  timestamps: false,
});

export default Profiles;
