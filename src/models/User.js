import Sequelize,{Model} from 'sequelize';
import {sequelize} from '../database/database';
import Student from './Student';
import Teacher from './Teacher';
import Course from './Course';
import CourseUser from './CourseUser';
import Review from './Review';
import Post from './Post';


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

User.hasMany(Review);
Review.belongsTo(User);

User.hasMany(Post);
Post.belongsTo(User);

/* User.belongsToMany(Course,{
    through:'course_student',
    foreignKey:'courseId'
  }); */

  User.associate = (models) => {


    User.belongsToMany(models.Course, {through:'course_user',foreignKey:'userId',otherKey:'courseId'});
    /* User.belongsToMany(models.Review, {through:'review_user',foreignKey:'user_id'}); */
  };







export default User;