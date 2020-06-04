import Sequelize,{Model} from 'sequelize';
import {sequelize} from '../database/database';
import Student from './Student';
import Teacher from './Teacher';
import Course from './Course';
import CourseUser from './CourseUser';



class User extends Model{}

User.init({
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true
    },
    name:Sequelize.STRING,
    last_name:Sequelize.STRING,
    password:Sequelize.STRING,
    picture:Sequelize.STRING,
    email:Sequelize.STRING,
    created_at:Sequelize.DATE,
    updated_at:Sequelize.DATE,
    roleId:Sequelize.INTEGER
},{
    sequelize,
    modelName:'user',
    timestamps:false,
    classMethods:{
        associate: function(models){
            User.belongsToMany(models.Course, {through:'course_user',foreignKey:'userId',otherKey:'courseId'});
        }
      }
});

User.hasMany(CourseUser);
CourseUser.belongsTo(User);

User.hasMany(Student);
Student.belongsTo(User);

User.hasMany(Teacher);
Teacher.belongsTo(User);
/* User.belongsToMany(Course,{
    through:'course_student',
    foreignKey:'courseId'
  }); */

  User.associate = (models) => {


    User.belongsToMany(models.Course, {through:'course_user',foreignKey:'userId',otherKey:'courseId'});
  };





export default User;