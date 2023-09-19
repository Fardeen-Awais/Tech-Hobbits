import React from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from '@/components/ui/card';
import Image from 'next/image';
import imageUrlBuilder from '@sanity/image-url'
import Link from 'next/link';
import { createClient } from "@sanity/client";

const Post = async () => {
  const client = createClient({
    projectId: "z2edorqi",
    dataset: "production",
    apiVersion: "2021-10-14",
    useCdn: true
  });

  const result = await client.fetch(`*[_type == "post"]`);
  const builder = imageUrlBuilder(client);
  const postsToDisplay = result;
  return (

    <section className='flex flex-col gap-3 max-w-7xl justify-center items-center min-h-screen px-5 mx-auto'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 '>
        {postsToDisplay.map((service: any) => (
          <Link href={"/blog/" + service.slug.current} key={service.slug}>
            <Card className='group h-[500px] scale-75 hover:scale-90 transition-all' >
              <CardHeader>
                <div className='flex items-center'>
                  <Image
                    src={builder.image(service.mainImage).url()}
                    alt='Service item'
                    width={750}
                    height={750}
                    className="h-48 w-full object-cover transition-transform duration-200 ease-in-out center group-hover:scale-105"
                  />
                </div>
              </CardHeader>
              <CardContent >
                <CardTitle>{service.title}</CardTitle>
                <CardDescription className='line-clamp-4 text-base'>{service.desc}</CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Post
