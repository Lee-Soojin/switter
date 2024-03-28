"use client";

import Image from "next/image";
import { TweetFormBox } from "@/styles/form-style";

const TweetForm = () => {
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
          ></textarea>
          <button>업로드</button>
        </form>
      </div>
    </TweetFormBox>
  );
};

export default TweetForm;
