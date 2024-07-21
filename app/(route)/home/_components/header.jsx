import Link from "next/link";
import { HeaderBox } from "@/styles/header";
import { useAuth } from "@/app/context/auth_context";

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <HeaderBox>
      <Link href="/">Switter</Link>
      {user ? (
        <button onClick={logout}>로그아웃</button>
      ) : (
        <Link href="/login">로그인</Link>
      )}
    </HeaderBox>
  );
};

export default Header;
