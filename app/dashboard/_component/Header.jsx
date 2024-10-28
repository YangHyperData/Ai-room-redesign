"use client"
import { UserDetailContext } from '@/app/_context/UserDetailConext'
import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React, { useContext } from 'react'

function Header() {
    const {userDetail,setUserDetail} = useContext(UserDetailContext)
    return (
        <div className='p-5 shadow-md flex justify-between items-center'>
            <div className='flex gap-2 items-center'>
                <Image src={'/logo.svg'} width={50} height={50} alt='logo' />
                <h2 className='font-bold text-lg'>AI Room Redesign</h2>
            </div>

            <Button variant="ghost" className="rounded-full text-primary text-xl">Buy More Credits</Button>
            <div className='flex gap-16 items-center'>
                <div className='flex gap-2 items-center bg-slate-200 px-3 rounded-full p-1'>
                    <Image src={'/star.png'} width={30} height={30} alt='star'/>
                    <h2 className='text-lg font-bold'>{userDetail?.credits}</h2>
                </div>
                <UserButton
                    appearance={{
                        elements: {
                            avatarBox: 'h-16 w-16',
                        },
                    }}
                />
            </div>
        </div>
    )
}

export default Header
