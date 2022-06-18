import db from "../db";
import { DataTypes, Model } from "sequelize";

class Logs extends Model {}

Logs.init(
  {
    event: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    module: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    timestamps: true,
    createdAt: true,
    updatedAt: false,
  }
);

export default Logs;
