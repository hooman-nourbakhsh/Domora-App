import Layout from "@/layout/Layout";
import { yekan } from "@/utils/fonts";
import "./globals.css";
import NextAuthProviders from "@/providers/NextAuthProviders";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={yekan.className}>
        <NextAuthProviders>
          <Layout>{children}</Layout>
        </NextAuthProviders>
      </body>
    </html>
  );
}
