"use client";

import { useRef } from "react";
import Image from "next/image";
import { useAuth } from "@/app/context/auth_context";
import { useTweetService } from "@/app/context/tweet_context";
import { TweetFormBox } from "@/styles/form-style";

const TweetForm = () => {
  const { _doc: user } = useAuth().user || {};
  const inputRef = useRef(null);
  const tweetService = useTweetService();

  const uploadTweet = (e) => {
    e.preventDefault();

    let text = inputRef?.current?.value;
    tweetService
      .postTweet(text)
      .then(() => {
        inputRef.current.value = null;
      })
      .catch(console.error);
  };

  return (
    <TweetFormBox>
      <div>
        <Image
          src={
            user.url ||
            "https://images.unsplash.com/photo-1638643391904-9b551ba91eaa?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          width={40}
          height={40}
          alt="profile"
        />
      </div>
      <div>
        <form>
          <textarea
            name="tweet"
            id=""
            cols="30"
            rows="10"
            placeholder="무슨 일이 일어나고 있나요?"
            autoFocus={true}
            ref={inputRef}
          ></textarea>
          <button onClick={uploadTweet}>업로드</button>
        </form>
      </div>
    </TweetFormBox>
  );
};

export default TweetForm;
