// @ts-nocheck
import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "@/lib/authOption";
import VisitorForm from "@/components/NewForm/Visitior";


const ProfilePage = async () => {
  const session = await getServerSession(authOptions);
  const email = session?.user?.email

  console.log(email)
  return (
    <div className="flex items-center justify-center">
      {email&&<VisitorForm  email ={session?.user.email}/>}
    </div>
  );
};

export default ProfilePage;