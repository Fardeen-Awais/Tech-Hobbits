import { Button } from '@/components/ui/button';
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'
import Image from 'next/image';

export default async function Page({ params }: { params: { slug: string } }) {
    const client = createClient({
        projectId: "z2edorqi",
        dataset: "production",
        apiVersion: "2021-10-14",
        useCdn: true
    });
    const serviceDetail = await client.fetch(`*[_type == "service" && slug.current == '${params.slug}'][0]`, { caches: 'no-store' });
    const builder = imageUrlBuilder(client);
    return (
        <div className="min-h-screen flex max-w-7xl py-10 ">
            <div className='flex flex-col md:flex-row justify-center gap-5 items-center mx-auto' key={serviceDetail.slug}>
                <div className='flex flex-col max-w-2xl p-10 gap-5'>
                    <h1>{serviceDetail.title}</h1>
                    <p className='max-w-xl text-lg'>{serviceDetail.desc}</p>
                    <Button>Get started</Button>
                </div>
                <div className='flex w-80 md:w-96 sm:w-full max-w-7xl mx-auto justify-center items-center'>
                    <Image className='rounded-md scale-100 hover:scale-95 transition-all' src={builder.image(serviceDetail.mainImage).url()} width={500} height={500} alt={serviceDetail.title} />
                </div>
            </div>
        </div>
    )
}