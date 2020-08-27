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
      {model:Category},
      {model:Status}
    ],
    order:[
      ["statusId","DESC"]
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
        {model:Category},
        {model:Lesson}

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
            {model:Category},
            {model:Lesson}

          ],
          where:{
            statusId:1
          }
        }

      ],
      where:{
        userId:id,

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

  /* const {file,body} = req; */

  /* console.log(JSON.parse(req.body.logros)); */

  //console.log(req.file);
  /* console.log("xxxxxxxxxxxxxxxxxxxxxxxx");
  console.log(file) */;


  const logros = JSON.parse(req.body.logros)
  const lecciones = JSON.parse(req.body.lecciones)

  const {
    teacherId,
    name,
    description,
    category,
    level,


  } = JSON.parse(req.body.course);

  try {
    const newCourse = await Course.create(
      {
      name:name,
      description:description,
      teacherId:teacherId,
      categoryId:category,
      levelId:level,
      picture:req.file.path
    },
    {
      fields:['name','description','teacherId','categoryId','levelId','picture']
    }
    )

    // insertar goals





    Object.values(logros).forEach(async val => {

      await Goal.create({
        courseId:newCourse.id,
        goal:val.logro
      },{
        fields:['courseId','goal']
      })

    });

    console.log(lecciones);

    Object.values(lecciones).forEach(async val => {
      await Lesson.create({
        courseId:newCourse.id,
        url:val.url_leccion,
        lesson:val.nombre,
        description:val.descripcion_leccion,
        exercise:val.code
      },{
        fields:['courseId','url','lesson','description','exercise']
      })
    })


    res.json({
      message:"curso creado satisfactoriamente",

    })
  } catch (error) {

  }


}

export const cambiarEstado = async (req,res)=> {

  const { id,statusId} = req.body;


  try {
      const courses = await Course.findAll({
          //atributes: ['id', 'name', 'last_name', 'password'],
          where: {
              id
          }
      });
      if (courses.length > 0) {
        courses.forEach(async (course) => {
              await course.update({
                  // name: name ? name : project.name,
                  statusId:statusId

              });
          });
          return res.json({
              message: 'curso actualizado',
              data: courses
          })
      }
  } catch (e) {
      res.json({
          message: 'No se pudo actualizar el curso.',
          data: {}
      })
  }
}


export const misCursosImpartidos = async (req,res)=> {
  const {id} = req.params;

  try {
    const misCursos = await Course.findAll({

      include:[

            {model:Teacher,include:User},
            {model:Level},
            {model:Category},
            {model:Lesson},
            {model:Status}


      ],
      where:{
        teacherId:id,

      }
    })

    res.json({
      misCursos:misCursos
    });
  } catch (error) {
    console.log(error);

  }
}
