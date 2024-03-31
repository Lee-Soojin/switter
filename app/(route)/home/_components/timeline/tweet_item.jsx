"use client";

import { TweetItemBox } from "@/styles/timeline-style";
import Image from "next/image";

const TweetItem = ({ data }) => {
  return (
    <TweetItemBox>
      <div>
        <Image
          src="https://images.unsplash.com/photo-1638643391904-9b551ba91eaa?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={40}
          height={40}
          alt="profile"
        />
      </div>
      <div>
        <p>{data.username}</p>
        <p>{data.tweet}</p>
      </div>
      <div>
        <button>수정</button>
        <button>삭제</button>
      </div>
    </TweetItemBox>
  );
};

export default TweetItem;
