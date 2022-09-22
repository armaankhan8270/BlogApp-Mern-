import Blog from "../Modules/post.js";

export const CreatePost = async (req, res, next) => {
  const NewPost = new Blog(req.body);
  try {
    const SaveNewPost = await NewPost.save();
    res.json(SaveNewPost);
  } catch (error) {
    next(error);
  }
};
export const GetAllPost = async (req, res, next) => {
  try {
    const AllPost = await Blog.find();
    res.json(AllPost);
  } catch (error) {
    next(error);
  }
};
