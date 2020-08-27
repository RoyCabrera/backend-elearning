import User from '../models/User';
import Post from '../models/Post';


export const createPost = async(req,res) => {
  console.log(req.body);

  const newPost = await Post.create( {
    code:req.body.code,
    userId:req.body.userId,
    description:req.body.description,

  },
  {
    fields:['code','userId','description']
  })

  res.json({
   newPost

  })
}

export const getPosts = async(req,res) => {

  let allPosts = await Post.findAll({
    include:[
      {model:User}
    ],

    order:[
      ['id','ASC']
    ]
  });
  res.json({
    allPosts
  })
}

