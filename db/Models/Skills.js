import {DataTypes, Model} from "sequelize";
import db from "../db";

class Skills extends Model {
}

Skills.init({
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  }
}, {
  timestamps: false,
  sequelize: db
}
);

export default Skills;
