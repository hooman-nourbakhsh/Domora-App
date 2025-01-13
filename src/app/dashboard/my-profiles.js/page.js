import { getServerSession } from "next-auth";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";

async function MyProfiles() {
  await connectDB();
  const session = await getServerSession(authOptions);

  const [user] = await User.aggregate([
    {
      $match: { email: session.user.email },
    },
    {
      $lookup: {
        from: "profiles",
        foreignField: "userId",
        localField: "_id",
        as: "profiles",
      },
    },
  ]);
  return <div>MyProfiles</div>;
}

export default MyProfiles;
