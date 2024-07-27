"use client";

import { useCallback, useEffect, useState } from "react";
import TweetItem from "./tweet_item";
import { TimelineBox } from "@/styles/timeline-style";
import { useAuth } from "@/app/context/auth_context";
import { socketIO } from "@/app/layout";
import { useTweetService } from "@/app/context/tweet_context";
const apiURL = "http://localhost:8080";

const Timeline = (props) => {
  const { user } = useAuth();
  const [tweets, setTweets] = useState([]);
  const tweetService = useTweetService();

  const getTweets = useCallback(() => {
    tweetService
      .getAllTweets()
      .then((tweets) => setTweets(tweets))
      .catch(console.error);

    const stopSync = tweetService.onSync((tweet) => onCreated(tweet));
    return () => stopSync();
  }, [user, setTweets]);

  const onCreated = (tweet) => {
    setTweets((tweets) => setTweets([...tweets, tweet]));
  };

  useEffect(() => {
    getTweets();
  }, [getTweets]);

  // socketIO.on("update", (message) => {
  //   getTweets();
  //   console.log(message);
  // });

  return (
    <TimelineBox>
      {tweets && tweets.map((x) => <TweetItem key={x.id} data={x} />)}
    </TimelineBox>
  );
};

export default Timeline;
