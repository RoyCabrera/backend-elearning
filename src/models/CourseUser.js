import Sequelize, { Model } from "sequelize";
import {sequelize} from "../database/database";
import Course from './Course';
import User from './User';

class CourseUser extends Model {}

CourseUser.init({

  courseId:{
    type:Sequelize.INTEGER,
    /* references:{
      model:'course',
      key:'id'
    } */
  },
  userId:{
    type:Sequelize.INTEGER,
    /* references:{
      model:'user',
      key:'id'
    } */
  }
},{
  /* tableName:'course', */
  sequelize,
  modelName:'course_user',
  timestamps:false
});
/*
CourseStudent.belongsTo(Course, { foreignKey: 'courseId' });
CourseStudent.belongsTo(User, { foreignKey: 'userId' }); */


/* Course.belongsToMany(User, {through:'course_user',foreignKey:'courseId',otherKey:'userId'});
User.belongsToMany(Course, {through:'course_user',foreignKey:'userId',otherKey:'courseId'}); */

export default CourseUser;
/* CourseStudent.belongsToMany(Course,{through:Course,foreignKey:"id"});

/* const Course_Student = sequelize.define('Course_Student', {}, { timestamps: false });
User.belongsToMany(Course, { through: Course_Student });
Course.belongsToMany(User, { through: Course_Student });
export default Course_Student; */