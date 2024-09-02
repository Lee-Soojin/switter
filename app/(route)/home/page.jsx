"use client";
import Head from "next/head";
import TweetForm from "./_components/form/form";
import Timeline from "./_components/timeline/timeline";
import { HomePageLayout } from "@/styles/home-style";

const HomePage = () => {
  return (
    <HomePageLayout>
      <Head>
        <title>Switter</title>
      </Head>
      <div className="home__mainPanel">
        <TweetForm />
        <Timeline />
      </div>
    </HomePageLayout>
  );
};

export default HomePage;
