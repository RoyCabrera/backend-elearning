import Sequelize, { Model } from "sequelize";
import {sequelize} from "../database/database";
import Teacher from './Teacher';
import Level from './Level';
import Category from './Category';
import User from './User';
import CourseUser from "./CourseUser";
import Goal from "./Goal";
import Status from "./Status";
import Lesson from "./Lesson";
import Review from './Review';


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
  timestamps:false,
  classMethods:{
    associate: function(models){
      Course.belongsToMany(models.User, {through:'course_user',foreignKey:'courseId',otherKey:'userId'});
    }
  }
});


Course.hasMany(CourseUser);
CourseUser.belongsTo(Course);

Status.hasMany(Course);
Course.belongsTo(Status);

Course.hasMany(Lesson);
Lesson.belongsTo(Course);

/* Course.hasMany(Review);
Review.belongsTo(Course); */

Course.belongsTo(Teacher,{
  targetKey:'userId'
});
Teacher.hasMany(Course);

Course.belongsTo(Level);
Level.hasMany(Course);

Course.belongsTo(Category);
Category.hasMany(Course);

Course.hasMany(Goal);
Goal.belongsTo(Course);



/* Course.belongsToMany(User,{
  through:'course_student',
  foreignKey:'userId'
}); */


Course.associate = (models) => {
  Course.belongsToMany(models.User, {through:'course_user',foreignKey:'courseId',otherKey:'userId'});

};





export default Course;