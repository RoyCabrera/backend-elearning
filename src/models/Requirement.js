import Sequelize, { Model } from "sequelize";
import {sequelize} from "../database/database";

class Requirement extends Model {}

Level.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  requirement:Sequelize.STRING,
  created_at:Sequelize.DATE,
  updated_at:Sequelize.DATE,
  courseId:Sequelize.INTEGER
},{
  sequelize,
  modelName:'requirement',
  timestamps:false
});

export default Requirement;