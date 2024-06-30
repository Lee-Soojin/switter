import { HeaderBox } from "@/styles/header";
import Link from "next/link";

const Header = () => {
  return (
    <HeaderBox>
      <Link href="/">Switter</Link>
      <Link href="/login">로그인</Link>
    </HeaderBox>
  );
};

export default Header;
