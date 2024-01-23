

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { NotebookTabs, SigmaSquare } from "lucide-react"
import { getAllUsers, getAllUsersWithTotalVoters, getTotalVoters } from "@/action/user"
import Link from "next/link"


const notifications = [
  {
    title: "Your call has been confirmed.",
    description: "1 hour ago",
  },
  {
    title: "You have a new message!",
    description: "1 hour ago",
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago",
  },
]

type CardProps = React.ComponentProps<typeof Card>

export async function AdminCard() {
    const totalVoters = await getTotalVoters()
    const userLists = await getAllUsersWithTotalVoters()
    console.log(userLists)
    
  return (
    <Card className="w-[380px]">
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>You have {totalVoters} member</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className=" flex items-center space-x-4 rounded-md border p-4">
            <SigmaSquare /> 
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
             Admin List
            </p>
          </div>
         
        </div>
        <div>
          {userLists.map((admin) => (

            <div
              key={admin.id}
              className=""
            >
              <Link href={"adminlists/"+admin.id}>
   
              <div className="flex items-around justify-center  w-full space-x-4">
                <p className="text-sm font-medium">
                  {admin.name}
                </p>
                <p className="text-sm font-medium">
                  Total{admin.totalVoters}
                </p>
              </div>
              </Link>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" >
          <Link href={"/admin"}>
            <NotebookTabs className="mr-2 h-4 w-4"> List Of All Voters
          </NotebookTabs>
          </Link>
        </Button>
       
      </CardFooter>
    </Card>
  )
}
