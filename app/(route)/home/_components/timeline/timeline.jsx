"use client";

import { useEffect, useState } from "react";
import TweetItem from "./tweet_item";
import { TimelineBox } from "@/styles/timeline-style";
const apiURL = "http://localhost:8080";

const Timeline = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const getTweets = () => {
      fetch(apiURL + "/tweets", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setTweets(data.tweetList);
        })
        .catch(console.error);
    };
    getTweets();
  }, [setTweets]);

  return (
    <TimelineBox>
      {tweets && tweets.map((x) => <TweetItem key={x.id} data={x} />)}
    </TimelineBox>
  );
};

export default Timeline;
