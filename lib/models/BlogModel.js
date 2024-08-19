import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  category: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  author: {
    type: String,
    required: true,
  },
  author_img: {
    type: String,
    required: false,
  },
});

const BlogModel = mongoose.models.blog || mongoose.model("blog", blogSchema);
export default BlogModel;
