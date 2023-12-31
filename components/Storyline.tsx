import React from 'react'
import { BiLogoReact } from 'react-icons/bi'
import { BsMicrosoftTeams } from 'react-icons/bs'
import { AiOutlineCode } from 'react-icons/ai'
import vercel from '/public/vercel.svg'
import resend from '/public/resend.png'
import nextjs from '/public/nextjs.webp'
import amazon from '/public/amazon.png'
import shopify from '/public/shopify.png'
import Image from 'next/image'
const Storyline = () => {
  return (
    <section className='flex flex-col max-w-7xl justify-between items-center min-h-screen py-1 mx-auto gap-10'>
      <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        <div>
          <div className=''><BiLogoReact  className='w-10 h-10 text-cyan-500' /></div>
          <div>
            <h3>Full-Funnel Solution</h3>
            <p className='max-w-xs'>From awareness to sale, our full-funnel digital marketing solutions meet your customers where they’re at.</p>
          </div>
        </div>

        <div>
          <div><BsMicrosoftTeams  className='w-10 h-10 text-purple-500' /></div>
          <div>
            <h3>Extended Team</h3>
            <p className='max-w-xs'>Our diverse team of go-getters and digital experts is ready to become an extension of your marketing team.</p>
          </div>
        </div>

        <div>
          <div><AiOutlineCode  className='w-10 h-10 text-pink-500' /></div>
          <div>
            <h3>Advanced Tech</h3>
            <p className='max-w-xs'>We innovate with cutting-edge, patented technology that gives you an advantage over your competitors.</p>
          </div>
        </div>
      </div>

      <div className='flex flex-col justify-center items-center min-h-screen gap-10'>
        <h3 className='text-center p-10'>Our Services is brought to you with the help of these companies</h3>
        <div className='flex justify-center items-center py-5'>
          <div className='grid grid-cols-1 justify-items-center align-items-center md:grid-cols-2 gap-10'>
            <div className='w-28 h-28'><Image src={vercel} width={350} height={350} alt="Picture of the author"/>
            </div>
            <div className='w-28 h-28'><Image src={amazon} width={350} height={350} alt="Picture of the author"/>
            </div>
            <div className='w-28 h-28'><Image src={resend} width={350} height={350} alt="Picture of the author"/>
            </div>
            <div className='w-28 h-28'><Image src={shopify} width={350} height={350} alt="Picture of the author"/>
            </div>
            <div className='w-40 h-40'><Image src={nextjs} width={350} height={350} alt="Picture of the author"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Storyline