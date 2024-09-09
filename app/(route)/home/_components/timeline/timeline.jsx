"use client";

import { Suspense, useEffect, useState } from "react";
import { useTweetService } from "@/app/context/tweet_context";
import TweetItem from "./tweet_item";
import { TimelineBox } from "@/styles/timeline-style";
import Loading from "@/app/loading";

const Timeline = (props) => {
  const [loading, setLoading] = useState(false);
  const [tweets, setTweets] = useState([]);
  const tweetService = useTweetService();

  useEffect(() => {
    const getTweetList = () => {
      setLoading(true);
      tweetService
        .getAllTweets()
        .then((tweets) => {
          setTweets(tweets);
          setTimeout(() => {
            setLoading(false);
          }, 3000);
        })
        .catch(console.error);
    };
    getTweetList();

    let stopSync = tweetService.onSync(() => getTweetList());
    return () => stopSync();
  }, [tweetService]);

  return (
    <TimelineBox>
      <Suspense fallback={<Loading />}>
        {tweets &&
          tweets.map((tweet) => <TweetItem key={tweet.id} data={tweet} />)}
      </Suspense>
    </TimelineBox>
  );
};

export default Timeline;
