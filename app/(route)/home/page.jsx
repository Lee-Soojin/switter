"use client";
import TweetForm from "./_components/form/form";
import { HomePageLayout } from "@/styles/home-style";
import Timeline from "./_components/timeline/timeline";

const HomePage = () => {
  return (
    <HomePageLayout>
      <div>
        <TweetForm />
        <Timeline />
      </div>
    </HomePageLayout>
  );
};

export default HomePage;
