"use client";

import Image from "next/image";
import { FollowerListBox, FollowerListItemBox } from "@/styles/follower-list";

const tempData = [
  { isInFavorites: true },
  { isInFavorites: false },
  { isInFavorites: true },
  { isInFavorites: false },
  { isInFavorites: true },
  { isInFavorites: false },
  { isInFavorites: true },
  { isInFavorites: false },
];

const FollowerList = () => {
  return (
    <FollowerListBox>
      <p>내 Switter 친구 목록</p>
      <ul>
        {tempData.map((x) => (
          <FollowerListItem data={x} key={Math.random()} />
        ))}
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
