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

const ServiceItems = async ({ categoryId }: any) => {
    const client = createClient({
        projectId: "z2edorqi",
        dataset: "production",
        apiVersion: "2021-10-14",
        useCdn: true
    });

    const service = await client.fetch(`*[_type == 'service' && "${categoryId}" in servicecategories[]._ref] {
        _id,
        slug,
        title,
        desc,
      }`, { next: { revalidate: 6 } });
    return (
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-x-10 max-w-7xl px-10 text-center gap-5'>
            {service.map((service: any) => (
                <Link href={"/service/" + service.slug.current} key={service._id}>
                    <Card className='flex flex-col justify-center items-center p-5 cursor-pointer opacity-90 hover:opacity-100 scale-90 hover:scale-105 transition-all'  >
                        <CardHeader>
                            <CardTitle>{service.title}</CardTitle>
                        </CardHeader>
                        <CardContent className='text-start'>
                            <CardDescription className=' text-white text-base max-w-lg line-clamp-4'>{service.desc}</CardDescription>
                        </CardContent>
                    </Card>
                </Link>
            ))}
        </div>
    )
}

export default ServiceItems