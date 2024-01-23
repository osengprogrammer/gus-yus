import { authOptions } from "@/lib/authOption";

import { getServerSession } from 'next-auth';
import React from 'react'
import { getVotersByUserId } from "@/action/user";
import { columns } from "@/components/DataTable/Column";
import { DataTable } from "@/components/DataTable/DataTable";
import { redirect } from "next/navigation";

type Params = {
  id: string
}

interface PageProps {
  params: Params;
}


async function page({params}:PageProps) {

  const session = await getServerSession(authOptions);
  if (!session?.user) redirect("/login");
  
  const iD:string = params.id

  const voterOfAdmin = await getVotersByUserId(iD)
  console.log(voterOfAdmin)
  
  
  return (
    <div className="">

      {voterOfAdmin&&<DataTable data={voterOfAdmin} columns={columns}/>}
      
    </div>
  )
}

export default page