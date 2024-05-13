'use client'
import { Login } from "@/app/service/admin";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {useRouter} from 'next/navigation'
import {toast} from 'sonner'
import Cookie from 'js-cookie'

interface userInfo {
    username: string;
    password:string
}
 
const Page = () => {
  const  router = useRouter()
  const { register, handleSubmit } = useForm <userInfo>();
  const [isLogin, setIstLogin] = useState(true)
  const onSubmit = async (data:userInfo) => {
    setIstLogin(false)
    await Login(data)
    .then((res:any)=>

    {
      if(res.status === 200 ){
        alert("login succes")
        Cookie.set("username", res.data.username)
        Cookie.set("token",res.data.token)
        router.push("/")
      }else if(res.response.status === 401) {
        setIstLogin(true)
        toast.error(res.response.data.msg)
      }
      console.log(res)
    }) 
  }
  return (
    <div className="w-full h-screen flex justify-center items-center md:p-5">
      <div className="w-[300px] border rounded-sm  shadow-lg flex flex-col justify-between gap-y-6 py-[5%] p-2 ">
        <h1 className="text-center font-semibold text-2xl ">Login</h1>
        <form action="" className="flex  flex-col gap-y-3" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
             
            id=""
            placeholder="User Name"
            className="w-full h-10 bg-zinc-200  p-4 outline-none"
            {...register("username",{required:true})}
            />
          <input
            type="password"
            
            id=""
            placeholder="Password"
            className="w-full h-10 bg-zinc-200  p-4 outline-none"
            {...register("password",{required:true})}
          />
         <div className="flex justify-center ">
         {isLogin ? <input
            type="submit"
            name=""
            id=""
            className="  w-full h-10  border border-black "
          /> :
          <span className="loading loading-dots loading-md"></span>}
         </div>
        </form>
      </div>
    </div>
  );
}


export default Page