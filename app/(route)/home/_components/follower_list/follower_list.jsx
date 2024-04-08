"use client";

import { FollowerListBox, FollowerListItemBox } from "@/styles/follower-list";
import Image from "next/image";

const FollowerList = () => {
  return (
    <FollowerListBox>
      <p>내 Switter 친구 목록</p>
      <ul>
        <FollowerListItem data={{ isInFavorites: true }} />
        <FollowerListItem data={{ isInFavorites: true }} />
        <FollowerListItem data={{ isInFavorites: false }} />
        <FollowerListItem data={{ isInFavorites: false }} />
        <FollowerListItem data={{ isInFavorites: true }} />
        <FollowerListItem data={{ isInFavorites: false }} />
        <FollowerListItem data={{ isInFavorites: true }} />
      </ul>
    </FollowerListBox>
  );
};

const FollowerListItem = ({ data }) => {
  return (
    <FollowerListItemBox isInFavorites={data.isInFavorites}>
      <div>
        <Image
          src="https://pbs.twimg.com/media/GHLH6fla0AAL0Es?format=jpg&name=900x900"
          width={40}
          height={40}
          alt="profile"
        />
        <p>Yugyeom</p>
      </div>
      <button>즐겨찾기 ♥︎</button>
    </FollowerListItemBox>
  );
};

export default FollowerList;
