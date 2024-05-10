import { getEmployees } from '@/app/service/employee'
import Image from 'next/image'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import Link from 'next/link';

export default async function  EmployeeList() {
  const res = await getEmployees() 
  console.log(res)
  return (
    <div className="my-3 w-full p-1 bg-white">
      <div className="flex-1 justify-between flex items-center my-4 p-2 text-white" >
            <div className='flex-1'>
            <input
              type="text"
              className="w-[80%] lg:w-[40%] border  outline-none p-3 bg-transparent text-black"
              placeholder="search by title"
              // onChange={filterItems}
            />
            <button className="p-3 bg-gray-700 hover:text-white text-white rounded-lg font-semibold ml-3">
              Search
            </button>
            </div>
      <Link href={'/Create'} >
      <AddIcon className='text-3xl text-black'/>
      </Link>
          </div>
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Uniqe Id</th>
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
        <tbody>
          {/* row 1 */}
          {res.map((item:any, index:number) => (
            <>
              <tr>
                <th>{index + 1} </th>
                <th><Image src={item.image} alt={`image${item.image} `} width={300} height={300} /> </th>
                <td>{item.name}</td>
                <td> {item.email} </td>
                <td> {item.phone} </td>
                <td> {item.desigination} </td>
                <td> {item.gender} </td>
                <td> {item.coures} </td>
                <td>{new Date(item.createdAt).toLocaleDateString() ? new Date(item.createdAt).toLocaleDateString() : "No Date" }</td>
                <td className='flex flex-col gap-2'>
                  <button className='w-[50px] h-[35px] border rounded-lg bg-blue-600 text-white '>Edit</button>
                  <button className='w-[50px] h-[35px] border rounded-lg bg-red-600  text-white'>Delete</button>
                </td>
             
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  )
}
