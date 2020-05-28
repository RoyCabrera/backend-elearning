import Course from '../models/Course';
import Teacher from '../models/Teacher';
import Level from '../models/Level';
import Category from '../models/Category';
import Status from '../models/Status';
import User from '../models/User';
import Goal from '../models/Goal';

export const getCourses = async (req,res) => {

  let courses = await Course.findAll({
    include:[
      {model:Teacher,include:User},
      {model:Level},
      {model:Category}
    ]
  });
  res.json({
    data:courses
  })
}

export const getCourse = async (req,res) => {
  const {id} = req.params;
  try {
    let course = await Course.findOne({
      include:[
        {model:Teacher,include:User},
        {model:Level},
        {model:Category}

      ],
      where:{
        id
      }

    })
    res.json({
      course:course
    });
  } catch (error) {
    console.log(error);

  }

}
