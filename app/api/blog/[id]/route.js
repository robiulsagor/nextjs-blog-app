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
