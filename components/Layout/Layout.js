import React from "react";
import Head from "next/head";
import Headercmp from "../CommonCmp/Headercmp";
import Footer from "../CommonCmp/Footer";

export default function Layout({ title, keywords, description, children }) {
  return (
    <div className="max-w-screen-xl mx-auto px-5 font-josefin">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>

      <Headercmp />

      {children}
      {/* <Footer /> */}
    </div>
  );
}
Layout.defaultProps = {
  title: "TODO LIST",
  description: "Find the latest DJ and other musical events",
  keywords: "todolist, todolist app, todo app",
};
