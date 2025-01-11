"use client";

import { SessionProvider } from "next-auth/react";

function NextAuthProviders({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
}

export default NextAuthProviders;
