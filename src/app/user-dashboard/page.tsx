import { getUserByEmail, getUserWithTotalVoters } from "@/action/user";
import { authOptions } from "@/lib/authOption";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

async function page() {
  const session = await getServerSession(authOptions);
  if (!session?.user) redirect("/login");
  
  const email = session && session.user?.email;

  const user = email && (await getUserByEmail(email));

  let voters = email && (await getUserWithTotalVoters(email));

  return (
    <div className="w-full p-8">
      <div className="bg-green-200 flex flex-col items-center justify-center p-8 rounded-lg">
        <div>
          <h1 className="text-2xl font-bold mb-4">
            You have {voters && voters?.totalVoters} members
          </h1>
          <div></div>

          <div className="mb-4">
            <Link href={`/adminlists/${voters && voters?.id}`}>
              <div>
                <div className="grid grid-cols-2 gap-2  bg-green-800 p-4 rounded-lg">
                  <p className="text-sm font-medium text-white">{voters && voters?.name}</p>
                  <p className="text-sm font-medium text-white">
                    Total {voters && voters?.totalVoters} Voters
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="mt-4">
          <Link href="/admin">
            <div className="block w-full bg-blue-500 text-white py-2 px-4 rounded-md text-center">
              List Of All Voters
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default page;
