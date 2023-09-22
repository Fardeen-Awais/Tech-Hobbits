import React from 'react'
import TweetReview from './Tweet'
import { createClient } from '@sanity/client';

const ClientReview = async () => {
  const client = createClient({
    projectId: "z2edorqi",
    dataset: "production",
    apiVersion: "2021-10-14",
    useCdn: true
  });

  const tweetid = await client.fetch(`*[_type == 'testimonials'][0..2]`, { next: { revalidate: 6 } });

  return (
    <div className=' flex flex-col justify-start items-start p-10 max-w-7xl mx-auto'> 
      <div className='px-10 sm:px-20 text-center'>
        <h2>Let&lsquo;s see how our clients feel about us.</h2>
      </div>
      <div className='grid grid-cols-1 sm:grid-col-2 lg:grid-cols-3 min-h-screen max-w-7xl mx-auto justify-items-center place-items-center gap-10 p-5 overflow-clip'>
        {tweetid.map((tweet: any) => {
          return (
            <div className='scale-75 hover:scale-105 opacity-90 hover:opacity-95 transition-all ' key={tweet._id}><TweetReview tweetid={tweet.tweetid} /></div>
          )
        })}
      </div>
    </div>
  )
}

export default ClientReview