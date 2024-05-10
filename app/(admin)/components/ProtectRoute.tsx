'use client'

import React, { useEffect } from 'react'
import Cookie from 'js-cookie'
import { useRouter ,usePathname} from "next/navigation";
// import { useDispatch } from 'react-redux';
// import { setLogged } from '@/lib/feature/status/statusSlice';


export default function ProtectRoute() {
    const router = useRouter()
    const pathname = usePathname()
    // const dispatch  = useDispatch()
   
    useEffect(() => {
        const token = Cookie.get("token");
        if (!token && pathname !== "/auth") {
          router.push("/auth");
        //   dispatch(setLogged(false))
        }else{
            router.push("/")
        } 
        
        console.log(`wrong!!`)
      })
   return <div></div>
  
}
