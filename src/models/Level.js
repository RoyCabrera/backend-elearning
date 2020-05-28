import Sequelize, { Model } from "sequelize";
import {sequelize} from "../database/database";

class Level extends Model {}

Level.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  name:Sequelize.STRING,
  description:Sequelize.TEXT,
  created_at:Sequelize.DATE,
  updated_at:Sequelize.DATE,
},{
  sequelize,
  modelName:'level',
  timestamps:false
});

export default Level;