import express from "express";
import multer from "multer";
import cors from "cors";
import mongoose from "mongoose";
import path from "path";
import Blog from "./Modules/post.js";
import UserRouter from "./Routes/user.js";
import PostRouter from "./Routes/post.js";
const app = express();
const port = 3001;
import { fileURLToPath } from "url";
// Define the __dirname for ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
const url =
  "mongodb+srv://armaankhan:armaan242@cluster0.ygbfntv.mongodb.net/?retryWrites=true&w=majority";

const connect = async () => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Successfully connected to MongoDB");
  } catch (err) {
    console.log("Failed to connect to MongoDB", err);
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

mongoose.connection.on("connected", () => {
  console.log("MongoDB connected");
});

// Multer configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// Routes
app.use("/user", UserRouter);
app.use("/post", PostRouter);

// Error middleware
app.use((err, req, res, next) => {
  return res.status(500).json("I am error: " + err);
});

// Endpoint to handle creating a post with a file
app.post("/posts/create", upload.single("photo"), async (req, res) => {
  const { title, desc, username, categories } = req.body;
  const newPost = new Blog({
    title,
    desc,
    username,
    categories,
    photo: req.file.filename, // Save filename to photo field
  });

  try {
    const savedPost = await newPost.save();
    res.json(savedPost);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Start the server
app.listen(port, () => {
  connect();
  console.log(`Server is running on http://localhost:${port}`);
});
