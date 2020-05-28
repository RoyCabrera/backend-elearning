import Sequelize,{Model} from 'sequelize';
import {sequelize} from '../database/database';
import Student from './Student';
import Teacher from './Teacher';


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
    timestamps:false
});

User.hasMany(Student);
Student.belongsTo(User);

User.hasMany(Teacher);
Teacher.belongsTo(User);

export default User;