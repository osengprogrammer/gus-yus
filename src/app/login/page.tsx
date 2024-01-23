import SignInForm from '@/components/loginform/SignInForm'
import { getServerSession } from 'next-auth';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import React from 'react'



async function page() {
const session = await getServerSession()
  console.log(session?.user);
  if(session?.user) redirect("/")
  return (
    <div>
        <SignInForm/>
    </div>
  )
}

export default page