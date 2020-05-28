import Goal from '../models/Goal';

export const getGoals = async (req,res) => {
  const {id} = req.params;

  let goals = await Goal.findAll({
    where:{
      courseId:id
    }
  })

  res.json({
    goals:goals
  });
}