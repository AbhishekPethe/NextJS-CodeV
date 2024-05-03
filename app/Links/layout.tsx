"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'


const navLinks = [
    { name: "Register", href: "/register" },
    { name: "Login", href: "/login" },
    { name: "Forgot Password", href: "/forgot-password" },
  ];

const Layout = ({ children }: {
    children : React.ReactNode
}) => {

    const pathname = usePathname()
    
    const [input , setInput] = useState("")
    
  return (
      <div className='flex flex-col gap-10 justify-center items-center'>
          <div className='flex gap-5'>
             <input value={input} onChange={(e) => setInput(e.target.value)} className='text-black'/>
          {
                  navLinks.map((each, i) => {
                      const isActive = pathname.startsWith(`/Links${each.href}`) //cuz we have extra in link
                      return (
                          <Link href={`/Links${each.href}`} key={each.name} className={isActive ? "font-bold" : "font-extralight"}>{each.name}</Link>
                    )
                })
            }
          </div>
        {children}
      </div>
  )
}

export default Layout