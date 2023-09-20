import type { Metadata } from 'next'
import { createClient } from "next-sanity";

export async function generateMetadata({ params}: { params: { slug: string } }) {
    const client = createClient({
        projectId: "z2edorqi",
        dataset: "production",
        apiVersion: "2021-10-14",
        useCdn: false
      });
      const metaData = await client.fetch(`*[_type == "post" && slug.current == '${params.slug}'][0]{title,desc}`, { cache: 'no-cache' });
    return {
      title: metaData.title,
      description: metaData.desc,
    }
  }

export default async function ContentLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) 

  {
    return (
      <section>
        {children}
      </section>
    )
  }