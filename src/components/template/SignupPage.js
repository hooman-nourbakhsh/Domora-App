"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast, Toaster } from "react-hot-toast";
import styles from "@/template/SignupPage.module.css";
import { ThreeDots } from "react-loader-spinner";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const signupHandler = async (e) => {
    e.preventDefault();

    if (password !== rePassword) {
      return toast.error("رمز عبور با تکرار آن مطابقت ندارد");
    }
    setLoading(true);
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();
    setLoading(false);
    if (res.status === 201) {
      router.push("/signin");
      toast.success(data.message);
    } else {
      toast.error(data.error);
    }
  };

  return (
    <div className={styles.form}>
      <h4>فرم ثبت نام</h4>
      <form>
        <label htmlFor="">ایمیل:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor="">رمز عبور:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <label htmlFor="">تکرار رمز عبور:</label>
        <input type="password" value={rePassword} onChange={(e) => setRePassword(e.target.value)} />
        {loading ? (
          <ThreeDots color="#304ffe" height={45} ariaLabel="three-dots-loading" visible={true} wrapperStyle={{ margin: "auto" }} />
        ) : (
          <button type="submit" onClick={signupHandler}>
            ثبت نام
          </button>
        )}
      </form>
      <p>
        قبلا ثبت نام کرده اید؟ <Link href="/signin">ورود</Link>
      </p>
      <Toaster />
    </div>
  );
}

export default SignupPage;
