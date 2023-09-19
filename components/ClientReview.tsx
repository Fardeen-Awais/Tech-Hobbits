import React from 'react'
import TweetReview from './Tweet'
const ClientReview = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-col-2 lg:grid-cols-3  min-h-screen max-w-7xl mx-auto justify-items-center place-items-center gap-10 p-5 overflow-clip'>
        <div ><TweetReview tweetid={'1697981564511211697'}/></div>
        <div ><TweetReview tweetid={'1697981564511211697'}/></div>
        <div ><TweetReview tweetid={'1697981564511211697'}/></div>
        <div ><TweetReview tweetid={'1697984487593033893'}/></div>
        <div ><TweetReview tweetid={'1697984487593033893'}/></div>
        <div ><TweetReview tweetid={'1697984487593033893'}/></div>
    </div>
  )
}

export default ClientReview