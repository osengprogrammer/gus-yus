// @ts-nocheck

import Image from 'next/image'
import { authOptions } from "./api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { getTotalVoters, getUserByEmail, votersForUser } from '@/action/user';

import { redirect } from 'next/navigation';
import { AdminCard } from '@/components/AdminCard';

export default async function Home() {

const session = await getServerSession()

const totalVoters = await getTotalVoters()

if(!session?.user) redirect("/login")

console.log(totalVoters,"ok")

  return (
    <main className="flex min-h-screen items-center justify-between mt-20">
      <div className="z-10 max-w-5xl w-full flex-col items-center justify-center font-mono text-sm lg:flex">
     
      <AdminCard />
      </div>
    </main>
  )
}
