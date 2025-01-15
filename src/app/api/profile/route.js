import Profile from "@/models/Profile";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { Types } from "mongoose";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await connectDB();
    const profiles = await Profile.find().select("-userId");

    return NextResponse.json({ data: profiles }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "مشکلی در سرور پیش آمده است" }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    await connectDB();

    const { title, description, location, phone, price, realEState, constructionDate, category, rules, amenities } = await req.json();

    const session = await getServerSession(req);
    if (!session) {
      return NextResponse.json({ error: "لطفا وارد حساب کاربری خود شوید" }, { status: 401 });
    }

    const user = await User.findOne({ email: session.user.email });
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

export async function PATCH(req) {
  try {
    await connectDB();

    const { _id, title, description, location, phone, price, realEState, constructionDate, category, rules, amenities } = await req.json();

    const session = await getServerSession(req);
    if (!session) {
      return NextResponse.json({ error: "لطفا وارد حساب کاربری خود شوید" }, { status: 401 });
    }

    const user = await User.findOne({ email: session.user.email });
    if (!user) {
      return NextResponse.json({ error: "این حساب کاربری وجود ندارد" }, { status: 404 });
    }

    if (!_id || !title || !description || !location || !phone || !price || !realEState || !constructionDate || !category) {
      return NextResponse.json({ error: "لطفا تمامی فیلد ها را پر کنید" }, { status: 422 });
    }

    const profile = await Profile.findOne({ _id });
    if (!user._id.equals(profile.userId)) {
      return NextResponse.json({ error: "دسترسی شما به این آگهی محدود شده است" }, { status: 403 });
    }

    profile.title = title;
    profile.description = description;
    profile.location = location;
    profile.phone = phone;
    profile.realEState = realEState;
    profile.price = +price;
    profile.constructionDate = constructionDate;
    profile.amenities = amenities;
    profile.rules = rules;
    profile.category = category;
    profile.save();

    return NextResponse.json({ message: "اگهی با موفقیت ویرایش شد" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "مشکلی در سرور پیش آمده است" }, { status: 500 });
  }
}
