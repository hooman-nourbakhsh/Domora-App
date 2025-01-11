import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import SignupPage from "@/template/SignupPage";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

async function Signup() {
  const session = await getServerSession(authOptions);
  if (session) redirect("/");

  return <SignupPage />;
}

export default Signup;
