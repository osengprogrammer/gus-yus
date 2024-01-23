'use client'

import { ColumnDef } from '@tanstack/react-table'

import { MoreHorizontal, ArrowUpDown } from 'lucide-react'

import { Button } from '@/components/ui/button'
import Link from 'next/link';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'


export type User = {
  id: string,
  nama: string,
  nik: string,
  hp: string,
  tps: string,
  kecamatan: string,
  desa: string, 
}





export const columns: ColumnDef<User>[] = [
  {
    accessorKey: 'nama',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Nama
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      )
    }
  },
  {
    accessorKey: 'tps',
    header: 'TPS',
    // cell: ({ row }) => {
    //   const date = new Date(row.getValue('lastSeen'))
    //   const formatted = date.toLocaleDateString()
    //   return <div className='font-medium'>{formatted}</div>
    // }
  },
  {
    accessorKey: 'nik',
    header: 'NIK'
  },
  {
    accessorKey: 'desa',
    header: 'Desa'
  },
  {
    accessorKey: 'hp',
    header: 'HP'
  },
  {
    accessorKey: 'kecamatan',
    header: 'kecamatan'
  },

  {
    accessorKey: 'id',
    header: 'Action',
    cell: ({ row }) => {
      const user = row.original
      

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='ghost' className='h-8 w-8 p-0'>
              <span className='sr-only'>Open menu</span>
              <MoreHorizontal className='h-4 w-4' />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              
            >
              <Link href={`/detail/${user.id}`}>Go to detail page!</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
           
          
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
  }
]