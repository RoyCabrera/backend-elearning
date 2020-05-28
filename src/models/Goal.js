import Sequelize, { Model } from "sequelize";
import {sequelize} from "../database/database";

class Goal extends Model {}

Goal.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  goal:Sequelize.STRING,
  created_at:Sequelize.DATE,
  updated_at:Sequelize.DATE,
  courseId:Sequelize.INTEGER
},{
  sequelize,
  modelName:'goal',
  timestamps:false
});



export default Goal;