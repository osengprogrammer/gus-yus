// @ts-nocheck
import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "@/lib/authOption";
import VisitorForm from "@/components/NewForm/Visitior";
import { getUserByEmail } from "@/action/user";

const ProfilePage = async () => {
  const session = await getServerSession(authOptions);
  const userId = await getUserByEmail(session?.user?.email)

  console.log(userId)
  return (
    <div className="flex items-center justify-center">
      <VisitorForm  email ={userId?.email}/>
    </div>
  );
};

export default ProfilePage;