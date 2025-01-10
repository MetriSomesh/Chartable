"use client";

import { useState, useEffect } from "react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SignButton() {
  const [isSession, setIsSession] = useState<boolean | null>(null);
  const router = useRouter();
  useEffect(() => {
    const checkSession = async () => {
      const session = await fetch("/api/auth/session"); // assuming you have a session API route
      const sessionData = await session.json();
      if (sessionData?.user) {
        setIsSession(true);
      } else {
        setIsSession(false);
      }
    };

    checkSession();
  }, []);

  if (isSession === null) {
      return (
          null
    );
  }

  return (
    <div>
      {!isSession ? (
        <div className="rounded-md shadow">
          <button
            type="button"
            className="w-full flex items-center justify-center px-2 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-2 md:text-sm md:px-2"
            onClick={()=>router.push("/signin")}
          >
            Sign in
          </button>
        </div>
      ) : (
        <div className="rounded-md shadow">
          <button
            type="button"
            className="w-full flex items-center justify-center px-2 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-2 md:text-sm md:px-2"
            onClick={() => signOut()}
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}
