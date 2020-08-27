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
  exercise:Sequelize.TEXT,
  archive:Sequelize.TEXT,
  description:Sequelize.TEXT,

  updated_at:Sequelize.DATE,
  courseId:Sequelize.INTEGER
},{
  sequelize,
  modelName:'lesson',
  timestamps:false
});

export default Lesson;
