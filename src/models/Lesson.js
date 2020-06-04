import Sequelize, { Model } from "sequelize";
import {sequelize} from "../database/database";


class Lesson extends Model {}

Lesson.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  lesson:Sequelize.TEXT,
  url:Sequelize.TEXT,
  courseId:Sequelize.INTEGER,


  updated_at:Sequelize.DATE,
  courseId:Sequelize.INTEGER
},{
  sequelize,
  modelName:'lesson',
  timestamps:false
});

export default Lesson;
