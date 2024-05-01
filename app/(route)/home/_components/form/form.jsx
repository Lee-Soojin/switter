"use client";

import { useRef } from "react";
import Image from "next/image";
import { TweetFormBox } from "@/styles/form-style";
const apiURL = "http://localhost:8080";
const TweetForm = () => {
  const inputRef = useRef(null);

  const uploadTweet = async (e) => {
    e.preventDefault();

    if (inputRef && inputRef.current && inputRef.current.value) {
      try {
        const response = await fetch(apiURL + "/tweets", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: "Yugyeom",
            tweet: inputRef.current.value,
          }),
        });

        const data = await response.json();
        console.log(data);

        e.target.submit();
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <TweetFormBox>
      <div>
        <Image
          src="https://images.unsplash.com/photo-1638643391904-9b551ba91eaa?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
