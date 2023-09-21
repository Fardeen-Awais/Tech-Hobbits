import React from 'react'
import { createClient } from '@sanity/client';
import ServiceItems from './ServiceItems';
import { cn } from '@/lib/utils';
const Service = async () => {
    const client = createClient({
        projectId: "z2edorqi",
        dataset: "production",
        apiVersion: "2021-10-14",
        useCdn: true
    });

    const ServiceCategory = await client.fetch(`*[_type == 'servicecategory']{_id,title}`, { caches: 'no-store' });
    return (

        <div className='flex flex-col min-h-screen py-10'>
            {ServiceCategory.map((category: any) => (
                <div id={category.title} key={category._id} className='flex flex-col gap-36'>
                    <div className='flex overflow-hidden flex-col gap-20' >
                        <div className='flex flex-col justify-center items-center overflow-hidden gap-16' >
                            <h2 id={category._id} className={cn(`text-6xl`)}>{category.title}</h2>
                            <ServiceItems categoryId={category._id} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Service