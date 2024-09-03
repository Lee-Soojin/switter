"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useAuth } from "@/app/context/auth_context";
import { useTweetService } from "@/app/context/tweet_context";
import { TweetItemBox } from "@/styles/timeline-style";

const TweetItem = ({ data }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isOwner, setIsOwner] = useState(false);
  const textareaRef = useRef(null);
  const tweetService = useTweetService();
  const { _doc: user } = useAuth().user || {};

  useEffect(() => {
    if (user && data && user._id === data.userId) setIsOwner(true);
    else setIsOwner(false);
  }, [user, data, setIsOwner]);

  const updateTweet = () => {
    let text = textareaRef?.current?.value;
    if (text && text.length > 0) {
      setLoading(true);
      tweetService
        .modifyTweet(data.id, text)
        .then((res) => {
          setIsEditing(false);
          setLoading(false);
        })
        .catch(console.error);
    }
  };

  const deleteThisTweet = () => {
    setLoading(true);
    tweetService
      .deleteTweet(data.id, data.username)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);

        setLoading(false);
      })
      .catch(console.error);
  };

  const onClickUpdate = (e) => {
    e.preventDefault();
    updateTweet();
  };

  const formatDate = (dateVal) => {
    let today = new Date();
    let date = new Date(dateVal);

    let days = Math.floor((today - date) / (1000 * 60 * 60 * 24));
    let hours = Math.floor((today - date) / (1000 * 60 * 60));

    if (days > 0) return `${days}일 전`;
    else if (hours > 0) return `${hours}시간 전`;
    else return `방금 전`;
  };

  return (
    <TweetItemBox $isOwner={isOwner}>
      <div>
        <Image
          src={data.url || "/images/default_profile.png"}
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
            defaultValue={data.text}
            autoFocus={true}
            ref={textareaRef}
          ></textarea>
          <button onClick={onClickUpdate}>업로드</button>
        </form>
      ) : (
        <div>
          <p>{data.name}</p>
          <p>{data.text}</p>
        </div>
      )}
      {!isEditing && (
        <p className="tweetItem__date">{formatDate(data.updatedAt)}</p>
      )}
      {!isEditing && user._id === data.userId && (
        <div className="tweetItem__actions">
          <button onClick={() => setIsEditing(true)}>수정</button>
          <button onClick={deleteThisTweet}>삭제</button>
        </div>
      )}
    </TweetItemBox>
  );
};

export default TweetItem;
