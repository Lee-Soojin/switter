"use client";

import { useEffect, useState } from "react";
import TweetItem from "./tweet_item";
import { TimelineBox } from "@/styles/timeline-style";

const Timeline = () => {
  return (
    <TimelineBox>
      {tweets && tweets.map((x) => <TweetItem key={x.id} data={x} />)}
    </TimelineBox>
  );
};

export default Timeline;
