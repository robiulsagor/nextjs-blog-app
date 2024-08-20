import BlogModel from "@/lib/models/BlogModel";
import { NextResponse } from "next/server";

import { connectDB } from "@/lib/config/db";

const dbConnection = async () => {
  await connectDB();
};

dbConnection(); // connect to the database

export async function GET(request, { params }) {
  const blog = await BlogModel.findById(params.id);
  return NextResponse.json(blog);
}

export async function DELETE(request, { params }) {
  try {
    const deleteBlog = await BlogModel.findByIdAndDelete(params.id);

    if (deleteBlog) {
      const blogs = await BlogModel.find();

      return NextResponse.json(blogs);
    }
    return NextResponse.json({
      success: false,
      message: "Something went wrong",
    });
  } catch (error) {
    console.log(error.message);

    return NextResponse.json({ success: false, message: error.message });
  }
}
