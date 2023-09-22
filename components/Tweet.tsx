import React from 'react';
import { Tweet } from 'react-tweet';
import { components } from './subcomponents/Tweet-component';

interface TweetReviewProps {
  tweetid: string;
}

const TweetReview: React.FC<TweetReviewProps> = ({ tweetid }) => {

  return (
    <div className='light p-5 '>
      <Tweet id={tweetid} components={components} />
    </div>
  );
};

export default TweetReview;
