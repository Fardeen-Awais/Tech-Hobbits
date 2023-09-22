import React from 'react'
import { createClient } from '@sanity/client';
import TweetReview from '@/components/Tweet';

const Testimonial = async() => {
  const client = createClient({
    projectId: "z2edorqi",
    dataset: "production",
    apiVersion: "2021-10-14",
    useCdn: true
  });

  const tweetid = await client.fetch(`*[_type == 'testimonials']`, { next: { revalidate: 6 } });
  return (
    <div className='flex flex-col justify-center items-stretch min-h-screen p-5'>
      <div className='flex flex-col justify-center items-center mx-auto p-5 max-w-md text-center opacity-80 hover:opacity-95 transition-all '>
        <h2>This is the Testimonial Page</h2>
        <p>Explore all the Customer Reviews by their original tweets.</p>
      </div>
      <div className='grid grid-cols-1 sm:grid-col-2 lg:grid-cols-3 min-h-screen max-w-7xl mx-auto justify-items-center place-items-center gap-3 p-2 '>
        {tweetid.map((tweet: any) => {
          return (
            <div className='scale-75 hover:scale-105 opacity-90 hover:opacity-95 transition-all ' key={tweet._id}><TweetReview tweetid={tweet.tweetid} /></div>
          )
        })}
      </div>
    </div>
  )
}

export default Testimonial