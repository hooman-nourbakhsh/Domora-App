import { NextResponse } from "next/server";
import connectDB from "@/utils/connectDB";
import User from "@/models/User";
import { hashPassword } from "@/utils/auth";

export async function POST(req) {
  try {
    await connectDB();

    const { email, password } = await req.json();
    if (!email || !password) {
      return NextResponse.json({ error: "لطفا تمامی فیلد ها را پر کنید" }, { status: 422 });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: "این ایمیل قبلا ثبت شده است" }, { status: 409 });
    }

    const hashedPassword = await hashPassword(password);
    const newUser = await User.create({ email: email, password: hashedPassword });

    console.log(newUser);
    return NextResponse.json({ message: "ثبت نام با موفقیت انجام شد" }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "مشکلی در سرور پیش آمده است" }, { status: 500 });
  }
}
