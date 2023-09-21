import React from 'react'
import { createClient } from '@sanity/client';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from '@/components/ui/card';
import Link from 'next/link';

const ServiceCategory = async () => {
  const client = createClient({
    projectId: "z2edorqi",
    dataset: "production",
    apiVersion: "2021-10-14",
    useCdn: true
  });

  const ServiceCategory = await client.fetch(`*[_type == 'servicecategory']{_id,title,description}`,  { next: { revalidate: 10 } });

  return (

    <div className='flex flex-col justify-center items-center gap-10 min-h-screen '>
      <div className='flex flex-col justify-center items-center'>
        <h2>Our Services</h2>
        <p>Let&lsquo;s Explore our Buisness Friendly Services</p>
      </div>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-x-10 max-w-7xl px-10 text-center gap-10'>
        {
          ServiceCategory.map((category: any) => (
            <Link href={`/service/#${category.title}`} key={category._id}>
            <Card className='flex flex-col justify-center items-center p-5 cursor-pointer opacity-90 hover:opacity-100 scale-90 hover:scale-105 transition-all'>
              <CardHeader><CardTitle>{category.title}</CardTitle></CardHeader>
              <CardContent className='text-start'>
                <CardDescription className=' text-white text-base max-w-lg line-clamp-4'>{category.description}</CardDescription>
              </CardContent>
            </Card>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default ServiceCategory