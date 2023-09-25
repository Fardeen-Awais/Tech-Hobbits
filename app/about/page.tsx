import React from 'react'
import Image from 'next/image'
import { Separator } from '@/components/ui/separator'
import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import { TiSocialLinkedin } from 'react-icons/ti';
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const About = async () => {
  const client = createClient({
    projectId: "z2edorqi",
    dataset: "production",
    apiVersion: "2021-10-14",
    useCdn: true
  });

  const team = await client.fetch(`*[_type == "team"]`, { next: { revalidate: 6 } });
  const builder = imageUrlBuilder(client);

  return (
    <>
      <div className='flex flex-col justify-center items-start max-w-7xl min-h-screen mx-auto gap-20 my-10'>
        <div className='flex flex-col mx-5 max-w-md gap-5'>
          <p>Let we give you our introduction</p>
          <h1 className='py-4'>Tech Hobbit. Digital Agency</h1>
        </div>
        <div className='flex'>
          <Image className='w-full h-full mx-auto p-0' src="/assets/dominika-roseclay.jpg" style={{ objectFit: 'cover' }} width={2000} height={2000} alt="Agency image" />
        </div>
        <Separator className='' />
        <div className='flex flex-col '>
          <div className='flex flex-col sm:flex-row text-center sm:text-start gap-10 p-5 justify-center'>
            <h1>Meet with Our Executive Team</h1>
            <p className='max-w-sm p-5'>With a 400+ person team, we influence positive culture and innovation from the top down. Meet some of our leaders.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 gap-y-10 p-5 md:p-10 md:m-36 ">
            {team.map((member: any) => (
              <Card
                key={member._id}
                className="profile flex flex-col items-center justify-center gap-5 cursor-pointer opacity-75 hover:opacity-100 p-5 scale-95 hover:scale-100 transition-all"
              >
                <CardHeader>
                  <Image
                    src={builder.image(member.memberImage).url()}
                    alt={member.title}
                    width={200}
                    height={200}
                    className="h-20 w-20 object-cover rounded-full border-[1px] border-spacing-9 border-solid border-gray-900 "
                  />
                </CardHeader>

                <CardContent className="flex flex-col items-center justify-center gap-5">
                  <CardTitle className="Name text-sm font-semibold">{member.title}</CardTitle>
                  <CardDescription className="text-sm">{member.desc}</CardDescription>
                  <Link href={member.link} target='_blank'><TiSocialLinkedin className='flex items-center w-10 h-10 bg-blue-400 p-1 rounded-full ' /></Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <Separator />
      </div>
    </>

  )
}

export default About