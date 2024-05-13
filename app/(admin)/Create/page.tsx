"use client";
import { createEmployee } from "@/app/service/employee";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface employee {
  name: string;
  email: string;
  phone: number;
}

export default function Create() {
  const Router = useRouter();
  const [loading, setLoading] = useState(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    setLoading(true)
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("desigination", data.desigination);
    formData.append("gender", data.gender);
    formData.append("course", data.coures);

    formData.append("image", data.image[0]);
    await createEmployee(formData).then((res: any) => {
      console.log(res);
      if (res?.response?.status === 400) {
        toast.error(res.response.data);
        setLoading(true);
        reset();
      }
      if (res.status === 201) {
        Router.push("/EmployeeList");
      }else {
        setLoading(false)
      }
    });

    console.log(data);
  };
  return (
    <div className="w-full my-3 bg-white">
      <div className="flex justify-center p-5">
        <form
          encType="multipart/form-data"
          className="bg-white flex flex-col justify-center gap-3 md:p-2 p-5 border shadow-md"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex md:flex-row flex-col justify-center gap-3 md:p-2 p-5">
            <div className="flex flex-col">
              <label htmlFor="name">Name :</label>
              <input
                type="text"
                id="name"
                className="outline-none border bg-transparent h-12 rounded-sm px-4"
                {...register("name", { required: true })}
              />
              <label htmlFor="email">Email :</label>
              <input
                type="text"
                id="email"
                className="outline-none border bg-transparent h-12 rounded-sm px-4"
                {...register("email", { required: true })}
              />
              <label htmlFor="phone">Mobile No :</label>
              <input
                type="text"
                id="phone"
                className="outline-none border bg-transparent h-12 rounded-sm px-4"
                {...register("phone", { required: true })}
              />
              <label htmlFor="designation">Designation :</label>
              <select
                id="designation"
                className="outline-none border bg-transparent h-12 rounded-sm px-4"
                {...register("desigination", { required: true })}
              >
                <option value="HR">HR</option>
                <option value="Manager">Manager</option>
                <option value="Sales">Sales</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label>Gender :</label>
              <div className="flex justify-evenly">
                <label htmlFor="male">Male</label>
                <input
                  type="radio"
                  id="male"
                  value="Male"
                  {...register("gender")}
                />
                <label htmlFor="female">Female</label>
                <input
                  type="radio"
                  id="female"
                  value="Female"
                  {...register("gender")}
                />
              </div>

              <label>Courses :</label>
              <div className="flex justify-evenly my-5">
                <label htmlFor="mca">MCA</label>
                <input
                  type="checkbox"
                  id="mca"
                  value="MCA"
                  {...register("coures")}
                />
                <label htmlFor="bca">BCA</label>
                <input
                  type="checkbox"
                  id="bca"
                  value="BCA"
                  {...register("coures")}
                />
                <label htmlFor="bsc">BSC</label>
                <input
                  type="checkbox"
                  id="bsc"
                  value="BSC"
                  {...register("coures")}
                />
              </div>

              <label htmlFor="image">Image Upload :</label>
              <input
                type="file"
                id="image"
                className="outline-none border bg-transparent h-12 rounded-sm p-1"
                {...register("image", { required: true })}
              />
            </div>
          </div>
          <div className="flex justify-center items-center ">
            {!loading ? (
              <input
                type="submit"
                value={"SUBMIT"}
                className="w-full border bg-slate-300 rounded-sm h-14 hover:border-black"
              />
            ) : (
              <span className="loading loading-ball loading-sm"></span>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
