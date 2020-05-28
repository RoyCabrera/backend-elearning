import Sequelize,{Model} from 'sequelize';
import {sequelize} from '../database/database';

class Teacher extends Model{}

Teacher.init({
  id:{
    type:Sequelize.INTEGER,
    primaryKey:true
  },
  title:Sequelize.STRING,
  biography:Sequelize.STRING,
  website_url:Sequelize.STRING,
  created_at:Sequelize.DATE,
  updated_at:Sequelize.DATE,
  userId:Sequelize.INTEGER,
},{
  sequelize,
  modelName:'teacher',
  timestamps:false
})

export default Teacher;