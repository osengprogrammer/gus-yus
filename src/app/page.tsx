// @ts-nocheck

import Image from 'next/image'
import { authOptions } from "./api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { getTotalVoters, getUserByEmail, votersForUser } from '@/action/user';

import { redirect } from 'next/navigation';

export default async function Home() {

const session = await getServerSession()

const totalVoters = await getTotalVoters()

console.log(totalVoters,"ok")

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full flex-col items-center justify-center font-mono text-sm lg:flex">
     
     
      </div>
    </main>
  )
}
