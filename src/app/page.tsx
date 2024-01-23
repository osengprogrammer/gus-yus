// @ts-nocheck

import Image from 'next/image'
import { authOptions } from "./api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { getUserByEmail, votersForUser } from '@/action/user';
import RegisterForm from '@/components/Form/ParentForm';
import { DataTable } from '@/components/DataTable/DataTable';
import { columns } from "@/components/DataTable/Column";
import { redirect } from 'next/navigation';

export default async function Home() {

const session = await getServerSession()


 
    // const user = await getUserByEmail(session.user.email);
    // const userVoters = await votersForUser(session.user.email)




  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full flex-col items-center justify-center font-mono text-sm lg:flex">
     
        {/* <ParentComponent/> */}
        {/* <RegisterForm userId={session?.user?.email}/>
        <div>
        <DataTable columns={columns} data={userVoters} />
        </div> */}
      </div>
    </main>
  )
}
