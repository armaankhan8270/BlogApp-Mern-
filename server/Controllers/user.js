import Bloguser from "../Modules/user.js";

export const CreateUser = async (req, res, next) => {
  const newUser = new Bloguser(req.body);
  try {
    const SavedUser = await newUser.save();
    res.status(203).json(SavedUser);
  } catch (error) {
    next(error);
  }
};

export const GetAllUser = async (req, res, next) => {
  try {
    const AllUser = await Bloguser.find();
    res.json(AllUser);
  } catch (error) {
    next(error);
  }
};
