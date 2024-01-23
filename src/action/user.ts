"use server";
import prisma from "@/lib/prisma";
import { getSession } from "next-auth/react";

export async function getUserByEmail(email: string) {
  try {
    const user = await prisma.user.findUnique({
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
    const allVoters = await prisma.voters.findMany({
      orderBy: {
        created_at: 'desc',
      },
    });

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

    return voters;
  } catch (error) {
    console.error("Error fetching voters by email:", error);
    throw error;
  }
}

export async function insertVoter(data: any) {
  try {
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

    return totalVoters;
  } catch (error) {
    console.error("Error getting total voters:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};

export async function getUserWithTotalVoters(userEmail:string) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: userEmail,
      },
      include: {
        voters: true,
      },
    });

    if (!user) {
      throw new Error(`User with ID ${userEmail} not found`);
    }

    // Calculate total voters for the user
    const totalVoters = user.voters.length;

    // Create a new object with the totalVoters property
    const userWithTotalVoters = {
      ...user,
      totalVoters,
    };

    return userWithTotalVoters;
  } catch (error) {
    console.error(`Error fetching user with total voters for ID ${userEmail}:`, error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}



export async function getAllUsersWithTotalVoters() {
  try {
    const allUsers = await prisma.user.findMany({
      include: {
        voters: true,
      },
    });

    // Calculate total voters for each user
    const usersWithTotalVoters = allUsers.map((user) => {
      const totalVoters = user.voters.length;
      return {
        ...user,
        totalVoters,
      };
    });

    return usersWithTotalVoters;
  } catch (error) {
    console.error("Error fetching all users with total voters:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

export async function getVotersByUserId(userId: string) {
  try {
    const userWithVoters = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      include: {
        voters: true,
      },
    });

    if (!userWithVoters) {
      throw new Error(`User with id ${userId} not found.`);
    }

    const voters = userWithVoters.voters;

    return voters;
  } catch (error) {
    console.error(`Error fetching voters for user ${userId}:`, error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}
