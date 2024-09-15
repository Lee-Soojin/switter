import Image from "next/image";
import Link from "next/link";
import SvgIcon from "@/svg/svg_icon";
import { ProfileBox } from "@/styles/profile-style";

const Profile = ({ user, tweetList }) => {
  return (
    <ProfileBox>
      <div>
        <Link href="/home" aria-label="go-back">
          <SvgIcon id="arrow" width={16} height={16} color="#0f1419" />
        </Link>
        <div>
          <p>{user?.name || ""}</p>
          <p>게시물 : {tweetList?.length || 0}개</p>
        </div>
      </div>
      <div>
        <Image
          src={user?.url || ""}
          width={130}
          height={130}
          alt="user profile"
        />
        <div>
          <p>{user?.name || ""}</p>
          <p>@{user?.username || ""}</p>
        </div>
      </div>
    </ProfileBox>
  );
};

export default Profile;
