"use client";

import { useEffect, useState } from "react";
import { useTweetService } from "@/app/context/tweet_context";
import TweetItem from "./tweet_item";
import { TimelineBox } from "@/styles/timeline-style";

const Timeline = (props) => {
  const [tweets, setTweets] = useState([]);
  const tweetService = useTweetService();

  useEffect(() => {
    const getTweetList = () => {
      tweetService
        .getAllTweets()
        .then((tweets) => {
          setTweets(tweets);
        })
        .catch(console.error);
    };
    getTweetList();

    let stopSync = tweetService.onSync(() => getTweetList());
    return () => stopSync();
  }, [tweetService]);

  return (
    <TimelineBox>
      {tweets &&
        tweets.map((tweet) => <TweetItem key={tweet.id} data={tweet} />)}
    </TimelineBox>
  );
};

export default Timeline;
