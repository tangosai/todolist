import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-black h-screen w-screen flex justify-center items-center relative text-center">
      <div>
        <h1 className="text-9xl text-red-500 ">404</h1>
        <h2 className="text-6xl text-red-500">Page Not Found</h2>
        <h4 className="font-semibold text-white text-2xl mb-5">
          Sorry, The page you requested was not found.
        </h4>
        <Link href="/">
          <a className="font-semibold text-white px-5 py-3 cursor-pointer bg-red-500 ">
            Go Back
          </a>
        </Link>
      </div>
    </div>
  );
}
