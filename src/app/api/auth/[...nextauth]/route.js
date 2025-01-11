import User from "@/models/User";
import { verifyPassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const { email, password } = credentials;

        try {
          await connectDB();
        } catch (error) {
          throw new Error("مشکلی در سرور پیش آمده است");
        }

        if (!email || !password) throw new Error("لطفا تمامی فیلد ها را پر کنید");

        const user = await User.findOne({ email });
        if (!user) throw new Error("این حساب کاربری وجود ندارد");

        const isValid = await verifyPassword(password, user.password);
        if (!isValid) throw new Error(" ایمیل یا رمز عبور اشتباه است");

        return { email };
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
