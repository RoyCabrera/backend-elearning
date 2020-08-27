import Sequelize, { Model } from "sequelize";
import {sequelize} from "../database/database";


class Post extends Model {}

Post.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  userId:Sequelize.INTEGER,
  language:Sequelize.TEXT,
  description:Sequelize.TEXT,
  code:Sequelize.TEXT,
  created_at:Sequelize.DATE,

},{
  sequelize,
  modelName:'post',
  timestamps:false
});





export default Post;