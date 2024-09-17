"use client"
import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between h-[3vh] bg-black text-white p-7 fixed top-0 left-0 w-full z-50'>
        <h1 className='text-4xl font-semibold cursor-pointer'>Leflairstudios</h1>
        <div className='flex items-center justify-center gap-5 text-[20px] font-bold'>
          <Link href={"/"}><h1 className='cursor-pointer'>Home</h1></Link>
          <Link href={"/About"}><h1 className='cursor-pointer'>About</h1></Link>
          <Link href={"/Journal"}><h1 className='cursor-pointer'>Journal</h1></Link>
          <Link href={"/Contact"}><h1 className='cursor-pointer'>Contact</h1></Link>
        </div>
        <h1 className='text-[20px] font-bold cursor-pointer'>Catlog</h1>
        <h1 className='text-[20px] font-bold cursor-pointer'>Bag</h1>
    </nav>
  )
}

export default Navbar