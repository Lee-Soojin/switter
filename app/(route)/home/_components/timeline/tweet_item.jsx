"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useTweetService } from "@/app/context/tweet_context";
import { TweetItemBox } from "@/styles/timeline-style";

const TweetItem = ({ data }) => {
  const [uploadDate, setUploadDate] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const textareaRef = useRef(null);
  const tweetService = useTweetService();

  useEffect(() => {
    let date = new Date(data.uploadDate);
    let month = date.getMonth() > 10 ? date.getMonth() : "0" + date.getMonth();
    let day = date.getDate() > 10 ? date.getDate() : "0" + date.getDate();
    if (data && data.uploadDate)
      setUploadDate(`${date.getFullYear() + "." + month + "." + day}`);
  }, [data, setUploadDate]);

  const updateTweet = () => {
    if (
      textareaRef &&
      textareaRef.current &&
      textareaRef.current.value &&
      textareaRef.current.value.length > 0
    ) {
      tweetService
        .modifyTweet(data.id, textareaRef.current.value)
        .then((res) => {
          setIsEditing(false);
        })
        .catch(console.error);
    }
  };

  const deleteThisTweet = () => {
    tweetService
      .deleteTweet(data.id, data.username)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch(console.error);
  };

  const onClickUpdate = (e) => {
    e.preventDefault();
    updateTweet();
  };

  return (
    <TweetItemBox>
      <div>
        <Image
          src={
            data.image ||
            "https://pbs.twimg.com/media/GHLH6fla0AAL0Es?format=jpg&name=900x900"
          }
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
          <button onClick={onClickUpdate}>업로드</button>
        </form>
      ) : (
        <div>
          <p>{data.username}</p>
          <p>{data.tweet}</p>
        </div>
      )}
      {!isEditing && (
        <p className="tweetItem__date">{uploadDate && uploadDate}</p>
      )}
      {!isEditing && (
        <div className="tweetItem__actions">
          <button onClick={() => setIsEditing(true)}>수정</button>
          <button onClick={deleteThisTweet}>삭제</button>
        </div>
      )}
    </TweetItemBox>
  );
};

export default TweetItem;
