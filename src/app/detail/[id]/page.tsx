import { authOptions } from "@/lib/authOption";
import VisitorUpdateForm from '@/components/NewForm/VisitiorUpdate';
import { getServerSession } from 'next-auth';
import React from 'react'
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
  console.log(iD)
  
  return (
    <div>

      {iD? <VisitorUpdateForm iD={iD} email={session?.user?.email} />: <p>...loading</p>}
      
    </div>
  )
}

export default page