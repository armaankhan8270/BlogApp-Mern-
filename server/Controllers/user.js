import Bloguser from "../Modules/user.js";
// import bcrypt from "bcryptjs";
import bcrypt from "bcryptjs";
// import user from "../Modules/user.js";

export const CreateUser = async (req, res, next) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.username, salt);
  try {
    const newUser = new Bloguser({
      username: req.body.username,
      password: hash,
      email: req.body.email,
    });
    console.log(newUser);
    const SavedUser = await newUser.save();
    res.status(203).json(SavedUser);
  } catch (error) {
    next(error.message);
    console.log("abe saaale");
  }
};

export const GetAllUser = async (req, res, next) => {
  try {
    const AllUser = await Bloguser.find();
    res.json(AllUser);
  } catch (error) {
    next(error.message);
  }
};
export const Login = async (req, res, next) => {
  console.log("reqwuest");
  try {
    const blogusers = await Bloguser.findOne({ username: req.body.username });
    if (!blogusers)
      return res.status(400).json("User not found!Pleae Check Your Username");

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      blogusers.password
    );
    if (!isPasswordCorrect)
      return res
        .status(400)
        .json("Wrong password or username!If You Are New Please SignUp first");

    res.json("Welcome To Blogiing App" + blogusers.username);
  } catch (error) {
    next(error.message);
  }
};
