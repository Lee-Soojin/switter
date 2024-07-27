"use client";

import { useEffect, useState } from "react";
import TweetItem from "./tweet_item";
import { useTweetService } from "@/app/context/tweet_context";
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
      {tweets && tweets.map((x) => <TweetItem key={x.id} data={x} />)}
    </TimelineBox>
  );
};

export default Timeline;
