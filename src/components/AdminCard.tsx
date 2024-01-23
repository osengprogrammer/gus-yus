import { Button } from "@/components/ui/button";
import { getAllUsersWithTotalVoters, getTotalVoters } from "@/action/user";
import Link from "next/link";

export async function AdminCard() {
  const totalVoters = await getTotalVoters();
  const userLists = await getAllUsersWithTotalVoters();

  return (
    <div className="w-full p-8">
      <div className="bg-green-200 flex flex-col items-center justify-center p-8 rounded-lg">
        <div>
          <h1 className="text-2xl font-bold mb-4">
            You have {totalVoters} members
          </h1>
          <div></div>
          {userLists.map((admin) => (
            <div key={admin.id} className="mb-4">
              <Link href={`/adminlists/${admin.id}`}>
                <div>
                  <div className="grid grid-cols-2 gap-2  bg-green-800 p-4 rounded-lg">
                    <p className="text-sm font-medium text-white">
                      {admin.name}
                    </p>
                    <p className="text-sm font-medium text-white">
                      Total {admin.totalVoters} Voters
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
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
