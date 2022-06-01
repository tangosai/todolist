import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineLogout } from "react-icons/ai";

export default function Headercmp() {
  const router = useRouter();

  const logout = () => {
    router.push("/");
  };

  return (
    <header className="flex m-5 justify-between">
      <div>
        <Link href="/">
          <a className="text-2xl font-medium text-center">Todo list</a>
        </Link>
      </div>
      <div>
        <AiOutlineLogout className="text-2xl cursor-pointer" onClick={logout} />
      </div>
    </header>
  );
}
