import { FeedAction } from '../components/FeedAction';
import { FeedHeader } from '../components/FeedHeader';
import { FeedImage } from '../components/FeedImage';
import feedImage from '../assets/FeedImg.jpg';
import storyImag from '../assets/StoryImg.jpg';
import { useState } from 'react';

export const Feed = () => {
  const [feedData, setFeedData] = useState([
    {
      name: 'k1mchae1',
      profile: feedImage,
      feedImg: storyImag,
      date: '2일',
      likes: 5,
    },
  ]);

  const hadleLike = () => {
    setFeedData(([feed]) => [
      {
        ...feed,
        likes: feed.likes + 1,
      },
    ]);
  };

  return (
    <main className="w-full h-[602px] bg-white flex flex-col border-t border-b border-#AEAEAE">
      <FeedHeader
        profile={feedData[0].profile}
        name={feedData[0].name}
        date={feedData[0].date}
      />
      <FeedImage feedImg={feedData[0].feedImg} />
      <FeedAction likes={feedData[0].likes} onLike={hadleLike} />
    </main>
  );
};