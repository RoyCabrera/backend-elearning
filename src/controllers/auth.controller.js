import User from "../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Role from '../models/Role';
import Student from "../models/Student";

export const userAuthentication = async (req, res) => {
  const { email, password } = req.body;

  // validar que sea un usuario registrado

  let usuario = await User.findOne({
    where: {
      email: email,
    },
  });

  if (!usuario) {
    return res.status(400).json({
      message: "El usuario no existe",
    });
  }

  // validar el password

  const passwordCorrect = await bcrypt.compare(password, usuario.password);

  if (!passwordCorrect) {
    return res.status(400).json({
      message: "el password es incorrecto",
    });
  }

  const payload = {
    usuario: {
      id: usuario.id
    },
  };

  jwt.sign(payload,'palabrasecreta',
    {
      expiresIn: 3600,
    },
    (error, token) => {
      if (error) throw error;

      // mensaje de confirmacion

      res.status(200).json({
        token: token,
      });


    }
  );
};

export const userAuthenticated = async (req,res)=>{

  try {
    const usuario = await User.findOne({
      where:req.usuario.id,
      attributes:['id','name','email','last_name','picture','roleId'],
      include:[Role,Student]

    });

    res.json({
      usuario
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message:"Hubo un error"
    })
  }

}
