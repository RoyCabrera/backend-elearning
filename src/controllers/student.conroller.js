import CourseUser from '../models/CourseUser';
import Course from '../models/Course';
import User from '../models/User';
import Sequelize, { Model } from "sequelize";
import {sequelize} from "../database/database";


export const courses_enrolled = async (req,res) => {
  const {id} = req.params;

  try {


    /* const Courses = await CourseStudent.findAll({
      attributes:['courseId','userId'],

      where:{
        userId:id
      },
    })

    res.json({
      courses:Courses
    }) */

  } catch (error) {
    console.log(error);

  }





 /*  const courseStudent = await CourseStudent.findAll({
    where:{
      userId:userId,
      courseId:courseId
    }
  })

  if(courseStudent > 0){
    return res.json({
      message:"esta inscrito en este curso",
      data:courseStudent
    })
  } */


}