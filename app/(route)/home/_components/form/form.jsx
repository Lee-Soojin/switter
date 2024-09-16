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
          src={user?.url || "/images/default_profile.png"}
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
