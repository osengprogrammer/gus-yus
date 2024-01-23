import { authOptions } from "@/lib/authOption";

import { getServerSession } from 'next-auth';
import React from 'react'
import { getVotersByUserId } from "@/action/user";
import { columns } from "@/components/DataTable/Column";
import { DataTable } from "@/components/DataTable/DataTable";

type Params = {
  id: string
}

interface PageProps {
  params: Params;
}


async function page({params}:PageProps) {

  const session = await getServerSession(authOptions);
  const iD:string = params.id

  const voterOfAdmin = await getVotersByUserId(iD)
  console.log(voterOfAdmin)
  
  
  return (
    <div className="flex items-center justify-center w-full mx-auto">

      {voterOfAdmin&&<DataTable data={voterOfAdmin} columns={columns}/>}
      
    </div>
  )
}

export default page