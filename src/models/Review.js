import Sequelize, { Model } from "sequelize";
import {sequelize} from "../database/database";


class Review extends Model {}


Review.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  comment:Sequelize.STRING,
  course_id:Sequelize.INTEGER,
  userId:Sequelize.INTEGER,
  rating:Sequelize.INTEGER

},{
  sequelize,
  modelName:'review',
  timestamps:false,

});



export default Review;