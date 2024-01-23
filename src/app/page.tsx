// @ts-nocheck


import { authOptions } from "@/lib/authOption";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { AdminCard } from "@/components/AdminCard";
import { getUserByEmail } from "@/action/user";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (!session?.user) redirect("/login");
  // if(session?.user?.role!=="admin")redirect("/user-dashboard");
 
  const user = await getUserByEmail(session.user.email)
  if (user.role!=="admin") redirect("/user-dashboard");
  return (
    <main className="flex min-h-screen items-center justify-between w-full bg-red-300">
      <AdminCard />
    </main>
  );
}
