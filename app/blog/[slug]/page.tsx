import { useRouter } from "next/router";
import { createClient } from "next-sanity";
// import { useForm } from "react-hook-form";
import { useState } from "react";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
// import PortableText from "react-portable-text";
import Head from "next/head";


export default async function Page({ params }: { params: { slug: string }}) {

    const client = createClient({
        projectId: "z2edorqi",
        dataset: "production",
        apiVersion: "2021-10-14",
        useCdn: false
      });
    const blog = await client.fetch(`*[_type == "post" && slug.current == '${params.slug}'][0]`);
    // const postsToDisplay = result;
    console.log({blog})

    return(
    <div className="min-h-screen flex">
        My Post: {params.slug} 
        {blog.title}

    </div>
  )}


  
  