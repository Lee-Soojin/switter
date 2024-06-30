"use client";
import TweetForm from "./_components/form/form";
import { HomePageLayout } from "@/styles/home-style";
import Timeline from "./_components/timeline/timeline";
import FollowerList from "./_components/follower_list/follower_list";
import Head from "next/head";

const HomePage = () => {
  return (
    <HomePageLayout>
      <Head>
        <title>Switter</title>
      </Head>
      <div className="home__menuPanel"></div>
      <div className="home__mainPanel">
        <TweetForm />
        <Timeline />
      </div>
      <div className="home__followerPanel">
        <FollowerList />
      </div>
    </HomePageLayout>
  );
};

export default HomePage;
