import Layout from "@/layout/Layout";
import { yekan } from "@/utils/fonts";
import "./globals.css";
import NextAuthProviders from "@/providers/NextAuthProviders";
import { icons } from "@/constants/icon";

export const metadata = {
  title: "املاک || DomorA",
  description: "ساخت خرید و فروش املاک",
  icons: { icon: "./favicon.ico" },
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
