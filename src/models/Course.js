import Sequelize, { Model } from "sequelize";
import {sequelize} from "../database/database";
import Teacher from './Teacher';
import Level from './Level';
import Category from './Category';


class Course extends Model {}

Course.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  name:Sequelize.STRING,
  description:Sequelize.TEXT,
  picture:Sequelize.STRING,
  created_at:Sequelize.DATE,
  updated_at:Sequelize.DATE,

  levelId:Sequelize.INTEGER,
  categoryId:Sequelize.INTEGER,
  statusId:Sequelize.INTEGER,
  teacherId:Sequelize.INTEGER,

},{
  sequelize,
  modelName:'course',
  timestamps:false
});

Course.belongsTo(Teacher);
Teacher.hasMany(Course);

Course.belongsTo(Level);
Level.hasMany(Course);

Course.belongsTo(Category);
Category.hasMany(Course);


/* Course.belongsTo(Status);
Status.hasMany(Course); */

export default Course;