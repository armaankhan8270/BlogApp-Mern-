import Blog from "../Modules/post.js";

export const CreatePost = async (req, res, next) => {
  const NewPost = new Blog(req.body);
  try {
    const SaveNewPost = await NewPost.save();
    res.json(SaveNewPost);
  } catch (error) {
    next(error.message);
  }
};
export const GetAllPost = async (req, res, next) => {
  try {
    const AllPost = await Blog.find();
    res.json(AllPost);
  } catch (error) {
    next(error.message);
  }
};
export const DeletePost = async (req, res, next) => {
  const id = req.params.id;
  const post = await Blog.findById(id);
  if (post.username == req.body.username) {
    try {
      await post.delete();
      res.json("deleted successfullt");
    } catch (error) {
      next(error.message);
    }
  } else {
    next("you can only delete your post");
  }
};
