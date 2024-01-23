"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "../ui/button";
import Image from "next/image";

export default function SignInForm() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      
      <Button className="bg-green-900 w-60" type="submit" onClick={() => signIn()} >
        
        Sign in
      </Button>
    </div>
  );
}
