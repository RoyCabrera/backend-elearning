import Sequelize,{Model} from 'sequelize';
import {sequelize} from '../database/database';

class Category extends Model{}

Category.init({
  id:{
    type:Sequelize.INTEGER,
    primaryKey:true
  },
  name:Sequelize.STRING,
  description:Sequelize.TEXT,
  created_at:Sequelize.DATE,
  updated_at:Sequelize.DATE,
},{
  sequelize,
  modelName:'category',
  timestamps:false
})

export default Category;