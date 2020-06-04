import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from "../models/User";
import Student from '../models/Student';
import Teacher from '../models/Teacher';

export const getUsers = async (req, res) => {
  const users = await User.findAll();
  res.json({
    data: users,
  });
};

export const createUser = async (req, res) => {
  const { name, last_name, email, password } = req.body;

  const salt = await bcryptjs.genSalt(10);


  try {
    let user = await User.findOne({
      where: {
        email: email,
      },
    });

    if (user) {
      return res.status(400).json({
        message: "El usuario ya existe",
      });
    }
    let newUser = await User.create(
      {
        name: name,
        last_name: last_name,
        email: email,
        password: await bcryptjs.hash(password,salt),
      },
      {
        fields: ["name", "last_name", "email", "password"],
      }
    );

    if(newUser) {
      let newStudent = await Student.create({
          userId:newUser.id
      },{
        fields:["userId"]
      })
    }

    const payload = {
      usuario :{
        id:newUser.id
      }
    };

    jwt.sign(payload,'palabrasecreta',{
      expiresIn:3600
    },(error,token)=>{
      if(error) throw error;

      // mensaje de confirmacion
      if (newUser) {
        res.json({
          message: "Usuario creado satisfactoriamente",
          data: newUser,
          token:token
        });
      }
    })


  } catch (error) {
    console.log("Mensaje de error: ", error);
    res.status(500).json({
      message: "Algo sucedió mal",
    });
  }
};

export const updateUser = async(req,res)=>{

  const { id } = req.params;
    const { name, last_name, password } = req.body;
    const salt = await bcryptjs.genSalt(10);
    try {
        const users = await User.findAll({
            atributes: ['id', 'name', 'last_name', 'password'],
            where: {
                id
            }
        });
        if (users.length > 0) {
          users.forEach(async (user) => {
                await user.update({
                    // name: name ? name : project.name,
                    name:name,
                    last_name:last_name,
                    password:await bcryptjs.hash(password,salt),

                });
            });
            return res.json({
                message: 'user Updated',
                data: users
            })
        }
    } catch (e) {
        res.json({
            message: 'No se pudo actualizar el usuario.',
            data: {}
        })
    }
}

export const convertirDocente = async(req,res)=>{

  const { id } = req.params;
    const { roleId} = req.body;

    try {
        const users = await User.findAll({
            atributes: ['id', 'roleId'],
            where: {
                id
            }
        });
        if (users.length > 0) {
          users.forEach(async (user) => {
                await user.update({
                    // name: name ? name : project.name,
                    roleId:roleId,

                });

                await Teacher.create({
                  userId:id
                },{
                  fields:['userId']
                })
            });
            return res.json({
                message: 'Felicidades ahora eres docente de la plataforma',
                data: users
            })
        }
    } catch (e) {
        res.json({
            message: 'No se pudo actualizar el usuario.',
            data: {}
        })
    }
}