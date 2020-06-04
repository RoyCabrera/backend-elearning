import Sequelize, {Model} from 'sequelize';
import {sequelize} from '../database/database';

class Student extends Model{}

Student.init({
    id:{
      type:Sequelize.INTEGER,
      primaryKey:true
    },
    title:Sequelize.STRING,
    created_at:Sequelize.DATE,
    updated_at:Sequelize.DATE,
    userId:Sequelize.INTEGER
},{
  sequelize,
  modelName:'student',
  timestamps:false
});

/* Student.belongsToMany(Course,{
  through:'course_student'
}) */

export default Student;