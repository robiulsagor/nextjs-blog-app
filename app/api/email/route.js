import EmailModel from "@/lib/models/EmailModel";
import { NextResponse } from "next/server";

const { connectDB } = require("@/lib/config/db");

const LoadDB = async () => {
  await connectDB();
};
LoadDB();

export async function POST(request) {
  const { email } = await request.json();
  const checkEmail = await EmailModel.findOne({ email });
  if (checkEmail) {
    return NextResponse.json({
      success: false,
      message: "Email already subscribed",
    });
  }

  const addMail = await EmailModel.create({ email });

  return NextResponse.json({ success: true, addMail });
}

export async function GET() {
  const mails = await EmailModel.find();
  return NextResponse.json(mails);
}

export async function DELETE(request) {
  const { email } = await request.json();
  try {
    await EmailModel.findOneAndDelete(email);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
