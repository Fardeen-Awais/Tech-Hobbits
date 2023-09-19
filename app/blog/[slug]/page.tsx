import { useRouter } from "next/router";
import { createClient } from "next-sanity";
// import { useForm } from "react-hook-form";
import { useState } from "react";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
// import PortableText from "react-portable-text";
import Head from "next/head";
import PortableText from "react-portable-text";
import Link from "next/link";

export default async function Page({ params }: { params: { slug: string } }) {

  const client = createClient({
    projectId: "z2edorqi",
    dataset: "production",
    apiVersion: "2021-10-14",
    useCdn: false
  });
  const blog = await client.fetch(`*[_type == "post" && slug.current == '${params.slug}'][0]`, { cache: 'no-cache' });
  const builder = imageUrlBuilder(client);
  console.log(blog.body)
  // const imageUrl = builder.image(blog.body.asset._ref).url();
  // console.log(imageUrl)
  console.log({blog})
  return (
    <>
      <div className="mx-auto p-5 md:p-10 max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-5xl m-[950px] mt-6 ">
        <div>
          <h1>{blog.title}</h1>
          <p>{blog.desc}</p>
        </div>
        <article>
          <PortableText
            content={blog.body}
            projectId="z2edorqi"
            dataset="production"

            serializers={{
              h1: (props: any) => <h1 className="sm:text-4xl text-3xl font-bold py-5 " {...props} />,
              h2: (props: any) => <h2 className="sm:text-4xl text-3xl font-bold  py-3" {...props} />,
              h3: (props: any) => <h3 className="sm:text-3xl text-2xl font-bold  py-3" {...props} />,
              highlight: (props: string) => <div className="bg-[#ffff86]" {...props} />,
              summery: ({ children }: any) => (
                <div className="w-fit sm:w-full mx-auto flex items-start my-4 p-10 bg-yellow-100 text-lg">

                  {children}
                </div>
              ),
              code: (props: any) => <code className="bg-yellow-100 my-8 " {...props} />,
              ul: (props: any) => <ul className="list-disc m-5 text-lg marker:text-cyan-600 list-outside" {...props} />,
              ol: (props: any) => <ul className="list-decimal m-5 text-lg" {...props} />,
              normal: ({ children }: any) => <p className="text-xl ">{children}<br /></p>,
              link: ({ children }: any) => (
                <Link href={`${children}`} target="_blank" className=" text-white hover:text-pink-600 py-3 cursor-pointer underline">{children} </Link>
              ),
            }}
          />

        </article>
      </div>
    </>
  )
}



