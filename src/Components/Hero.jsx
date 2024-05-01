import React from 'react'

function Hero() {
  return (
    <main className='flex m-auto max-w-[1280px] items-center h-[calc(100vh-72px)]'>
        <div className='px-5'>
            <h1 className='font-[800] text-[108px] leading-[102px] w-[700px]'>YOUR FEET DESERVE THE BEST</h1>
            <p className='font-[600] text-gray-800 mb-[30px] w-[400px]'> 
                YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES. YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR.
                SHOES.
            </p>
            <div className='flex gap-x-6 mb-[30px]'>
                <button className='bg-red-600 rounded-md'>Shop Now</button>
                <button className='border-2 px-2 rounded-md border-gray-600'>Catagory</button>
            </div>
            <div>
                <p className='text-[14px] mb-[8px]'>Also Available On.</p>
                <div className='flex gap-x-[16px]'>
                    <img src="/images/amazon.png" alt="amazon" />
                    <img src="/images/flipkart.png" alt="flipkart" />
                </div>
            </div>
        </div>
            <div className='w-[750px] h-[487px]'>
                <img src="/images/shoe_image.png" alt="shoe" />
            </div>
    </main>
  )
}

export default Hero