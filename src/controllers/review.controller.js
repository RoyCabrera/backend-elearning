
import Review from '../models/Review';
import User from '../models/User';



export const guardarComentario = async (req,res) => {

  const newReview = await Review.create(
    {
    comment:req.body.comment,
    userId:req.body.user_id,
    course_id:parseInt(req.body.course_id),

  },
  {
    fields:['comment','userId','course_id']
  }
  )

  res.json({
    message:"Comentario registrado",
    comment:newReview.comment
  })
}

export const getComments = async (req,res) => {

  const {id} = req.params;
  let reviews = await Review.findAll({
    include:[
      {model:User}
    ],
    where:{
      course_id:id
    },
    order:[
      ['id','ASC']
    ]
  })

  res.json({
    reviews
  })
}

