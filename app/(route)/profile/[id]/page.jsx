"use client";
import { useContext, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Profile from "./profile";
import AuthContext from "@/app/context/auth_context";
import { useTweetService } from "@/app/context/tweet_context";
import { ProfilePageLayout } from "@/styles/profile-style";
import Timeline from "../../home/_components/timeline/timeline";

const ProfilePage = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [tweetList, setTweetList] = useState(null);
  const [loading, setLoading] = useState(false);
  const tweetService = useTweetService();
  const authContext = useContext(AuthContext);

  useEffect(() => {
    const getData = async (id) => {
      try {
        const tweets = await tweetService.getTweets(id);
        const profile = await authContext.getprofile(id);
        setUser(profile);
        setTweetList(tweets);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      setLoading(true);
      getData(id);
    }
  }, [id, setUser, setTweetList, setLoading]);

  return (
    <ProfilePageLayout>
      {user && <Profile user={user} tweetList={tweetList} />}
      <Timeline />
    </ProfilePageLayout>
  );
};

export default ProfilePage;
