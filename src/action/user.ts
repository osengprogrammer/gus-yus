"use server";
import prisma from "@/lib/prisma";
import { getSession } from "next-auth/react";


export async function getUserByEmail(email: string) {
  try {
    const user = await prisma.user.findMany({
      where: {
        email: email,
      },
    });

    return user;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

export const votersForUser = async (x: string) => {
  try {
    const userVoters = await prisma.voters.findMany({
      where: {
        email: x,
      },
    });
    return userVoters;
  } catch (error) {
    console.error("Error fetching all voters:", error);
    throw error;
  }
};

export async function getAllVoters() {
  try {
    const allVoters = await prisma.voters.findMany();
    console.log("All Voters:", allVoters);
    return allVoters;
  } catch (error) {
    console.error("Error fetching all voters:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

export const fetchSession = async () => {
  try {
    const session = await getSession(); // Assuming getSession is an asynchronous function
    return session;
  } catch (error) {
    console.error("Error fetching session:", error);
    // Handle errors if needed
  }
};

export async function deleteVoter(voterId: string) {
  try {
    const deletedVoter = await prisma.voters.delete({
      where: {
        id: voterId,
      },
    });

    console.log("Deleted Voter:", deletedVoter);
    return deletedVoter;
  } catch (error) {
    console.error("Error deleting voter:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

export async function updateVoter(voterId: string, data: any) {
  try {
    const updatedVoter = await prisma.voters.update({
      where: {
        id: voterId,
      },
      data: {
        nama: data.nama,
        nik: data.nik,
        hp: data.hp,
        tps: data.tps,
        desa: data.desa,
        kecamatan: data.kecamatan,
        email: data.email,
      },
    });

 
    
    return updatedVoter;
  } catch (error) {
    console.error("Error updating voter:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

export async function getVoterById(voterId: string) {
  try {
    const voter = await prisma.voters.findUnique({
      where: {
        id: voterId,
      },
    });

    console.log("Voter:", voter);
    return voter;
  } catch (error) {
    console.error("Error fetching voter by ID:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}
export async function getAllVotersByEmail(email: string) {
  try {
    const voters = await prisma.voters.findMany({
      where: {
        email: email,
      },
    });

    console.log('All Voters for Email:', voters);
    return voters;
  } catch (error) {
    console.error('Error fetching voters by email:', error);
    throw error;
  }
}




export async function insertVoter(data: any) {
  try {
    console.log(data);
    const createdVoter = await prisma.voters.create({
      data: {
        nama: data.nama,
        nik: data.nik,
        hp: data.hp,
        tps: data.tps,
        desa: data.desa,
        kecamatan: data.kecamatan,
        email: data.email,
      },
    });

    // console.log("Voter created:", createdVoter);
  } catch (error) {
    console.error("Error creating voter:", error);
  }
}

export async function getAllUsers() {
  try {
    const allUsers = await prisma.user.findMany();
    console.log("All Users:", allUsers);
    return allUsers;
  } catch (error) {
    console.error("Error fetching all users:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}




export const getTotalVoters = async (): Promise<number> => {
  try {
    const totalVoters = await prisma.voters.count();
    console.log('Total Voters:', totalVoters);
    return totalVoters;
  } catch (error) {
    console.error('Error getting total voters:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};
