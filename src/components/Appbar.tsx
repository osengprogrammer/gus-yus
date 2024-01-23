import Link from "next/link";
import React from "react";
import SigninButton from "./SigninButton";
import { FileSliders, Home, MessageSquarePlus } from "lucide-react";

const AppBar = () => {
  return (
    <header className="sticky top-0 z-50  flex items-center justify-between  bg-gradient-to-b from-green-500 to-green-700 shadow-md w-full h-20">
      <div className="flex items-center gap-4">
        <Link href="/" className="text-white text-xl font-semibold hover:text-blue-200 transition-colors"> 
        <Home />
        </Link>
      </div>
      
      <div className="flex items-center gap-4">
        <Link href="/admin" className="text-white hover:text-blue-200 transition-colors">
        <FileSliders />
        </Link>
        <Link href="/add-member" className="text-white hover:text-blue-200 transition-colors">
        <MessageSquarePlus />
        </Link>
        <SigninButton />
      </div>
    </header>
  );
};

export default AppBar;


