"use client";
import { createContext, useContext } from "react";

const TweetServiceContext = createContext(null);

export const TweetServiceProvider = ({ tweetService, children }) => {
  <TweetServiceContext.Provider value={tweetService}>
    {children}
  </TweetServiceContext.Provider>;
};

export const useTweetService = () => useContext(TweetServiceContext);
