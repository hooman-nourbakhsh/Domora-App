import Profile from "@/models/Profile";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { Types } from "mongoose";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();
    const { title, description, location, phone, price, realEState, constructionDate, category, rules, amenities } = body;
    const session = await getServerSession(req);
    if (!session) {
      return NextResponse.json({ error: "لطفا وارد حساب کاربری خود شوید" }, { status: 401 });
    }
    const user = await User.findOne({ email: session.user.email });
    console.log(body);
    console.log(session);

    if (!user) {
      return NextResponse.json({ error: "این حساب کاربری وجود ندارد" }, { status: 404 });
    }
    if (!title || !description || !location || !phone || !price || !realEState || !constructionDate || !category) {
      return NextResponse.json({ error: "لطفا تمامی فیلد ها را پر کنید" }, { status: 422 });
    }
    const newProfile = await Profile.create({
      title,
      description,
      location,
      phone,
      realEState,
      constructionDate,
      category,
      rules,
      amenities,
      price: +price,
      userId: new Types.ObjectId(user._id),
    });
    return NextResponse.json({ message: "اگهی با موفقیت ایجاد شد" }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "مشکلی در سرور پیش آمده است" }, { status: 500 });
  }
}
