import Sequelize,{Model} from 'sequelize';
import {sequelize} from '../database/database';

class Status extends Model{}

Status.init({
  id:{
    type:Sequelize.INTEGER,
    primaryKey:true
  },
  status:Sequelize.STRING
},{
  sequelize,
  modelName:'status',
  timestamps:false
});

export default Status;