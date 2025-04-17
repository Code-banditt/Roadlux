"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export function useAuth() {
  const { data: session, status } = useSession();

  return {
    session,
    isLoading: status === "loading",
    isAuthenticated: !!session,
    signIn,
    signOut,
  };
}
