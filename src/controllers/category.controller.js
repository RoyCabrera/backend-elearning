import Category from '../models/Category';


export const getCategories = async (req,res) => {

  let categories = await Category.findAll();

  res.json({
    categories
  })


}