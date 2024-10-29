import Image from 'next/image'
import React, { useState } from 'react'

function DesignType({selectedDesignType}) {

  const Designs=[
    {
        name:'Lux1',
        image:'/lux1.png',
    },
    {
        name:'Lux2',
        image:'/lux2.jpg',
    },
    {
        name:'Lux3',
        image:'/lux3.png',
    },
    {
        name:'Lux4',
        image:'/lux4.png',
    },
  ] 
  const [selectedOption,setSelectedOption] = useState(); 
  return (
    <div className='mt-5'>
        <label className='text-gray-500'>Select Interior Design Type</label>
        <div className='mt-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
            {Designs.map((design,index) =>(
                <div key={index} onClick={() => {setSelectedOption(design.name);selectedDesignType(design.name)}}>
                    <Image src={design.image} alt='select' width={100} height={100} className={`h-[100px] 
                    rounded-md hover:scale-105 transition-all cursor-pointer ${design.name==selectedOption&&'border-2 border-primary rounded-md p-1'}`}/>
                    <h2 className='font-bold'>{design.name}</h2>
                </div>
            ))}
        </div>
    </div>
  )
}

export default DesignType
