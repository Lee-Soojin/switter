"use client";

import { Suspense, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import TweetItem from "./tweet_item";
import Loading from "@/app/loading";
import { useTweetService } from "@/app/context/tweet_context";
import { TimelineBox } from "@/styles/timeline-style";

const Timeline = (props) => {
  const [loading, setLoading] = useState(false);
  const [tweets, setTweets] = useState([]);
  const tweetService = useTweetService();
  const { id } = useParams();

  useEffect(() => {
    const getTweetList = () => {
      setLoading(true);
      if (id) {
        tweetService
          .getTweets(id)
          .then((res) => {
            setTweets(res);
            setLoading(false);
          })
          .catch(console.error);
      } else {
        tweetService
          .getAllTweets()
          .then((tweets) => {
            setTweets(tweets);
            setLoading(false);
          })
          .catch(console.error);
      }
    };

    getTweetList();
  }, [id, tweetService, setTweets, setLoading]);

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
