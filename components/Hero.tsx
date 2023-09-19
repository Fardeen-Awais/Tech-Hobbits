
import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
// import HeroImage from "public/hero.webp"

const Hero = () =>  {
  return (
    <section
     className='flex flex-col sm:flex-row justify-evenly sm:justify-between items-center max-w-7xl mx-auto p-5 sm:p-10 gap-10 min-h-screen w-full'>
      <div className='flex flex-col gap-6'>
        <div>
          <h1 className='text-transparent bg-clip-text bg-gradient-to-tl from-purple-600 via-pink-400 to-pink-600'>Digital Service all over the Globe</h1>
          <p>Providing an excellent team to manage and solve your buisness stress to help you to get more revenue 💰</p>
        </div>
        <div className='flex gap-x-5'>
          <Button>Get started</Button>
          <Button variant="outline">About us</Button> {/* redirect to work:: that explain how we work  */}
        </div>
      </div>

      <div className='w-80 h-80 sm:w-full sm:h-full'>
        <Image
        src={'/hero.webp'}
        alt="Hero Image"
        width={500}
        height={500}
        loading="eager"
        className="relative inset-0"
        priority={true}
        draggable="false"
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
      </div>
    </section>

  )
}

export default Hero