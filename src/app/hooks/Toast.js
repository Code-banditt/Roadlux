"use client";

import { useSession } from "next-auth/react";
import { useEffect, useRef } from "react";
import { toast } from "react-hot-toast";

export default function AuthSessionToast() {
  const { data: session, status } = useSession();
  const hasShownToast = useRef(false);

  useEffect(() => {
    if (status === "authenticated" && session && !hasShownToast.current) {
      toast.success(`login successful 🎉`),
        {
          style: {
            fontsize: "14px",
          },
        };
      hasShownToast.current = true;
    }
  }, [session, status]);

  return null;
}

export function Alert(message) {
  toast.success(message);
}

export function Error(message) {
  toast.error(message);
}
