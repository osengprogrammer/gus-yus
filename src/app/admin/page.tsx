import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "@/lib/authOption";
import { redirect } from "next/navigation";
import { getAllUsers, getAllVoters, getAllVotersByEmail, getUserByEmail } from "@/action/user";
import { DataTable } from "@/components/DataTable/DataTable";
import { columns } from "@/components/DataTable/Column";

const AdminPage = async () => {
  const session:any = await getServerSession(authOptions);

  let  voters = null
  const user = await getUserByEmail(session?.user.email)

  console.log(user[0].email)

  if(user[0]?.role =="user"){
     voters = await getAllVotersByEmail(session?.user.email)
  }

  if(user[0]?.role =="admin"){
    voters = await getAllVoters()
 }
  return (
    <div>
   {voters&&<DataTable data={voters} columns={columns}/>}
      
    </div>
  );
};

export default AdminPage;