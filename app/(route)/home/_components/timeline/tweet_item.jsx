"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { TweetItemBox } from "@/styles/timeline-style";
const apiURL = "http://localhost:8080";

const TweetItem = ({ data }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const textareaRef = useRef(null);

  const updateTweet = () => {
    if (
      textareaRef &&
      textareaRef.current &&
      textareaRef.current.value &&
      textareaRef.current.value.length > 0
    ) {
      fetch(apiURL + "/tweets/" + data.id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ tweet: textareaRef.current.value }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        })
        .catch(console.error);
    }
  };

  const deleteTweet = () => {
    fetch(apiURL + "/tweets", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: data.id, username: data.username }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch(console.error);
  };

  return (
    <TweetItemBox>
      <div>
        <Image
          src="https://pbs.twimg.com/media/GHLH6fla0AAL0Es?format=jpg&name=900x900"
          width={40}
          height={40}
          alt="profile"
        />
      </div>
      {isEditing ? (
        <form>
          <textarea
            name="tweet"
            id="tweet"
            cols="30"
            rows="10"
            placeholder="트윗을 완성해보세요."
            defaultValue={data.tweet}
            autoFocus={true}
            ref={textareaRef}
          ></textarea>
          <button onClick={updateTweet}>업로드</button>
        </form>
      ) : (
        <div>
          <p>{data.username}</p>
          <p>{data.tweet}</p>
        </div>
      )}
      {!isEditing && (
        <div>
          <button onClick={() => setIsEditing(true)}>수정</button>
          <button onClick={deleteTweet}>삭제</button>
        </div>
      )}
    </TweetItemBox>
  );
};

export default TweetItem;
