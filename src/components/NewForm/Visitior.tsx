// @ts-nocheck

"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { insertVoter } from "@/action/user";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

type FormValues = {
  nama: string;
  email: string;
  kecamatan: string;
  desa: string;
  tps: string;
  nik: string;
  hp: string;
};

const schema = z.object({
  nama: z.string().nonempty("Username is required"),
  kecamatan: z.string().nonempty("Kecamatan is required"),
  desa: z.string().nonempty("Desa is required"),
  tps: z.string().nonempty("TPS is required"),
  nik: z.string().nonempty("NIK is required"),
  hp: z.string().nonempty("HP is required"),
});

const VisitorForm = ({
  email,
}: {
  email: string | null | undefined;
}) => {
  const [voterData, setVoterData] = useState<FormValues | null>(null);
  const [loading, setLoading] = useState(false);
  const form = useForm<FormValues>({
    defaultValues: voterData || {},
    resolver: zodResolver(schema),
  });

  const router = useRouter()
  const { register, handleSubmit, formState, setValue, reset } = form;
  const { errors } = formState;
  const { toast } = useToast();

  console.log(email,"okemail")
  const onSubmit = async (data: FormValues) => {
    try {
      setLoading(true);
      let newData = { ...data, email };
      console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^")
      console.log(newData)
      await insertVoter(newData);
      toast({
        title: "Member Added Succesfully.",
      });
    
      router.push("/admin")
      router.refresh();
      setLoading(false);
      reset();
    } catch (error) {
      console.error("Error submitting data:", error);
      // toast.error("Error submitting data. Please try again."); // Show error toast
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="bg-white p-8 rounded shadow-md"
      >
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Nama
          </label>
          <input
            type="text"
            id="nama"
            {...register("nama")}
            className="border rounded py-2 px-3 w-full focus:outline-none focus:border-blue-500"
          />
          <p className="text-red-500 text-xs italic">{errors.nama?.message}</p>
        </div>
        <div className="mb-4">
          <label
            htmlFor="kecamatan"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Kecamatan
          </label>
          <select
            id="kecamatan"
            {...register("kecamatan")}
            className="border rounded py-2 px-3 w-full focus:outline-none focus:border-blue-500"
          >
            <option value="Srono">Serono</option>
            <option value="Kecamatan">Kecamatan</option>
            <option value="Blimbingsari">Blimbingsari</option>
            <option value="Muncar">Muncar</option>
          </select>
          <p className="text-red-500 text-xs italic">
            {formState.errors.kecamatan?.message}
          </p>
        </div>

        <div className="mb-4">
          <label
            htmlFor="desa"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Desa
          </label>
          <input
            type="text"
            id="desa"
            {...register("desa")}
            className="border rounded py-2 px-3 w-full focus:outline-none focus:border-blue-500"
          />
          <p className="text-red-500 text-xs italic">{errors.desa?.message}</p>
        </div>

        <div className="mb-4">
          <label
            htmlFor="tps"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            TPS
          </label>
          <input
            type="text"
            id="tps"
            {...register("tps")}
            className="border rounded py-2 px-3 w-full focus:outline-none focus:border-blue-500"
          />
          <p className="text-red-500 text-xs italic">{errors.tps?.message}</p>
        </div>

        <div className="mb-4">
          <label
            htmlFor="nik"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            NIK
          </label>
          <input
            type="text"
            id="nik"
            {...register("nik")}
            className="border rounded py-2 px-3 w-full focus:outline-none focus:border-blue-500"
          />
          <p className="text-red-500 text-xs italic">{errors.nik?.message}</p>
        </div>

        <div className="mb-4">
          <label
            htmlFor="hp"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            HP
          </label>
          <input
            type="text"
            id="hp"
            {...register("hp")}
            className="border rounded py-2 px-3 w-full focus:outline-none focus:border-blue-500"
          />
          <p className="text-red-500 text-xs italic">{errors.hp?.message}</p>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue"
          disabled={loading} // Disable the button when loading
        >
          {loading ? "...loading" : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default VisitorForm;
