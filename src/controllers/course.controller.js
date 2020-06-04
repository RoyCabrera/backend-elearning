import Course from '../models/Course';
import Teacher from '../models/Teacher';
import Level from '../models/Level';
import Category from '../models/Category';
import Status from '../models/Status';
import User from '../models/User';
import Student from '../models/Student';
import Goal from '../models/Goal';
import Lesson from '../models/Lesson';
import CourseUser from '../models/CourseUser';


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

export const enrollCourse = async (req,res) => {
  const {courseId,userId} = req.body;


  try {

    const course_student = await CourseUser.findOne({
      attributes:['courseId','userId'],
      where:{

        courseId:courseId,
        userId:userId
      },

    })

    if(!course_student){
      const newCourseUser = await CourseUser.create({
        courseId:courseId,
        userId:userId
      },
      {
        fields:['courseId','userId']
      });

      res.json({
        message:"Se Inscribío correctamente",
        enroll:true,
        courses_students:newCourseUser
      })
    }else {
      res.json({
        message:"Ya se encuentra registrado en este curso",
        enroll:false,
      })
    }


  } catch (error) {
    console.log("Mensaje de error: ", error);
    res.status(500).json({
      message: "No se pudo inscribir al curso",
    });
  }


}


export const mycourses = async (req,res) => {

  const {id} = req.params;

  try {
    const misCursos = await CourseUser.findAll({

      include:[
        {
          model:Course,include:[
            {model:Teacher,include:User},
            {model:Level},
            {model:Category}

          ],
        }
      ],
      where:{
        userId:id
      }
    })

    res.json({
      misCursos:misCursos
    });
  } catch (error) {
    console.log(error);

  }
}

export const createCourse = async (req,res) => {
  const {
    teacherId,
    name,
    description,
    category,
    level,
    logro1,
    logro2,
    logro3,
    logro4,
    namelesson1,
    namelesson2,
    namelesson3,
    namelesson4,
    urllesson1,
    urllesson2,
    urllesson3,
    urllesson4} = req.body;






    const newCourse = await Course.create(
      {
      name:name,
      description:description,
      teacherId:teacherId,
      categoryId:category,
      levelId:level
    },
    {
      fields:['name','description','teacherId','categoryId','levelId']
    }
    )

    // insertar goals


    let goals = [logro1,logro2,logro3,logro4];
    goals.forEach(async (goal) => {
      if (goal != '') {

        await Goal.create({
          courseId:newCourse.id,
          goal:goal
        },{
          fields:['courseId','goal']
        })

      }

  });



    if(namelesson1 != '' && urllesson1 != ''){
      await Lesson.create({
        courseId:newCourse.id,
        url:urllesson1,
        lesson:namelesson1
      },{
        fields:['courseId','url','lesson']
      })
    }
    if(namelesson2 != '' && urllesson2 != ''){
      await Lesson.create({
        courseId:newCourse.id,
        url:urllesson2,
        lesson:namelesson2
      },{
        fields:['courseId','url','lesson']
      })
    }
    if(namelesson3 != '' && urllesson3 != ''){
      await Lesson.create({
        courseId:newCourse.id,
        url:urllesson3,
        lesson:namelesson3
      },{
        fields:['courseId','url','lesson']
      })
    }
    if(namelesson4 != '' && urllesson4 != ''){
      await Lesson.create({
        courseId:newCourse.id,
        url:urllesson4,
        lesson:namelesson4
      },{
        fields:['courseId','url','lesson']
      })
    }



    res.json({
      message:"curso creado satisfactoriamente",

    })
}

