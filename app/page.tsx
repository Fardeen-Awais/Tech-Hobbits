import Image from 'next/image'
import Hero from '@/components/Hero'
import Storyline from '@/components/Storyline'
import Service from '@/components/Service'
import Prices from '@/components/Prices'
import ClientReview from '@/components/ClientReview'
import Post from '@/components/Post'

async function getData() {
  
  const res = await fetch('https://z2edorqi.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%27post%27%5D%0A')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}


export default async function Home() {
  const { result } = await getData()

  return (
    <main className='bg-background text-foreground  w-full'>
   
      <Hero/> {/* ✅ */}
      <Storyline/> {/* ✅ */}
      <Service/>
      <ClientReview/>
      <Prices/>
      {/* Contact Us */}
    </main>
  )
}
