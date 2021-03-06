import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const login = (e) => {
    e.preventDefault();
    router.push("/dashboard");
  };
  return (
    <>
      <div className="bg-black h-screen w-screen flex justify-center items-center relative">
        <img
          src="./images/img.jpg"
          alt="bg_img"
          className="absolute top-0 left-0 w-screen h-screen object-cover"
        />
        <div className="absolute top-0 left-0 w-screen h-screen bg-black bg-opacity-90"></div>
        <div className="z-10 shadow-xl w-10/12 sw:w-8/12 md:w-6/12 lg:w-4/12 xl:w-3/12 bg-white p-5 rounded-md">
          <div className="mb-3">
            <h1 className="text-3xl font-medium">Get&#39;s started</h1>
            <p className="text-base">
              If you don’t have an account you can
              <br />
              <Link href="/register">
                <a className="font-semibold">Register here !</a>
              </Link>
            </p>
          </div>
          <div>
            <form>
              <div className="mb-5">
                <input
                  type="email"
                  name="emailId"
                  placeholder="Email Id"
                  className="p-1  w-full border border-slate-300 h-10 focus:border-slate-700 outline-none"
                />
              </div>
              <div className="mb-5">
                <input
                  type="password"
                  name="password"
                  placeholder="Pawwword"
                  className="p-1 w-full border border-slate-300 h-10 focus:border-slate-700 outline-none"
                />
              </div>
              <button
                className="bg-black px-8 py-1 cursor-pointer h-10 text-white font-semibold w-full hover:bg-lime-400 hover:text-black"
                onClick={login}
              >
                LOGIN
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
