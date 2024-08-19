import { connectDB } from "@/lib/config/db";
import BlogModel from "@/lib/models/BlogModel";
import fs from "fs";
import { NextResponse } from "next/server";

const DBConnection = async () => {
  await connectDB();
};

DBConnection();

export async function GET() {
  console.log("Get request hit");
  return NextResponse.json({ msg: "Hello from get request" });
}

export async function POST(request) {
  try {
    const formData = await request.formData();
    const image = formData.get("image");

    const blogData = {
      title: formData.get("title"),
      description: formData.get("description"),
      category: formData.get("category"),
      author: formData.get("author"),
      author_img: formData.get("author_img"),
    };

    if (
      !blogData.title ||
      !blogData.description ||
      !blogData.category ||
      !blogData.author ||
      !blogData.author_img ||
      !image
    ) {
      return NextResponse.json({
        success: false,
        message: `All fields are required!`,
      });
    }
    // if there is any missing field, reject the blog creation

    const timestamp = Date.now();

    const arrayBuffer = await image.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const path = `./public/${timestamp}-${image.name}`;
    fs.writeFileSync(path, buffer);
    const imageUrl = `/${timestamp}-${image.name}`;
    // upload image as buffer

    blogData.image = imageUrl;

    await BlogModel.create(blogData);

    return NextResponse.json({
      success: true,
      message: "Blog created",
    });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({
      success: false,
      message: `Failed to create blog !`,
    });
  }
}
