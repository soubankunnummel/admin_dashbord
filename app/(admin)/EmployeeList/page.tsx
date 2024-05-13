"use client";
import { DeleteEmployee, editData, getEmployees } from "@/app/service/employee";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function EmployeeList() {
  const Router = useRouter();
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  
  const handleEdit = async (id: string) => {
    Router.push(`/Edit${id}`);
  };

  async function getDta() {
    const res = await getEmployees();
    setData(res);
  }

  const deleteData = async (id: string) => {
    await DeleteEmployee(id)
    .then((res) => {
      getDta()
    })
  }

  useEffect(() => {
    getDta();
  }, []);

  const filteredData = data.filter((item: any) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {data?.length === 0 ? (
        <div className="fixed flex items-center justify-center left-0 right-0 bottom-0 top-0 m-auto">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        ""
      )}
      <div className="my-3 w-full  p-1 bg-white ">
        <div className="flex-1 justify-between flex items-center my-4 p-2 text-white">
          <div className="flex-1">
            <input
              type="text"
              className="w-[80%] lg:w-[40%] border  outline-none p-3 bg-transparent text-black"
              placeholder="Search by name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="p-3 bg-gray-700 hover:text-white text-white rounded-lg font-semibold ml-3">
              Search
            </button>
          </div>
          <Link href={"/Create"}>
            <AddIcon className="text-3xl text-black hover:text-gray-800 z-50 absolute right-10" />
          </Link>
        </div>
        <div className="overflow-x-auto ">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Unique Id</th>
                <th>Image</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile No</th>
                <th>Designation</th>
                <th>Gender</th>
                <th>Course</th>
                <th>Create Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="">
              {/* rows */}
              {filteredData.map((item: any, index: number) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <th>
                    <Image
                      src={item.image}
                      alt={`image${item.image} `}
                      width={300}
                      height={300}
                    />
                  </th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.desigination}</td>
                  <td>{item.gender}</td>
                  <td>{item.course}</td>
                  <td>
                    {new Date(item.createdAt).toLocaleDateString()
                      ? new Date(item.createdAt).toLocaleDateString()
                      : "No Date"}
                  </td>
                  <td className="flex flex-col gap-2">
                    <button
                      className="w-[50px] h-[35px] border rounded-lg bg-blue-600 text-white "
                      onClick={() => handleEdit(item._id)}
                    >
                      Edit
                    </button>
                    <button
                      className="w-[50px] h-[35px] border rounded-lg bg-red-600  text-white"
                      onClick={() => deleteData(item._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
