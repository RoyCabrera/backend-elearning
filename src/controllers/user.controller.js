import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from "../models/User";
import Student from '../models/Student';

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

    jwt.sign(payload,process.env.JWT_PALABRASECRETA,{
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
