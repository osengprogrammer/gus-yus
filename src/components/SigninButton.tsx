"use client";
import { LogIn, LogOut } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

const SigninButton = () => {
  const { data: session } = useSession();
  console.log(session?.user);

  if (session && session.user) {
    return (
      <div className="flex gap-4 ml-auto">
        <p className="text-gray-50">{session.user.name}</p>
        <button onClick={() => signOut()} className="text-red-600">
        <LogOut />
        </button>
      </div>
    );
  }
  return (
    <button onClick={() => signIn()} className="text-green-600 ml-auto">
      <LogIn />
    </button>
  );
};

export default SigninButton;